import DashNav from '@/app/ui/dashboard/dashnav'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <div className="flex h-screen flex-col-reverse md:flex-row">
        <div className="hidden w-full h-20 md:w-32 md:h-svh fixed">
          <DashNav />
        </div>
        <div className="flex-grow pb-30 md:pb-0 md:pl-0 overflow-auto">{children}</div>
      </div>
  );
}   