
import { DashboardContainer, ChartCard } from '../grafic.styles';
import BarChar from "../BarChar/BarChar" ;
import LineChart from '../LineChart/LineChart';

function Dashboard() {
  return (
    <DashboardContainer>
      <ChartCard>
        <h3>Usuarios activos</h3>
        <BarChar />
      </ChartCard>

      <ChartCard>
        <h3>Nuevas altas</h3>
        <LineChart />
      </ChartCard>
    </DashboardContainer>
  );
}

export default Dashboard;
