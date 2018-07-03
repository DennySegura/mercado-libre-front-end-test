interface Item {
    id: string,
    title: string,
    price: itemPrice,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity?: number,
    description?: string,
    location?: string
}
interface itemPrice {
    currency: string,
    amount: number,
    decimals: number
}

interface SearchItemDescription {
    text: string;
    plain_text: string;
    last_updated: string;
    date_created: string;
    snapshot: ItemDescriptionSnapshot;
}
interface ItemDescriptionSnapshot {
    url: string;
    width: number;
    height: number;
    status: string;
}

interface SearchResultItem {
    id: string;
    site_id: string;
    title: string;
    seller: ItemSeller;
    price: number;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    accepts_mercadopago: boolean;
    installments: ItemInstallments;
    address: ItemAddress;
    shipping: ItemShipping;
    seller_address: Selleraddress;
    attributes: ItemAttribute[];
    original_price: number;
    category_id: string;
    official_store_id: number;
    catalog_product_id: string;
    reviews: ItemReviews;
    tags: string[];
    subtitle?: any;
    base_price?: number;
    sale_terms?: any[];
    start_time?: string;
    secure_thumbnail?: string;
    pictures?: ItemPicture[];
    video_id?: any;
    descriptions?: ItemDescription[];
    non_mercado_pago_payment_methods?: any[];
    international_delivery_mode?: string;
    seller_contact?: any;
    location?: any;
    geolocation?: Geolocation;
    coverage_areas?: any[];
    warnings?: any[];
    listing_source?: string;
    variations?: any[];
    status?: string;
    sub_status?: any[];
    warranty?: any;
    domain_id?: string;
    parent_item_id?: any;
    differential_pricing?: any;
    deal_ids?: string[];
    automatic_relist?: boolean;
    date_created?: string;
    last_updated?: string;
    health?: any;
}
interface Geolocation {
    latitude: number;
    longitude: number;
}
interface ItemDescription {
    id: string;
}
interface ItemPicture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}
interface ItemReviews {
    rating_average: number;
    total: number;
}
interface ItemAttribute {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct?: any;
    attribute_group_id: string;
    attribute_group_name: string;
}
interface Selleraddress {
    comment: string;
    address_line: string;
    zip_code: string;
    city: KeyInfo;
    state: KeyInfo;
    country: KeyInfo;
    search_location: Searchlocation;
    latitude: number;
    longitude: number;
    id: number;
}
interface Searchlocation {
    neighborhood: KeyInfo;
    city: KeyInfo;
    state: KeyInfo;
}
interface KeyInfo {
    id: string;
    name: string;
}
interface ItemShipping {
    mode: string;
    methods: any[];
    tags: string[];
    dimensions: string;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}
interface ItemSeller {
    id: number;
    power_seller_status: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: any[];
}
interface ItemInstallments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}
interface ItemAddress {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}

interface SearchResult {
    site_id: string;
    query: string;
    paging: Paging;
    results: SearchResultItem[];
    secondary_results: any[];
    related_results: any[];
    sort: Sort;
    available_sorts: Sort[];
    filters: Filter[];
    available_filters: Availablefilter[];
}
interface Availablefilter {
    id: string;
    name: string;
    type: string;
    values: Value[];
}
interface Value {
    id: string;
    name: string;
    results: number;
}
interface Filter {
    id: string;
    name: string;
    type: string;
    values: any[];
}
interface Sort {
    id: string;
    name: string;
}
interface Paging {
    total: number;
    offset: number;
    limit: number;
    primary_results: number;
}
interface CategoryResponse {
    id: string;
    name: string;
    picture?: any;
    permalink?: any;
    total_items_in_this_category: number;
    path_from_root: Pathfromroot[];
    children_categories: any[];
    attribute_types: string;
    settings: CategorySettings;
    meta_categ_id: number;
    attributable: boolean;
}
interface CategorySettings {
    adult_content: boolean;
    buying_allowed: boolean;
    buying_modes: string[];
    catalog_domain: string;
    coverage_areas: string;
    currencies: string[];
    fragile: boolean;
    immediate_payment: string;
    item_conditions: string[];
    items_reviews_allowed: boolean;
    listing_allowed: boolean;
    max_description_length: number;
    max_pictures_per_item: number;
    max_pictures_per_item_var: number;
    max_sub_title_length: number;
    max_title_length: number;
    maximum_price?: any;
    minimum_price?: any;
    mirror_category?: any;
    mirror_master_category?: any;
    mirror_slave_categories: any[];
    price: string;
    reservation_allowed: string;
    restrictions: any[];
    rounded_address: boolean;
    seller_contact: string;
    shipping_modes: string[];
    shipping_options: string[];
    shipping_profile: string;
    show_contact_information: boolean;
    simple_shipping: string;
    stock: string;
    sub_vertical: string;
    subscribable: boolean;
    tags: any[];
    vertical: string;
    vip_subdomain: string;
}
interface Pathfromroot {
    id: string;
    name: string;
}
