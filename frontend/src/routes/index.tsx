import FetchingData from "~/components/fetchingData";


export default function Home() {
  return (
    <div class="p=4">
      <h1 class="text-2xl font-bold text-center mb-4">
        Your Posts :
      </h1>
      <FetchingData />
    </div>
  );
}
