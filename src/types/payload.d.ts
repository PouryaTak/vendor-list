export interface Schedule {
  type: number;
  weekday: number;
  allDay: boolean;
  startHour: string;
  stopHour: string;
}

export interface Badge {
  title: string;
  description: string;
  image: string;
  white_image: string;
}

export interface UserImage {
  id: number;
  description: string | null;
  fileName: string;
  thumbNailSource: string;
  likeCount: number;
  commentCount: number;
  timeDifference: number;
  imageType: string;
  userType: string;
}

export interface Cuisine {
  id: number;
  title: string;
}

export interface PreorderToday {
  weekday: string;
  name: string;
  startHour: string;
  intervals: any[] | null; // Replace 'any' with the actual type if possible
}

export interface VendorData {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: boolean;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  schedules: Schedule[];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: any[]; // Replace 'any' with the actual type if possible
  restaurantTypes: any[]; // Replace 'any' with the actual type if possible
  isFavorite: boolean;
  priority: number;
  city: string;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: string;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: number;
  discountType: string | null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: Badge[];
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: Cuisine[];
  preOrderEnabled: boolean;
  preorderToday: PreorderToday;
  vendorType: string;
  childType: string;
  budgetClass: string;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  is_pro: boolean;
  has_first_coupon: boolean;
  userImage: UserImage[];
  menuImage: any[]; // Replace 'any' with the actual type if possible
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: number;
  min_eta: number;
  max_eta: number;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: string;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: number | null;
  cpc_campaign_hash: string | null;
  cpc_spot: string | null;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
  vendor_status: string | null;
  status_title: string;
  status_text: string;
  status_description: string;
  has_cashback: boolean;
  new_type: string;
  new_type_title: string;
  is_eco: boolean;
}

export type TextVendor = {
  type: "TEXT";
  data: string;
};

export type VendorVendor = {
  type: "VENDOR";
  data: VendorData;
};

export type Vendor = TextVendor | VendorVendor;
