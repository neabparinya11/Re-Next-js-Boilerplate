import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-500 hover:text-gray-50"
            >
              {/* {t('home_link')} */}
              หน้าหลัก
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="border-none text-gray-500 hover:text-gray-50"
            >
              My Feed
            </Link>
          </li>
          <li>
            <Link
              href="/guestbook/"
              className="border-none text-gray-500 hover:text-gray-50"
            >
              {/* {t('guestbook_link')} */}
              Pantip Pick
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="border-none text-gray-500 hover:text-gray-50"
            >
              {/* {t('portfolio_link')} */}
              Pantip Hitz
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="border-none text-gray-500 hover:text-gray-50"
            >
              {/* {t('portfolio_link')} */}
              Explore
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <button
            type="button"
            id="mega-menu-dropdown-button"
            className="flex rounded-full border-2 p-1 md:p-2"
            aria-label="Menu"
          >
            <IoMdMenu size={30} />
            <MdAccountCircle size={30} />
          </button>
          <div
            id="mega-menu-dropdown"
            className="absolute z-10 hidden w-auto grid-cols-2 rounded-lg border border-gray-100 bg-white text-sm shadow-md"
          >
            <div className="py-2 text-sm">
              <ul
                aria-labelledby="mega-menu-dropdown-button"
                className="space-y-4"
              >
                <li className="block px-4 py-2 hover:bg-gray-100">
                  สมัครสมาชิก
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                  เข้าสู่ระบบ
                </li>
              </ul>
              <ul className="py-1" aria-labelledby="mega-menu-dropdown-button">
                <li className="block px-4 py-2 text-sm text-gray-700">
                  แลกพอยต์
                </li>
              </ul>
            </div>
          </div>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
