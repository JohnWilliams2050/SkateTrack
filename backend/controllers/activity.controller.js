import Activity from "../models/activity.model.js";
import User from "../models/user.model.js";

export const getActivities = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const user = await User.findOne({ clerkUserId: req.params.userId });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const activities = await Activity.find({ user: user._id }).populate("user","username")
    .sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);
    console.log("Activities:", activities);
    const total = await Activity.countDocuments({ user: user._id });
    const hasMore = page * limit < total;
    console.log("Activities:", total);
  res.status(200).json({activities, hasMore});
};

export const addActivity = async (req, res) => {
    console.log("POST /activities body:", req.body);
  const clerkUserId = req.auth.userId;
  //const postId = req.params.postId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const user = await User.findOne({ clerkUserId });

  const newActivity = new Activity({
    ...req.body,
    user: user._id,
  });

  const savedActivity = await newActivity.save();

  res.status(201).json(savedActivity);
};

export const deleteActivity = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const id = req.params.id;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Activity.findByIdAndDelete(req.params.id);
    return res.status(200).json("Activity has been deleted");
  }

  const user = await User.findOne({ clerkUserId });

  const deletedComment = await Activity.findOneAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deletedComment) {
    return res.status(403).json("You can delete only your comment!");
  }

  res.status(200).json("Activity deleted");
};