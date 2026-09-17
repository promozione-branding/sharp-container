import Location from "./Location";
import { redirect } from "next/navigation";

const cities = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivli",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad (Prayagraj)",
  "Howrah",
  "Ranchi",
  "Gwalior",
  "Jabalpur",
  "Coimbatore",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli-Dharwad",
  "Mysore",
  "Bareilly",
  "Moradabad",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Tiruchirappalli",
  "Bhubaneswar",
  "Salem",
  "Mira-Bhayandar",
  "Thiruvananthapuram",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Nanded",
  "Kolhapur",
  "Ajmer",
  "Akola",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Latur",
  "Dhule",
  "Panipat",
  "Ambala",
  "Tirunelveli",
  "Alwar",
  "Jagraon",
  "Siliguri",
  "Muzaffarpur",
  "Guntur",
  "Warangal",
  "Jhansi",
  "Satara",
  "Karnal",
  "Shimla",
  "Anand",
  "Rewari",
];

export async function generateMetadata({ params }) {
  const { location } = await params;

  // Get city slug
  const rawCity = location.split("-in-")[1];

  // Convert slug to city name
  const city = rawCity
    ? rawCity
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return {
    title: `Sharp Container Manufacturer in ${city} | Biomedical Waste Containers Supplier`,
    description: `Sangam Plastic Industries is a trusted Sharp Container Manufacturer in ${city} offering high-quality, puncture-resistant biomedical waste disposal containers for hospitals, laboratories, clinics.`,
  };
}

const Page = async ({ params }) => {
  const { location } = await params;

  // URL must contain "-in-"
  if (!location || !location.includes("-in-")) {
    redirect("/");
  }

  // Get city slug
  const citySlug = location.split("-in-")[1];

  if (!citySlug) {
    redirect("/");
  }

  // Convert URL slug to city name
  const cityName = citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Match city with cities array
  const matchedCity = cities.find(
    (city) => city.toLowerCase() === cityName.toLowerCase()
  );

  // City doesn't exist → Home
  if (!matchedCity) {
    redirect("/");
  }

  return <Location city={matchedCity} />;
};

export default Page;