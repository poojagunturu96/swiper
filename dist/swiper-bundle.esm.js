/**
 * Swiper 9.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 2, 2023
 */

import Swiper from './core/core.js';
export { default as Swiper, default } from './core/core.js';
import Navigation from './modules/navigation/navigation.js';
import Pagination from './modules/pagination/pagination.js';
import A11y from './modules/a11y/a11y.js';
import HashNavigation from './modules/hash-navigation/hash-navigation.js';

// Swiper Class
const modules = [Navigation, Pagination, A11y, HashNavigation];
Swiper.use(modules);
