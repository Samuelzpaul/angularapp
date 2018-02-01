"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Proposal = /** @class */ (function () {
    function Proposal(id, customer, portfolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        if (portfolio_url === void 0) { portfolio_url = 'http://'; }
        if (tools === void 0) { tools = string; }
        if (estimated_hours === void 0) { estimated_hours = number; }
        if (hourly_rate === void 0) { hourly_rate = number; }
        if (weeks_to_complete === void 0) { weeks_to_complete = number; }
        if (client_email === void 0) { client_email = string; }
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map