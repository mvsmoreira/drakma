import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    "id": "Total",
    "color": "hsl(231, 64%, 77%)",
    "data": [
      {
        "x": "jan",
        "y": 80
      },
      {
        "x": "fev",
        "y": 30
      },
      {
        "x": "mar",
        "y": 180
      },
      {
        "x": "abr",
        "y": 39
      },
      {
        "x": "mai",
        "y": 28
      },
      {
        "x": "jun",
        "y": 50
      },
      {
        "x": "jul",
        "y": 42
      },
      {
        "x": "ago",
        "y": 84
      },
      {
        "x": "set",
        "y": 95
      },
      {
        "x": "out",
        "y": 150
      },
      {
        "x": "nov",
        "y": 190
      },
      {
        "x": "dez",
        "y": 50
      },
    ]
  },
]

export const AnnualProjectionChart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 80, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      yFormat=" >-5.2f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 60,
        legendPosition: 'middle'
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{from: "color"}}
      pointLabelYOffset={-10}
      enableArea={true}
        defs={[
            linearGradientDef('gradientA', [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: 'inherit', opacity: 0 },
            ]),
        ]}
        fill={[{ match: '*', id: 'gradientA' }]}
      areaBaselineValue={5}
      enableCrosshair={false}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'row',
          justify: false,
          translateX: 1,
          translateY: 60,
          itemsSpacing: 10,
          itemDirection: 'left-to-right',
          itemWidth: 110,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 15,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  )
}
