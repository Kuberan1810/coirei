
const roles = [
  "AI ML Intern",
  "UI & UX Intern",
  "Frontend & Fullstack Intern",
  "Digital Marketing Intern",
 
];

const CareersRoles = () => {
  return (
    <section className=" text-white py-8 mx-15">
      <div className=" py-2">

        {/* HEADER */}
        <h2 className="text-[64px] text-4xl font-medium mb-4">Open roles</h2>

        <p className="text-[18px] text-gray-200 mb-1">
          If you’re passionate about helping developers get more done, we’d love to chat.
        </p>
        <p className="text-[18px] text-gray-200 mb-10">
          We’re currently hiring for the following roles:
        </p>

        {/* ROLES LIST */}
        <div className="border-t border-white/10">
          {roles.map((role, index) => (
            <div key={index} className="border-b border-white/30">

              {/* ROLE HEADER (CLICKABLE) */}
              <div
                className="w-full p-7.5 text-left flex items-center justify-between hover:bg-white/5 transition"
              >
                <div>
                  <p className="text-[20px] text-base font-semibold">{role}</p>
                  <p className="text-[20px] text-medium text-gray-300 mt-1">
                    Hybrid
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareersRoles;
