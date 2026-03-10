import { cities } from "../../data/rajasthanData";

export const Fromto = ({ handleChange }) => {
  return (
    <div className="search-fields" style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
      <div className="search-field">
        <label>Destination</label>
        <select onChange={handleChange} name="city" id="city-select">
          <option value="">Select City</option>
          {cities.map((c) => (
            <option value={c.id} key={c.id}>{c.name} — {c.tagline}</option>
          ))}
        </select>
      </div>
      <div className="search-field">
        <label>Check-in</label>
        <input type="date" name="checkin" onChange={handleChange} />
      </div>
      <div className="search-field">
        <label>Check-out</label>
        <input type="date" name="checkout" onChange={handleChange} />
      </div>
      <div className="search-field">
        <label>Guests</label>
        <select name="guests" onChange={handleChange} id="guests-select">
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5+ Guests</option>
        </select>
      </div>
    </div>
  );
};
