import { Link } from "react-router";

export function Collapse() {
    return (
        <div className="absolute right-2 top-full mt-2 w-56 
                        bg-gray-900/95 backdrop-blur-xl 
                        border border-white/10 
                        rounded-xl shadow-2xl 
                        overflow-hidden z-50">

            <nav className="flex flex-col p-1.5">
                <Link
                    to="/auth/sign-in"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 
                             text-sm font-medium text-gray-200 
                             hover:text-white hover:bg-white/10 
                             rounded-lg transition-all duration-200
                             first:mt-0"
                >
                    Sign In
                </Link>

                <Link
                    to="/settings"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 
                             text-sm font-medium text-gray-200 
                             hover:text-white hover:bg-white/10 
                             rounded-lg transition-all duration-200"
                >
                    Settings
                </Link>
            </nav>
        </div>
    );
}