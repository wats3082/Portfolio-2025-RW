interface Device {
  id: string;
  type: string;
  name: string;
}

interface Rule {
  id: string;
  name: string;
  trigger: string;
  action: string;
}

interface Incident {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  status: string;
}

const devices: Device[] = [
  { id: 'cam-1', type: 'camera', name: 'Front gate camera' },
  { id: 'sensor-1', type: 'motion', name: 'Lobby motion sensor' },
  { id: 'panel-1', type: 'alarm', name: 'Main alarm panel' }
];

const rules: Rule[] = [
  { id: 'rule-1', name: 'Motion alert triggers camera clip', trigger: 'motion', action: 'record_clip' },
  { id: 'rule-2', name: 'Alarm triggers guard dispatch', trigger: 'alarm', action: 'dispatch_guard' }
];

const incidents: Incident[] = [
  { id: 'incident-1', title: 'Lobby motion alert', source: 'sensor-1', timestamp: new Date().toISOString(), status: 'open' }
];

const eventStore: Incident[] = [...incidents];

const response = (statusCode: number, body: object) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  },
  body: JSON.stringify(body)
});

export const main = async (event: any) => {
  const method = event.requestContext?.http?.method ?? event.httpMethod;
  const path = event.rawPath ?? event.path ?? '';

  if (method === 'GET' && path.endsWith('/devices')) {
    return response(200, { devices });
  }

  if (method === 'GET' && path.endsWith('/rules')) {
    return response(200, { rules });
  }

  if (method === 'GET' && path.endsWith('/incidents')) {
    return response(200, { incidents: eventStore });
  }

  if (method === 'POST' && path.endsWith('/event')) {
    const body = event.body ? JSON.parse(event.body) : {};
    const incident: Incident = {
      id: `incident-${eventStore.length + 1}`,
      title: body.title || 'Generated security alarm',
      source: body.source || 'unknown',
      timestamp: new Date().toISOString(),
      status: 'open'
    };
    eventStore.push(incident);
    return response(201, { incident, message: 'Alarm event logged in the proof-of-concept backend.' });
  }

  return response(404, { message: 'Route not found' });
};
