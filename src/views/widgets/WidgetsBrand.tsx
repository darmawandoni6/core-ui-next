import { CSSProperties, FunctionComponent } from 'react'

import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow, CWidgetStatsD } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

type Props = {
  className?: string
  withCharts?: boolean
}

const WidgetsBrand: FunctionComponent<Props> = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  const style = (str: string): CSSProperties & { '--cui-card-cap-bg': string } => {
    return {
      '--cui-card-cap-bg': str,
    }
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibFacebook} height={52} className="my-4 text-white" />}
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
          style={style('#3b5998')}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [1, 13, 9, 17, 34, 41, 38],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibTwitter} height={52} className="my-4 text-white" />}
          values={[
            { title: 'followers', value: '973k' },
            { title: 'tweets', value: '1.792' },
          ]}
          style={style('#00aced')}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibLinkedin} height={52} className="my-4 text-white" />}
          values={[
            { title: 'contacts', value: '500' },
            { title: 'feeds', value: '1.292' },
          ]}
          style={style('#4875b4')}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          color="warning"
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [35, 23, 56, 22, 97, 23, 64],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilCalendar} height={52} className="my-4 text-white" />}
          values={[
            { title: 'events', value: '12+' },
            { title: 'meetings', value: '4' },
          ]}
        />
      </CCol>
    </CRow>
  )
}
WidgetsBrand.defaultProps = {
  withCharts: false,
}
export default WidgetsBrand
