import { CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n";

const mapsUrl = "https://maps.app.goo.gl/UbWa93NWZVwc23G77";
// .ics file: opens in the phone's own calendar app (Apple Calendar, Samsung, etc.).
// Times are in UTC: 7:00-11:00 PM Cairo time (UTC+2) on Monday 2 Nov 2026.
const CRLF = String.fromCharCode(13, 10);
const icsLines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Wedding//EN",
  "CALSCALE:GREGORIAN",
  "BEGIN:VEVENT",
  "UID:wedding-alaa-abdullah-20261102@invitation",
  "DTSTAMP:20260101T000000Z",
  "DTSTART:20261102T170000Z",
  "DTEND:20261102T210000Z",
  "SUMMARY:Wedding - Alaa & Abdullah",
  "LOCATION:Celina Askar Hall - Nile Corniche\, Maadi - Cairo",
  "BEGIN:VALARM",
  "TRIGGER:-P1D",
  "ACTION:DISPLAY",
  "DESCRIPTION:Wedding tomorrow",
  "END:VALARM",
  "END:VEVENT",
  "END:VCALENDAR",
];
const calendarUrl = "data:text/calendar;charset=utf-8," + encodeURIComponent(icsLines.join(CRLF));

const buttonClass =
  "font-span flex w-full items-center justify-center gap-2 rounded-md border border-[#3c4736]/15 bg-[#ece7da] px-4 py-2.5 text-sm text-[#3c4736]";

export const LocationActions = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3">
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        <MapPin size={16} />
        {t("loc.maps")}
      </a>
      <a href={calendarUrl} download="wedding.ics" className={buttonClass}>
        <CalendarDays size={16} />
        {t("loc.calendar")}
      </a>
    </div>
  );
};
