import { Controller } from "@hotwired/stimulus";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { BarChartData } from "../../data/charts/bar_chart";

export default class extends Controller {
  barChartTarget: HTMLElement;
  barTarget:      HTMLElement;
  barTargets:     HTMLElement[];

  static targets: string[] = ['barChart', 'bar'];

  connect = (): void => {

    this.barTargets.forEach(chartCanvas => {
      this.renderBarChart(chartCanvas as HTMLCanvasElement);
    });
  }

  renderBarChart = (chartCanvas: HTMLCanvasElement): void => {
    const ctx: CanvasRenderingContext2D = chartCanvas.getContext('2d');

    new Chart(ctx, BarChartData);
  }
}
