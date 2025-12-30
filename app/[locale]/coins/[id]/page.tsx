import React from 'react';
import { fetcher, getPools } from '@/lib/coingecko.actions';
import { Link } from '@/i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import LiveDataWrapper from '@/components/LiveDataWrapper';
import Converter from '@/components/Converter';
import { getTranslations } from 'next-intl/server';

const Page = async ({ params }: NextPageProps) => {
  const { id } = await params;
  const t = await getTranslations('CoinDetails');

  const [coinData, coinOHLCData] = await Promise.all([
    fetcher<CoinDetailsData>(`/coins/${id}`, {
      dex_pair_format: 'contract_address',
    }),
    fetcher<OHLCData>(`/coins/${id}/ohlc`, {
      vs_currency: 'usd',
      days: 1,
      interval: 'hourly',
      precision: 'full',
    }),
  ]);

  const platform = coinData.asset_platform_id
    ? coinData.detail_platforms?.[coinData.asset_platform_id]
    : null;
  const network = platform?.geckoterminal_url.split('/')[3] || null;
  const contractAddress = platform?.contract_address || null;

  const pool = await getPools(id, network, contractAddress);

  const coinDetails = [
    {
      label: t('market_cap'),
      value: formatCurrency(coinData.market_data.market_cap.usd),
    },
    {
      label: t('market_cap_rank'),
      value: `# ${coinData.market_cap_rank}`,
    },
    {
      label: t('total_volume'),
      value: formatCurrency(coinData.market_data.total_volume.usd),
    },
    {
      label: t('website'),
      value: '-',
      link: coinData.links.homepage[0],
      linkText: t('homepage'),
    },
    {
      label: t('explorer'),
      value: '-',
      link: coinData.links.blockchain_site[0],
      linkText: t('explorer'),
    },
    {
      label: t('community'),
      value: '-',
      link: coinData.links.subreddit_url,
      linkText: t('community'),
    },
  ];

  return (
    <main id="coin-details-page">
      <section className="primary">
        <LiveDataWrapper coinId={id} poolId={pool.id} coin={coinData} coinOHLCData={coinOHLCData}>
          <h4>{t('exchange_listings')}</h4>
        </LiveDataWrapper>
      </section>

      <section className="secondary">
        <Converter
          symbol={coinData.symbol}
          icon={coinData.image.small}
          priceList={coinData.market_data.current_price}
        />

        <div className="details">
          <h4>{t('coin_details')}</h4>

          <ul className="details-grid">
            {coinDetails.map(({ label, value, link, linkText }, index) => (
              <li key={index}>
                <p className={label}>{label}</p>

                {link ? (
                  <div className="link">
                    <Link href={link} target="_blank">
                      {linkText || label}
                    </Link>
                    <ArrowUpRight size={16} />
                  </div>
                ) : (
                  <p className="text-base font-medium">{value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Page;
