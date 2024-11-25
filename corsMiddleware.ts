import { NextRequest, NextResponse } from 'next/server';

// CORS middleware configuration
const corsOptions = {
  origin: '*',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  
};

export function corsMiddleware(req: NextRequest) {
  const res = NextResponse.next();  

  
  const origin = req.headers.get('origin');
  
  
  if (corsOptions.origin === '*' || corsOptions.origin === origin) {
    res.headers.set('Access-Control-Allow-Origin', origin || '*');
    res.headers.set('Access-Control-Allow-Methods', corsOptions.methods.join(', '));
    res.headers.set('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(', '));
    res.headers.set('Access-Control-Allow-Credentials', String(corsOptions.credentials));
  }

  
  if (req.method === 'OPTIONS') {
    return NextResponse.json({}, { status: 200 });  
  }

  return res;  
}


export default corsMiddleware