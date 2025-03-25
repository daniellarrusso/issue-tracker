"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var issues, _i, issues_1, issue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    issues = [
                        {
                            title: 'Login page not loading',
                            description: 'Users are reporting that the login page fails to load after clicking the sign-in button.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Profile picture upload broken',
                            description: 'When users try to upload profile pictures, they get a 500 server error.',
                            status: client_1.Status.IN_PROGRESS,
                        },
                        {
                            title: 'Mobile menu not closing',
                            description: 'On mobile devices, the navigation menu stays open after selecting an item.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Password reset emails not sending',
                            description: 'The system is not sending password reset emails to users who request them.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Dashboard performance issues',
                            description: 'Dashboard takes more than 10 seconds to load when user has many projects.',
                            status: client_1.Status.IN_PROGRESS
                        },
                        {
                            title: 'Incorrect date formatting',
                            description: 'Dates are showing in US format (MM/DD/YYYY) even when user has different locale set.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'API rate limiting too aggressive',
                            description: 'Users are getting rate limited after just 5 requests in a minute.',
                            status: client_1.Status.CLOSED,
                        },
                        {
                            title: 'Broken link in footer',
                            description: 'The "Terms of Service" link in footer redirects to 404 page.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Missing validation on signup form',
                            description: 'The signup form accepts obviously fake email addresses like "test@test".',
                            status: client_1.Status.IN_PROGRESS,
                        },
                        {
                            title: 'Dark mode toggle not persistent',
                            description: 'When refreshing page, dark mode preference is not saved.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Search results inaccurate',
                            description: 'Search is returning irrelevant results for precise queries.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Notification bell not updating',
                            description: 'The notification indicator doesn\'t update until page refresh.',
                            status: client_1.Status.CLOSED,
                        },
                        {
                            title: 'PDF export missing data',
                            description: 'The PDF export feature is missing the last two columns of data tables.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Timezone conversion error',
                            description: 'Calendar events show up 1 hour early during daylight savings time.',
                            status: client_1.Status.IN_PROGRESS,
                        },
                        {
                            title: 'Memory leak in admin panel',
                            description: 'After using admin panel for 30+ minutes, browser memory usage spikes to 2GB+.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Inaccessible color contrast',
                            description: 'Light gray text on white background fails WCAG contrast requirements.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Duplicate API requests',
                            description: 'The frontend is sending duplicate API requests on page load.',
                            status: client_1.Status.CLOSED,
                        },
                        {
                            title: 'Broken image upload in Safari',
                            description: 'Users report image upload fails specifically in Safari browser.',
                            status: client_1.Status.OPEN,
                        },
                        {
                            title: 'Missing error message on failed login',
                            description: 'When login fails, no error message is shown to the user.',
                            status: client_1.Status.IN_PROGRESS,
                        },
                        {
                            title: 'Export to CSV includes hidden columns',
                            description: 'The CSV export includes columns that are hidden in the UI.',
                            status: client_1.Status.OPEN,
                        },
                    ];
                    _i = 0, issues_1 = issues;
                    _a.label = 1;
                case 1:
                    if (!(_i < issues_1.length)) return [3 /*break*/, 4];
                    issue = issues_1[_i];
                    return [4 /*yield*/, prisma.issue.create({
                            data: issue,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
