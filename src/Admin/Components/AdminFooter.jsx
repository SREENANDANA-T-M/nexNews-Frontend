function AdminFooter() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-4 md:px-8 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 text-center md:text-left">

        <p className="text-xs sm:text-sm text-gray-400">
          © 2026 NexNews Admin Panel. All Rights Reserved.
        </p>

        <p className="text-xs sm:text-sm text-gray-500">
          Version 1.0
        </p>

      </div>

    </footer>
  );
}

export default AdminFooter;