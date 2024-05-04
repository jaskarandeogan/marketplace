import FilterPanel from '@/app/components/FilterPanel';

export default function Home() {

  const DashboardLayout = ({
    FilterPanel = () => <div> Filter Panel</div>,
    Content = () => <div> Content Panel</div>,
    Sidebar = () => <div> Side Panel</div>,
    SubHeader = () => <div> Sub Header</div>,
  }) => {
    return (
      <section className="flex-1 flex gap-[2px] w-full">
        <div className="w-full max-w-80 bg-light-background mt-[2px]">
          <FilterPanel />
        </div>
        <div className="flex-1 flex flex-col mt-[2px]">
          <div className="w-full h-16 bg-grey-100">
            <SubHeader />
          </div>
          <div className="flex flex-1">
            <div className="flex-1">
              <Content />
            </div>
            <div className="w-80 h-full bg-light-background mt-[2px]">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <main className="bg-background flex h-screen-64 flex-col items-center justify-between">
      <DashboardLayout
        FilterPanel={() => <FilterPanel />}
        Content={() => <div> Content Panel</div>}
        Sidebar={() => <div> Side Panel</div>}
      />
    </main>
  );
}
