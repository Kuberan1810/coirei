const RequestDemo = () => {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden">

            {/* LEFT IMAGE */}
            <img
                src="/images/demo-left.png"
                className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30"
                alt=""
            />

            {/* RIGHT IMAGE */}
            <img
                src="/images/demo-right.png"
                className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30"
                alt=""
            />

            {/* CENTER FORM */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#1e1e1e] p-10 rounded-xl w-full max-w-md">

                    <h2 className="text-3xl text-white mb-6">
                        Request a Demo
                    </h2>

                    <input
                        className="w-full mb-4 p-3 bg-black border border-white/20 rounded text-white"
                        placeholder="Name"
                    />

                    <input
                        className="w-full mb-6 p-3 bg-black border border-white/20 rounded text-white"
                        placeholder="Work Email"
                    />

                    <button className="w-full bg-white text-black py-3 rounded font-medium">
                        Submit
                    </button>

                </div>
            </div>

        </section>
    );
};

export default RequestDemo;
