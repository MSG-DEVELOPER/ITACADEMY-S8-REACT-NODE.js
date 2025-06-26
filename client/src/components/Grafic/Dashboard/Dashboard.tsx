
import { DashboardContainer, ChartCard } from '../grafic.styles';
import BarChar from "../BarChar/BarChar" ;
import LineChart from '../LineChart/LineChart';

function Dashboard() {
  return (
    <DashboardContainer>
      <ChartCard>
        <h2>Usuarios activos</h2>
        <BarChar />
      </ChartCard>

      <ChartCard>
        <h2>Nuevas altas</h2>
        <LineChart />
      </ChartCard>
    </DashboardContainer>
  );
}

export default Dashboard;
