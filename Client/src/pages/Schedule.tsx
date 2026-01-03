import { useState } from 'react';
import DashboardSidebar, { MobileHeader } from '@/components/DashboardSidebar';
import AIChatbot from '@/components/AIChatbot';
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Repeat,
  Car,
  Bike,
  Footprints,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ================= TYPES ================= */

type ScheduleType = {
  id: number;
  commuteType: 'carpool' | 'cycle' | 'walk';
  recurring: boolean;
  days: string[];
  date: string;
  time: string;
  meridiem: 'AM' | 'PM';
  from: string;
  to: string;
};

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weekDates = [
  { day: 'Mon', date: 6 },
  { day: 'Tue', date: 7 },
  { day: 'Wed', date: 8 },
  { day: 'Thu', date: 9 },
  { day: 'Fri', date: 10 },
  { day: 'Sat', date: 11 },
  { day: 'Sun', date: 12 },
];

/* ================= COMPONENT ================= */

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);

  const [commuteType, setCommuteType] =
    useState<'carpool' | 'cycle' | 'walk'>('carpool');
  const [recurring, setRecurring] = useState(true);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('08:30');
  const [meridiem, setMeridiem] = useState<'AM' | 'PM'>('AM');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  /* ================= HELPERS ================= */

  const resetForm = () => {
    setEditingId(null);
    setCommuteType('carpool');
    setRecurring(true);
    setSelectedDays([]);
    setDate('');
    setTime('08:30');
    setMeridiem('AM');
    setFrom('');
    setTo('');
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    if (!date || !time || !from || !to) return;

    if (editingId) {
      setSchedules((prev) =>
        prev.map((s) =>
          s.id === editingId
            ? {
                ...s,
                commuteType,
                recurring,
                days: selectedDays,
                date,
                time,
                meridiem,
                from,
                to,
              }
            : s
        )
      );
    } else {
      setSchedules((prev) => [
        ...prev,
        {
          id: Date.now(),
          commuteType,
          recurring,
          days: selectedDays,
          date,
          time,
          meridiem,
          from,
          to,
        },
      ]);
    }

    setOpen(false);
    resetForm();
  };

  const handleEdit = (s: ScheduleType) => {
    setEditingId(s.id);
    setCommuteType(s.commuteType);
    setRecurring(s.recurring);
    setSelectedDays(s.days);
    setDate(s.date);
    setTime(s.time);
    setMeridiem(s.meridiem);
    setFrom(s.from);
    setTo(s.to);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    setSchedules((prev) => prev.filter((s) => s.id !== id));
  };

  const commuteIcon = {
    carpool: <Car className="w-4 h-4" />,
    cycle: <Bike className="w-4 h-4" />,
    walk: <Footprints className="w-4 h-4" />,
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <MobileHeader />

      <main className="lg:ml-64 min-h-screen">
        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Schedule</h1>
              <p className="text-sm text-muted-foreground">
                Plan your recurring commutes
              </p>
            </div>
            <Button onClick={() => setOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Schedule
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* THIS WEEK */}
          <div className="stat-card p-6">
            <div className="flex justify-between mb-4">
              <h2 className="flex items-center gap-2 font-semibold">
                <Calendar className="w-5 h-5 text-primary" />
                This Week
              </h2>
              <span className="text-sm">Jan 6 – 12, 2026</span>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {weekDates.map((d) => {
                const ride = schedules.find(
                  (s) => s.recurring && s.days.includes(d.day)
                );

                return (
                  <div
                    key={d.day}
                    className={`p-3 rounded-xl border text-center ${
                      ride
                        ? 'bg-primary/10 border-primary/30'
                        : 'bg-muted/40'
                    }`}
                  >
                    <p className="text-xs">{d.day}</p>
                    <p className="font-semibold">{d.date}</p>

                    {ride ? (
                      <div className="text-xs mt-2">
                        <p className="text-primary">
                          {ride.time} {ride.meridiem}
                        </p>
                        <p className="capitalize">{ride.commuteType}</p>
                      </div>
                    ) : (
                      <button
                        onClick={() => setOpen(true)}
                        className="text-xs mt-2 text-muted-foreground hover:text-primary"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RECURRING LIST */}
          <div className="stat-card p-6">
            <h2 className="flex items-center gap-2 font-semibold mb-4">
              <Repeat className="w-5 h-5 text-primary" />
              Recurring Schedules
            </h2>

            <div className="space-y-4">
              {schedules.map((s) => (
                <div
                  key={s.id}
                  className="p-4 rounded-xl border bg-muted/40"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium flex gap-2 items-center capitalize">
                        {commuteIcon[s.commuteType]}
                        {s.commuteType} Commute
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {s.from} → {s.to}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {s.recurring && (
                        <div className="flex gap-1">
                          {daysOfWeek.map((d) => (
                            <span
                              key={d}
                              className={`w-8 h-8 text-xs rounded-full flex items-center justify-center ${
                                s.days.includes(d)
                                  ? 'bg-primary text-white'
                                  : 'bg-muted'
                              }`}
                            >
                              {d[0]}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        {s.time} {s.meridiem}
                        {s.date && (
                          <span className="text-muted-foreground">
                            • {new Date(s.date).toDateString()}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(s)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(s.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ADD / EDIT MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-lg font-bold">
              {editingId ? 'Edit Schedule' : 'Add Schedule'}
            </h2>

            {/* COMMUTE TYPE */}
            <div className="flex gap-2">
              {(['carpool', 'cycle', 'walk'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setCommuteType(t)}
                  className={`flex-1 border rounded-lg p-2 capitalize ${
                    commuteType === t
                      ? 'bg-primary text-white'
                      : 'bg-muted'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* RECURRING */}
            <div className="flex justify-between items-center border rounded-lg p-2">
              <span className="flex items-center gap-2">
                <Repeat className="w-4 h-4" />
                Recurring
              </span>
              <input
                type="checkbox"
                checked={recurring}
                onChange={() => setRecurring(!recurring)}
              />
            </div>

            {/* DAYS */}
            {recurring && (
              <div className="flex gap-2 justify-between">
                {daysOfWeek.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleDay(d)}
                    className={`w-9 h-9 rounded-full ${
                      selectedDays.includes(d)
                        ? 'bg-primary text-white'
                        : 'bg-muted'
                    }`}
                  >
                    {d[0]}
                  </button>
                ))}
              </div>
            )}

            {/* DATE (always visible) */}
            <input
              type="date"
              className="w-full border rounded p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            {/* TIME + AM/PM */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <input
                type="time"
                className="flex-1 border rounded p-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <select
                className="border rounded p-2"
                value={meridiem}
                onChange={(e) =>
                  setMeridiem(e.target.value as 'AM' | 'PM')
                }
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

            <input
              placeholder="From"
              className="w-full border rounded p-2"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              placeholder="To"
              className="w-full border rounded p-2"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
        </div>
      )}

      <AIChatbot />
    </div>
  );
};

export default Schedule;