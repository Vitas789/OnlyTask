import mainLead from '../data/index/mainLead.json';
import allEvents from '../data/index/allEvents.json';

/** @description - Адрес /api для запросов на бэк */
// const apiUrl = `${process.env.API_URL}/api`

export const getMainLead = () => mainLead;

export const getAllEvents = () => allEvents;
