import * as React from 'react';
import { Button } from '../../components/Button/Button';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  return (
    <div>
      <Button
        type="primary"
        size="medium"
        label="Create a new Board"
        onClick={() => console.log('Button clicked')}
      />
    </div>
  );
};

export default Dashboard;
