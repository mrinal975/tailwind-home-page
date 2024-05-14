import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <div className="md:flex items-center justify-center">
        <img src={laptop} alt="analytics" className="w-[500px] mx-auto" />
        <div className=" p-4 ">
          <p className="md:text-[13px] uppercase text-[#00df9a] text-[12px] font-bold">
            data analytics dashboard
          </p>
          <h1 className="md:text-xl  text-lg py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="md:text-[12px] text-[11px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-black text-[#00df9a] px-4 py-2 mt-4 w-[200px] rounded-md font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
