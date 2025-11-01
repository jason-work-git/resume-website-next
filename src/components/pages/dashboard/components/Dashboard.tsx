import { GITHUB_ACCOUNTS } from '@/constant/github';

import CodingActive from './CodingActive';
import Contributions from './Contributions';
import BreakLine from '@/components/common/break-line';

const Dashboard = () => {
  return (
    <>
      <CodingActive />
      <BreakLine className='mt-10 mb-8' />
      <div className='space-y-10'>
        {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
          (account, index) => (
            <Contributions
              key={index}
              username={account?.username}
              type={account?.type}
              endpoint={account?.endpoint}
            />
          ),
        )}
      </div>
    </>
  );
};

export default Dashboard;
