import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function BreadCrumbs({id}) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a
              href="#"
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Home
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a
              href={"#"}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current={"page"}
            >
              Product #{id}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
