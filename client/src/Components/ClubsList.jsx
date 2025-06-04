const ClubsList = () => {
  return (
      <div className="border-t pt-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Club Locations</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Club A: Aurora</strong><br />
            123 Sunshine Blvd, Crystal City, ST 98765
          </li>
          <li>
            <strong>Club B: Nebula</strong><br />
            456 Moonlight Ave, Nova Town, ST 12345
          </li>
        </ul>
      </div>
  )
}

export default ClubsList