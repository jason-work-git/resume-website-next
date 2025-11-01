import Layout from '@/components/common/layouts';

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className='mt-20 mb-10 p-8 lg:mt-0'>{children}</div>
    </Layout>
  );
}
