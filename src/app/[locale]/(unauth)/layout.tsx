import Link from 'next/link';

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
        <button type="button" className="border-r" onClick={() => {}}>
          Account
        </button>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
