import HighChartsConfig from "./HighChartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighCharts from "react-highcharts";
import HighChartsTheme from "./HighChartsTheme";
import ChartSelect from "./ChartSelect";

ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({ historical, changeChargeSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue={"months"}
            onChange={(e) => changeChargeSelect(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">months</option>
          </ChartSelect>
          {historical ? (
            <ReactHighCharts config={HighChartsConfig(historical)} />
          ) : (
            <div>Loading Historical Data</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
