import robot from "../../assets/images/r.jpg";
function Dealerfooter() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="border-2	 left flex justify-between items-center bg-[#f9f9f9] gap-20">
        <label className="sidebar-label-container" htmlFor="robot">
  <input type="checkbox" id="robot" />
  <span className="checkmark checkmark-g"></span>
  I'm not a robot
</label>

          <div>
            <img className="robot-img" src={robot} alt="" />
            <span className="text-sm text-gray-600">Privacy- Terms</span>
          </div>
        </div>
        <div className="right">
          <div>
            <label
              htmlFor="custom-checkbox"
              className="sidebar-label-container"
            >
              <input type="checkbox" id="custom-checkbox" />
              <span className="checkmark checkmark-r"></span>I have read the
              <a
                className="text-red-700 font-bold underline"
                href="https://fnrco.com/terms_and_conditions.php"
              >
                Terms & Condition
              </a>
              and agree to abide by these
            </label>
          </div>
          <div className="flex gap-6 justify-end mt-8">
            <button className="gray-btn bg-[#d9d9d9]">Clear FIELDS</button>
            <button type="submit" className="red-btn text-white bg-red-600">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dealerfooter;
