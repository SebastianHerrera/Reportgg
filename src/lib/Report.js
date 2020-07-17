import merge from 'lodash.merge'

import Summoner from '../api/summoner'
import Match from '../api/match'

import { REPORT_DEFAULT_CONFIG } from './ReportConfig'

/**
 * Modulo principal de Report
 */
class Report {
    constructor(
        key = process.env.RIOT_API_KEY,
        config = REPORT_DEFAULT_CONFIG,
    ) {
        //Configuración de Report

        config.api_key = key

        this.config = merge(REPORT_DEFAULT_CONFIG, config)

        this.summoner = new Summoner(this.config)
        this.match = new Match(this.config)
    }
}

const init = (key) => new Report(key)

module.exports = Report
