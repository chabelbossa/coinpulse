import React from 'react';
import DataTable from '@/components/DataTable';
import { useTranslations } from 'next-intl';

type FallbackRow = {
  id: number;
};

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const t = useTranslations('Coins');
  const tHome = useTranslations('HomePage');

  const columns: DataTableColumn<FallbackRow>[] = [
    {
      header: t('coin'),
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton" />
          <div className="name-line skeleton" />
        </div>
      ),
    },
    {
      header: t('change_24h'),
      cell: () => (
        <div className="price-change">
          <div className="change-icon skeleton" />
          <div className="change-line skeleton" />
        </div>
      ),
    },
    {
      header: t('price'),
      cell: () => <div className="price-line skeleton" />,
    },
  ];

  const dummyData: FallbackRow[] = Array.from({ length: 6 }, (_, i) => ({ id: i }));

  return (
    <div id="trending-coins-fallback">
      <h4>{tHome('trending')}</h4>
      <DataTable
        data={dummyData}
        columns={columns}
        rowKey={(item) => item.id}
        tableClassName="trending-coins-table"
      />
    </div>
  );
};

export const CategoriesFallback = () => {
  const t = useTranslations('Coins');
  const tHome = useTranslations('HomePage');

  const columns: DataTableColumn<FallbackRow>[] = [
    {
      header: t('category'),
      cellClassName: 'category-cell',
      cell: () => <div className="category-line skeleton" />,
    },
    {
      header: t('top_gainers'),
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex gap-1">
          <div className="gainer-image skeleton" />
          <div className="gainer-image skeleton" />
          <div className="gainer-image skeleton" />
        </div>
      ),
    },
    {
      header: t('change_24h'),
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className="change-cell">
          <div className="change-icon skeleton" />
          <div className="change-line skeleton" />
        </div>
      ),
    },
    {
      header: t('market_cap'),
      cellClassName: 'market-cap-cell',
      cell: () => <div className="value-skeleton-lg skeleton" />,
    },
    {
      header: t('volume_24h'),
      cellClassName: 'volume-cell',
      cell: () => <div className="value-skeleton-md skeleton" />,
    },
  ];

  const dummyData: FallbackRow[] = Array.from({ length: 10 }, (_, i) => ({ id: i }));

  return (
    <div id="categories-fallback">
      <h4>{tHome('categories')}</h4>
      <DataTable
        data={dummyData}
        columns={columns}
        rowKey={(item) => item.id}
        tableClassName="mt-3"
      />
    </div>
  );
};
