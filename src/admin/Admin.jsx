import {
  RiDashboardLine,
  RiUserLine,
  RiCalendarLine,
  RiLogoutBoxLine,
} from "@remixicon/react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Header */}
      <header className="h-16 bg-black border-b border-gray-800 flex items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center">
            <RiDashboardLine size={20} />
          </div>

          <div>
            <h1 className="font-bold">Soul Fitness</h1>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
          <RiLogoutBoxLine size={19} />
          <span className="hidden sm:block text-sm">Logout</span>
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-60 min-h-[calc(100vh-4rem)] bg-black border-r border-gray-800 p-5">
          <nav className="flex flex-col gap-2">
            <button className="flex items-center gap-3 bg-red-500 text-white px-4 py-3 rounded-lg text-sm font-semibold">
              <RiDashboardLine size={19} />
              Dashboard
            </button>

            <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c1c1c] hover:text-white px-4 py-3 rounded-lg text-sm transition">
              <RiUserLine size={19} />
              Leads
            </button>

            <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c1c1c] hover:text-white px-4 py-3 rounded-lg text-sm transition">
              <RiCalendarLine size={19} />
              Follow Ups
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Dashboard
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Welcome to Soul Fitness CRM
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-sm">New Leads Today</p>
              <h3 className="text-3xl font-bold mt-3">0</h3>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-sm">Total Leads</p>
              <h3 className="text-3xl font-bold mt-3">0</h3>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-sm">Contacted</p>
              <h3 className="text-3xl font-bold mt-3">0</h3>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-sm">Converted</p>
              <h3 className="text-3xl font-bold mt-3">0</h3>
            </div>
          </div>

          {/* Recent Leads */}
          <div className="mt-8 bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-5 border-b border-gray-800">
              <h3 className="font-bold text-lg">Recent Leads</h3>
            </div>

            <div className="p-8 text-center text-gray-500 text-sm">
              No leads available yet.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;