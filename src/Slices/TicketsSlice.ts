import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface Ticket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: "RUB";
  time: TicketTime;
  duration: number;
  connectionAmount: number | null;
}

interface TicketsState {
  tickets: Ticket[];
  filteredTickets: Ticket[];
  selectedAirline: string | null;
  selectedTransfers: number | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  filteredTickets: [],
  selectedAirline: null,
  selectedTransfers: null,
  status: "idle",
  error: null,
};

export const fetchTickets = createAsyncThunk<Ticket[], void>(
  "tickets/fetchTickets",
  async () => {
    const response = await fetch("/api/tickets.json");
    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }
    const data = await response.json();
    return data.tickets as Ticket[];
  }
);

const applyFilteredTickets = (state: TicketsState) => {
  let filtered = state.tickets;

  if (state.selectedAirline) {
    filtered = filtered.filter(
      (ticket) => ticket.company === state.selectedAirline
    );
  }
  if (state.selectedTransfers !== null) {
    filtered = filtered.filter(
      (ticket) => ticket.connectionAmount === state.selectedTransfers
    );
  }

  return filtered;
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    filterByAirline: (state, action) => {
      state.selectedAirline = action.payload;
      state.filteredTickets = applyFilteredTickets(state);
    },

    filterByTransfers: (state, action) => {
      state.selectedTransfers = action.payload;
      state.filteredTickets = applyFilteredTickets(state);
    },
    sortByPrice: (state) => {
      const filteredTicket = applyFilteredTickets(state);
      state.filteredTickets = filteredTicket.sort((a, b) => a.price - b.price);
    },
    sortByDuration: (state) => {
      const filteredTicket = applyFilteredTickets(state);
      state.filteredTickets = filteredTicket.sort(
        (a, b) => a.duration - b.duration
      );
    },
    sortByTransfers: (state) => {
      const filteredTicket = applyFilteredTickets(state);
      state.filteredTickets = filteredTicket.sort(
        (a, b) => (a.connectionAmount || 0) - (b.connectionAmount || 0)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTickets.fulfilled,
        (state, action: PayloadAction<Ticket[]>) => {
          state.status = "succeeded";
          state.tickets = action.payload;
        }
      )
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {
  filterByAirline,
  filterByTransfers,
  sortByDuration,
  sortByPrice,
  sortByTransfers,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
