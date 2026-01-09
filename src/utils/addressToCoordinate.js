const GOOGLE_API_KEY = "AIzaSyBSL-cVW9QJdjU9uwmJLvrWTI34vk9oFnY";

export default async function addressToCoordinate(address) {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK") {
    throw new Error("Geocoding failed");
  }

  const location = data.results[0].geometry.location;

  return {
    latitude: location.lat,
    longitude: location.lng,
  };
}
