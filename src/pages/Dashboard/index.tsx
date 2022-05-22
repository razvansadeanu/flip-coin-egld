import * as React from 'react';
import Actions from './Actions';
import TopInfo from './TopInfo';
import Coin from './Coin';

const Dashboard = () => {
  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto'>
          <div className='shadow-sm rounded border-0'>
            <div className='card-body1 p-1'>
              <div className='rounded border-0'>
                <div className='card-body text-center p-4'>
                  {/* <TopInfo /> */}
                  {/* <Actions /> */}
                </div>
              </div>
              {/* <Transactions /> */}
              <Coin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
