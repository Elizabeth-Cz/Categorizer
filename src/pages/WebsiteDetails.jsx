import { Link } from 'react-router-dom';
import { TfiNewWindow } from 'react-icons/tfi';
import Page from '../components/Page';
import ynet from '../assets/ynet.png';

const data = {
  logo: ynet,
  url: 'ynet.co.il',
  updated: '15/03/2023',
  language: 'Hebrew',
  similarWebsites: ['BBC.com', 'mytimes.com', 'walla.co.il', 'mako.co.il'],
};

const WebsiteDetails = () => {
  const { logo, url, updated, language, similarWebsites } = data;
  return (
    <Page>
      <div className="p-1 flex gap-2 items-center">
        <img
          className="w-8 p-2 drop-shadow rounded-md bg-white"
          src={logo}
          alt=""
        />
        <div>
          <a title={`Go to ${url}`} href={url} rel="noreferrer" target="_blank">
            <h2 className="text-2xl flex items-center gap-2">
              {url}
              <TfiNewWindow className="text-sm" />
            </h2>
          </a>
          <p className="text-xs italic text-[#7f7f7f]">
            Last Update: {updated}
          </p>
        </div>
        <Link
          to="/"
          className="text-violet-400 underline italic mb-auto ml-auto text-sm"
        >
          API Version?
        </Link>
      </div>
      <article className="flex flex-col justify-between gap-8 my-8">
        <section>
          <h3 className="font-bold mb-2 text-lg">IAB Categorization</h3>
          <div className="w-fit bg-violet-100 p-4 flex gap-4 rounded-lg border border-dark-purple">
            <h4 className="underline text-dark-purple font-bold">News</h4>
            <span className="font-bold text-violet-300">&gt;</span>
            <h4 className="underline text-dark-purple font-bold">
              International News
            </h4>
          </div>
        </section>
        <section>
          <h3 className="font-bold mb-2 text-lg">Other:</h3>
          <ul className="pl-6">
            <li className="list-disc">
              <h4 className="font-bold">
                News <span className="font-normal">&gt; Local News</span>
              </h4>
            </li>
            <li className="list-disc">
              <h4 className="font-bold">
                News{' '}
                <span className="font-normal">&gt; International News</span>
              </h4>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-bold mb-2 text-lg">Metadata:</h3>
          <ul className="pl-6">
            <li className="list-disc">
              <h4 className="font-bold">
                Language<span className="font-normal">: {language}</span>
              </h4>
            </li>
            <li className="list-disc">
              <h4 className="font-bold">
                Last Update<span className="font-normal">: {updated}</span>
              </h4>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-bold mb-2 text-lg">API Usage:</h3>
          <a
            className="underline"
            href={`http://catagorizer.io/website/${url}?json=true`}
          >
            http://catagorizer.io/website/{url}?json=true
          </a>
        </section>
        <section>
          <h3 className="font-bold mb-2 text-lg">Similar Websites:</h3>
          <ul>
            {similarWebsites.map((site) => (
              <li>
                <a href={site}>{site}</a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Page>
  );
};

export default WebsiteDetails;
