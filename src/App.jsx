function App() {
  const services = [
    {
      name: "Injection Support",
      price: "₹300 Visit",
    },
    {
      name: "Dressing",
      price: "₹500 Visit",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* MAIN CONTAINER */}
      <div className="bg-white shadow-xl">

        {/* HEADER */}
        <div className="bg-blue-600 text-white py-1 px-5 text-center">
          <h1 className="text-5xl font-bold mb-3">
            Home Nursing Care
          </h1>

          <p className="text-2xl">
            Basic Nursing & Home Healthcare Services
          </p>
        </div>

        {/* ABOUT */}
        <div className="py-12 px-2 border-b">
          <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">
            About Me
          </h2>

          <p className="text-xl text-slate-700 leading-9 text-center max-w-4xl mx-auto">
            I provide basic nursing and healthcare support at home.
            Services include injection support,
            wound dressing, and basic medical assistance.
            Available in Dehradun and nearby areas.
          </p>
        </div>

        {/* SERVICES */}
        <div className="py-12 px-8 border-b bg-slate-50">
          <h2 className="text-4xl font-bold mb-10 text-blue-600 text-center">
            Services & Charges
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-slate-700">
                  {service.name}
                </h3>

                <span className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        

        {/* CONTACT */}
        <div className="py-12 px-8 text-center bg-blue-600 text-white">
          <h2 className="text-4xl font-bold mb-8">
            Contact Details
          </h2>

          <div className="space-y-5 text-xl">
             <p>
               Name: <strong>Poornima Thakur</strong>
            </p>
            <p>
              📞 Phone: <strong>+91 9557146926</strong>
            </p>

            <p>
              💬 WhatsApp: <strong>+91 8433128428</strong>
            </p>

            <p>
              📍 Location: <strong>Dehradun</strong>
            </p>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-yellow-50 p-6 text-center text-slate-700 border-t">
          <p className="text-lg">
            This service provides only basic nursing and healthcare support.
            For emergency or serious medical conditions, please consult
            a qualified doctor or hospital.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;