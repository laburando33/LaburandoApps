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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env.local' });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', (supabaseAnonKey === null || supabaseAnonKey === void 0 ? void 0 : supabaseAnonKey.substring(0, 10)) + '...');
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
function verifyTables() {
    return __awaiter(this, void 0, void 0, function* () {
        const tables = [
            'profiles',
            'service_requests',
            'professional_profiles',
            'reviews',
            'service_categories',
            'professional_skills'
        ];
        for (const table of tables) {
            try {
                console.log(`Verificando tabla: ${table}`);
                const { data, error } = yield supabase
                    .from(table)
                    .select('count')
                    .limit(1);
                if (error) {
                    console.error(`Error completo:`, error);
                    throw error;
                }
                console.log(`Tabla ${table} verificada correctamente.`);
                console.log(`Datos:`, data);
            }
            catch (e) {
                console.error(`Error al verificar la tabla ${table}:`, e);
                throw e;
            }
        }
        console.log("Todas las tablas han sido verificadas correctamente.");
    });
}
verifyTables().then(() => {
    console.log("Verificación completada con éxito.");
    process.exit(0);
}).catch((error) => {
    console.error("Verificación fallida:", error);
    process.exit(1);
});
