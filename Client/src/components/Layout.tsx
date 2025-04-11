import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Chat', href: '/chat' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

interface DisclosureRenderProps {
  open: boolean;
}

interface MenuItemRenderProps {
  active: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { darkMode, toggle: toggleTheme } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
          {({ open }: DisclosureRenderProps) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        M Kings
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`${
                            location.pathname === item.href
                              ? 'border-primary-500 text-gray-900 dark:text-white'
                              : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                          } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      {darkMode ? (
                        <SunIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MoonIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <Menu.Button className="flex rounded-full bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                          {user?.name.charAt(0)}
                        </div>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }: MenuItemRenderProps) => (
                              <Link
                                to="/profile"
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                              >
                                Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }: MenuItemRenderProps) => (
                              <button
                                onClick={logout}
                                className={`${
                                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile menu */}
              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        location.pathname === item.href
                          ? 'bg-primary-50 dark:bg-primary-900 border-primary-500 text-primary-700 dark:text-primary-200'
                          : 'border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}; 