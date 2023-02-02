import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NewRoom() {
  return (
    <div>
      <Navbar />
      <form className="w-2/3 mx-auto my-8 shadow-md rounded-md p-5 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Create new Room</h1>
        <hr className="border my-3" />
        <div className="form-control">
          <label className="label">Description</label>
          <textarea
            className="textarea textarea-bordered"
            name="extra_details"
            rows={5}
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="label">Space</label>
            <input
              placeholder="440"
              name="space"
              className="input input-bordered w-full"
              type="number"
            />
          </div>
          <div className="flex-1">
            <label className="label">Rent cost</label>
            <input
              placeholder="500.99"
              name="rent_cost"
              className="input input-bordered w-full"
              type="number"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">Tags</label>
          <input
            placeholder="Enter tags seperated by comma"
            name="tags"
            className="input input-bordered w-full"
            type="number"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          create new room
        </button>
      </form>
      <Footer />
    </div>
  );
}
