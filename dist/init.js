/* eslint-disable */
module.exports = function meta_init($p) {

$p.wsql.alasql('USE md; CREATE TABLE IF NOT EXISTS `ireg_margin_coefficients` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `price_group` CHAR, `key` CHAR, `condition_formula` CHAR, `marginality` FLOAT, `marginality_min` FLOAT, `marginality_internal` FLOAT, `price_type_first_cost` CHAR, `price_type_sale` CHAR, `price_type_internal` CHAR, `formula` CHAR, `sale_formula` CHAR, `internal_formula` CHAR, `external_formula` CHAR, `extra_charge_external` FLOAT, `discount_external` FLOAT, `discount` FLOAT, `note` CHAR); CREATE TABLE IF NOT EXISTS `ireg_currency_courses` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `currency` CHAR, `period` Date, `course` FLOAT, `multiplicity` INT); CREATE TABLE IF NOT EXISTS `ireg_log_view` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `key` CHAR, `user` CHAR); CREATE TABLE IF NOT EXISTS `ireg_log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR, `user` CHAR); CREATE TABLE IF NOT EXISTS `doc_purchase_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `department` CHAR, `warehouse` CHAR, `partner` CHAR, `contract` CHAR, `responsible` CHAR, `shipping_date` Date, `note` CHAR, `settlements_course` FLOAT, `settlements_multiplicity` INT, `bank_account` CHAR, `vat_included` BOOLEAN, `doc_amount` FLOAT, `vat_consider` BOOLEAN, `obj_delivery_state` CHAR, `identifier` CHAR, `ts_goods` JSON); CREATE TABLE IF NOT EXISTS `doc_planning_event` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `phase` CHAR, `key` CHAR, `recipient` CHAR, `trans` CHAR, `partner` CHAR, `project` CHAR, `origin` CHAR, `note` CHAR, `ts_executors` JSON, `ts_planning` JSON); CREATE TABLE IF NOT EXISTS `doc_nom_prices_setup` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `price_type` CHAR, `currency` CHAR, `responsible` CHAR, `note` CHAR, `ts_goods` JSON); CREATE TABLE IF NOT EXISTS `doc_selling` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `warehouse` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_goods` JSON, `ts_services` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `doc_credit_cash_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `cashbox` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_payment_details` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `doc_debit_cash_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `cashbox` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_payment_details` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `doc_credit_bank_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `bank_account` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_payment_details` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `doc_debit_bank_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `bank_account` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_payment_details` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `doc_work_centers_performance` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `start_date` Date, `expiration_date` Date, `responsible` CHAR, `note` CHAR, `ts_planning` JSON); CREATE TABLE IF NOT EXISTS `doc_credit_card_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_payment_details` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `doc_calc_order` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `number_internal` CHAR, `project` CHAR, `organization` CHAR, `partner` CHAR, `client_of_dealer` CHAR, `contract` CHAR, `bank_account` CHAR, `note` CHAR, `manager` CHAR, `leading_manager` CHAR, `department` CHAR, `warehouse` CHAR, `doc_amount` FLOAT, `amount_operation` FLOAT, `amount_internal` FLOAT, `accessory_characteristic` CHAR, `sys_profile` CHAR, `sys_furn` CHAR, `phone` CHAR, `delivery_area` CHAR, `shipping_address` CHAR, `coordinates` CHAR, `address_fields` CHAR, `difficult` BOOLEAN, `vat_consider` BOOLEAN, `vat_included` BOOLEAN, `settlements_course` FLOAT, `settlements_multiplicity` INT, `extra_charge_external` FLOAT, `obj_delivery_state` CHAR, `category` CHAR, `sending_stage` CHAR, `approval` BOOLEAN, `lead` CHAR, `ts_production` JSON, `ts_extra_fields` JSON, `ts_contact_information` JSON, `ts_planning` JSON, `ts_orders` JSON); CREATE TABLE IF NOT EXISTS `doc_work_centers_task` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `key` CHAR, `recipient` CHAR, `biz_cuts` CHAR, `responsible` CHAR, `note` CHAR, `ts_planning` JSON, `ts_demand` JSON, `ts_cuts` JSON, `ts_cutting` JSON); CREATE TABLE IF NOT EXISTS `doc_inventory_goods` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `note` CHAR, `warehouse` CHAR, `responsible` CHAR, `origin` CHAR, `ts_goods` JSON); CREATE TABLE IF NOT EXISTS `doc_inventory_cuts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `transactions_kind` CHAR, `responsible` CHAR, `note` CHAR, `work_center` CHAR, `ts_materials` JSON); CREATE TABLE IF NOT EXISTS `doc_purchase` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `organization` CHAR, `partner` CHAR, `department` CHAR, `warehouse` CHAR, `doc_amount` FLOAT, `responsible` CHAR, `note` CHAR, `ts_goods` JSON, `ts_services` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_leads` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `date` Date, `origin` CHAR, `responsible` CHAR, `department` CHAR, `dop` JSON); CREATE TABLE IF NOT EXISTS `cat_lead_src` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `type` CHAR); CREATE TABLE IF NOT EXISTS `cat_http_apis` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ts_nom` JSON, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_delivery_directions` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ts_composition` JSON, `ts_coordinates` JSON); CREATE TABLE IF NOT EXISTS `cat_nonstandard_attributes` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `crooked` BOOLEAN, `colored` BOOLEAN, `lay` BOOLEAN, `made_to_order` BOOLEAN, `packing` BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_work_centers` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `department` CHAR, `parent` CHAR, `ts_work_center_kinds` JSON); CREATE TABLE IF NOT EXISTS `cat_templates` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR, `captured` BOOLEAN, `editor` CHAR, `ts_templates` JSON); CREATE TABLE IF NOT EXISTS `cat_insert_bind` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `key` CHAR, `captured` BOOLEAN, `editor` CHAR, `ts_production` JSON, `ts_inserts` JSON); CREATE TABLE IF NOT EXISTS `cat_abonents` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `no_mdm` BOOLEAN, `ts_servers` JSON); CREATE TABLE IF NOT EXISTS `cat_nom_groups` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `vat_rate` CHAR, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_charges_discounts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `price_type` CHAR, `sorting_field` INT, `application_joint` CHAR, `application_mode` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_periods` JSON, `ts_keys` JSON, `ts_price_groups` JSON); CREATE TABLE IF NOT EXISTS `cat_project_categories` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR, `ts_stages` JSON); CREATE TABLE IF NOT EXISTS `cat_stages` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `note` CHAR, `grouping` BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_price_groups` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `definition` CHAR, `captured` BOOLEAN, `editor` CHAR); CREATE TABLE IF NOT EXISTS `cat_characteristics` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `x` FLOAT, `y` FLOAT, `z` FLOAT, `s` FLOAT, `clr` CHAR, `weight` FLOAT, `calc_order` CHAR, `product` INT, `leading_product` CHAR, `leading_elm` INT, `origin` CHAR, `base_block` CHAR, `sys` CHAR, `note` CHAR, `obj_delivery_state` CHAR, `partner` CHAR, `department` CHAR, `builder_props` CHAR, `svg` CHAR, `captured` BOOLEAN, `editor` CHAR, `owner` CHAR, `ts_constructions` JSON, `ts_coordinates` JSON, `ts_inserts` JSON, `ts_params` JSON, `ts_cnn_elmnts` JSON, `ts_glass_specification` JSON, `ts_extra_fields` JSON, `ts_glasses` JSON, `ts_specification` JSON, `ts_dop` JSON, `ts_demand` JSON); CREATE TABLE IF NOT EXISTS `cat_individuals` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `birth_date` Date, `inn` CHAR, `imns_code` CHAR, `note` CHAR, `pfr_number` CHAR, `sex` CHAR, `birth_place` CHAR, `Фамилия` CHAR, `Имя` CHAR, `Отчество` CHAR, `ФамилияРП` CHAR, `ИмяРП` CHAR, `ОтчествоРП` CHAR, `ОснованиеРП` CHAR, `ДолжностьРП` CHAR, `Должность` CHAR, `captured` BOOLEAN, `editor` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_contact_information` JSON); CREATE TABLE IF NOT EXISTS `cat_nom_prices_types` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `price_currency` CHAR, `discount_percent` FLOAT, `vat_price_included` BOOLEAN, `rounding_order` CHAR, `rounding_in_a_big_way` BOOLEAN, `note` CHAR); CREATE TABLE IF NOT EXISTS `cat_cash_flow_articles` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `definition` CHAR, `sorting_field` INT, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_stores` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `department` CHAR, `note` CHAR, `assembly_days` INT, `address` CHAR, `latitude` FLOAT, `longitude` FLOAT, `delivery_area` CHAR, `address_fields` CHAR, `parent` CHAR, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_projects` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `finished` BOOLEAN, `responsible` CHAR, `note` CHAR, `category` CHAR, `parent` CHAR, `ts_extra_fields` JSON, `ts_stages` JSON, `ts_acl_objs` JSON); CREATE TABLE IF NOT EXISTS `cat_users` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `invalid` BOOLEAN, `department` CHAR, `individual_person` CHAR, `note` CHAR, `ancillary` BOOLEAN, `user_ib_uid` CHAR, `id` CHAR, `latin` CHAR, `prefix` CHAR, `branch` CHAR, `push_only` BOOLEAN, `roles` CHAR, `ips` CHAR, `suffix` CHAR, `direct` BOOLEAN, `ts_extra_fields` JSON, `ts_contact_information` JSON, `ts_acl_objs` JSON, `ts_ids` JSON, `ts_subscribers` JSON); CREATE TABLE IF NOT EXISTS `cat_divisions` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `main_project` CHAR, `sorting_field` INT, `parent` CHAR, `ts_extra_fields` JSON, `ts_keys` JSON); CREATE TABLE IF NOT EXISTS `cat_color_price_groups` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `color_price_group_destination` CHAR, `condition_formula` CHAR, `mode` INT, `hide_composite` BOOLEAN, `clr` CHAR, `captured` BOOLEAN, `editor` CHAR, `ts_price_groups` JSON, `ts_clr_conformity` JSON, `ts_exclude` JSON); CREATE TABLE IF NOT EXISTS `cat_clrs` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `ral` CHAR, `machine_tools_clr` CHAR, `clr_str` CHAR, `clr_out` CHAR, `clr_in` CHAR, `grouping` CHAR, `area_src` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_furns` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `flap_weight_max` INT, `left_right` BOOLEAN, `is_set` BOOLEAN, `is_sliding` BOOLEAN, `furn_set` CHAR, `side_count` INT, `clr_group` CHAR, `handle_side` INT, `open_type` CHAR, `name_short` CHAR, `applying` INT, `formula` CHAR, `note` CHAR, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR, `ts_open_tunes` JSON, `ts_specification` JSON, `ts_selection_params` JSON, `ts_specification_restrictions` JSON); CREATE TABLE IF NOT EXISTS `cat_cnns` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `priority` INT, `amin` FLOAT, `amax` FLOAT, `sd1` CHAR, `sz` FLOAT, `cnn_type` CHAR, `ahmin` FLOAT, `ahmax` FLOAT, `lmin` INT, `lmax` INT, `tmin` INT, `tmax` INT, `var_layers` BOOLEAN, `for_direct_profile_only` INT, `art1vert` BOOLEAN, `art1glass` BOOLEAN, `art2glass` BOOLEAN, `note` CHAR, `applying` INT, `captured` BOOLEAN, `editor` CHAR, `ts_specification` JSON, `ts_cnn_elmnts` JSON, `ts_selection_params` JSON, `ts_sizes` JSON, `ts_priorities` JSON); CREATE TABLE IF NOT EXISTS `cat_delivery_areas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `country` CHAR, `region` CHAR, `city` CHAR, `latitude` FLOAT, `longitude` FLOAT, `delivery_area` CHAR, `rstore` CHAR, `ts_coordinates` JSON); CREATE TABLE IF NOT EXISTS `cat_production_params` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `default_clr` CHAR, `clr_group` CHAR, `template` BOOLEAN, `flap_pos_by_impost` BOOLEAN, `flap_weight_max` BOOLEAN, `formula` CHAR, `jx` INT, `e` INT, `c` FLOAT, `g` FLOAT, `f` FLOAT, `check_static` BOOLEAN, `show_flipped` BOOLEAN, `glass_thickness` INT, `furn_level` INT, `base_clr` CHAR, `sketch_view` CHAR, `outline` CHAR, `note` CHAR, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR, `ts_elmnts` JSON, `ts_production` JSON, `ts_product_params` JSON, `ts_furn_params` JSON, `ts_params` JSON, `ts_colors` JSON, `ts_extra_fields` JSON, `ts_templates` JSON); CREATE TABLE IF NOT EXISTS `cat_parameters_keys` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `priority` INT, `note` CHAR, `sorting_field` INT, `applying` CHAR, `captured` BOOLEAN, `editor` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_inserts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `article` CHAR, `insert_type` CHAR, `clr` CHAR, `lmin` INT, `lmax` INT, `hmin` INT, `hmax` INT, `smin` FLOAT, `smax` FLOAT, `for_direct_profile_only` INT, `ahmin` FLOAT, `ahmax` FLOAT, `priority` INT, `mmin` INT, `mmax` INT, `can_rotate` BOOLEAN, `sizeb` FLOAT, `clr_group` CHAR, `is_order_row` CHAR, `note` CHAR, `insert_glass_type` CHAR, `available` BOOLEAN, `slave` BOOLEAN, `is_supplier` CHAR, `region` INT, `split_type` CHAR, `pair` CHAR, `lay_split_types` BOOLEAN, `captured` BOOLEAN, `editor` CHAR, `ts_specification` JSON, `ts_selection_params` JSON, `ts_product_params` JSON, `ts_inserts` JSON); CREATE TABLE IF NOT EXISTS `cat_organizations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `prefix` CHAR, `individual_legal` CHAR, `individual_entrepreneur` CHAR, `inn` CHAR, `kpp` CHAR, `ogrn` CHAR, `main_bank_account` CHAR, `main_cashbox` CHAR, `certificate_series_number` CHAR, `certificate_date_issue` Date, `certificate_authority_name` CHAR, `certificate_authority_code` CHAR, `chief` CHAR, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR, `ts_contact_information` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_nom` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `article` CHAR, `name_full` CHAR, `base_unit` CHAR, `storage_unit` CHAR, `nom_kind` CHAR, `nom_group` CHAR, `vat_rate` CHAR, `note` CHAR, `price_group` CHAR, `elm_type` CHAR, `len` FLOAT, `width` FLOAT, `thickness` FLOAT, `sizefurn` FLOAT, `sizefaltz` FLOAT, `density` FLOAT, `volume` FLOAT, `arc_elongation` FLOAT, `sizeb` FLOAT, `loss_factor` FLOAT, `rounding_quantity` INT, `clr` CHAR, `cutting_optimization_type` CHAR, `saw_width` FLOAT, `overmeasure` FLOAT, `double_cut` INT, `alp1` FLOAT, `wsnip_min` FLOAT, `wsnip_max` FLOAT, `packing` FLOAT, `pricing` CHAR, `visualization` CHAR, `complete_list_sorting` INT, `is_accessory` BOOLEAN, `is_procedure` BOOLEAN, `is_service` BOOLEAN, `is_pieces` BOOLEAN, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR, `ts_extra_fields` JSON, `ts_demand` JSON, `ts_colors` JSON); CREATE TABLE IF NOT EXISTS `cat_partners` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `main_bank_account` CHAR, `note` CHAR, `inn` CHAR, `kpp` CHAR, `ogrn` CHAR, `okpo` CHAR, `individual_legal` CHAR, `main_contract` CHAR, `identification_document` CHAR, `buyer_main_manager` CHAR, `is_buyer` BOOLEAN, `is_supplier` BOOLEAN, `primary_contact` CHAR, `parent` CHAR, `ts_contact_information` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_units` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `international_short` CHAR); CREATE TABLE IF NOT EXISTS `cat_cashboxes` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `funds_currency` CHAR, `department` CHAR, `current_account` CHAR, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_meta_ids` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `full_moniker` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `css` CHAR, `captured` BOOLEAN, `editor` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_units` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `qualifier_unit` CHAR, `heft` FLOAT, `volume` FLOAT, `coefficient` FLOAT, `rounding_threshold` INT, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_contracts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `settlements_currency` CHAR, `mutual_settlements` CHAR, `contract_kind` CHAR, `date` Date, `check_days_without_pay` BOOLEAN, `allowable_debts_amount` FLOAT, `allowable_debts_days` INT, `note` CHAR, `check_debts_amount` BOOLEAN, `check_debts_days` BOOLEAN, `number_doc` CHAR, `organization` CHAR, `main_cash_flow_article` CHAR, `main_project` CHAR, `accounting_reflect` BOOLEAN, `tax_accounting_reflect` BOOLEAN, `prepayment_percent` FLOAT, `validity` Date, `vat_included` BOOLEAN, `price_type` CHAR, `vat_consider` BOOLEAN, `days_without_pay` INT, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `nom_type` CHAR, `dnom` CHAR, `dcharacteristic` CHAR, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_information_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `mandatory_fields` BOOLEAN, `type` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_currencies` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `extra_charge` FLOAT, `main_currency` CHAR, `parameters_russian_recipe` CHAR); CREATE TABLE IF NOT EXISTS `cat_branches` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `suffix` CHAR, `lang` CHAR, `direct` BOOLEAN, `use` BOOLEAN, `no_mdm` BOOLEAN, `no_partners` BOOLEAN, `no_divisions` BOOLEAN, `parent` CHAR, `ts_organizations` JSON, `ts_partners` JSON, `ts_divisions` JSON, `ts_price_types` JSON, `ts_keys` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_elm_visualization` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `svg_path` CHAR, `note` CHAR, `attributes` CHAR, `rotate` INT, `offset` INT, `side` CHAR, `elm_side` INT, `cx` INT, `cy` INT, `angle_hor` INT, `priority` INT, `mode` INT, `origin` CHAR, `captured` BOOLEAN, `editor` CHAR, `predefined_name` CHAR, `ts_sketch_view` JSON, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_formulas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `formula` CHAR, `leading_formula` CHAR, `condition_formula` BOOLEAN, `definition` CHAR, `template` CHAR, `sorting_field` INT, `async` BOOLEAN, `disabled` BOOLEAN, `context` INT, `jsx` BOOLEAN, `captured` BOOLEAN, `editor` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_countries` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `alpha2` CHAR, `alpha3` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_destinations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `ts_extra_fields` JSON, `ts_extra_properties` JSON); CREATE TABLE IF NOT EXISTS `cat_banks_qualifier` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `correspondent_account` CHAR, `city` CHAR, `address` CHAR, `phone_numbers` CHAR, `activity_ceased` BOOLEAN, `swift` CHAR, `inn` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values_hierarchy` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_work_center_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `applying` CHAR, `available` BOOLEAN, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_organization_bank_accounts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `bank` CHAR, `bank_bic` CHAR, `funds_currency` CHAR, `account_number` CHAR, `settlements_bank` CHAR, `settlements_bank_bic` CHAR, `department` CHAR, `captured` BOOLEAN, `editor` CHAR, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_partner_bank_accounts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `account_number` CHAR, `bank` CHAR, `settlements_bank` CHAR, `correspondent_text` CHAR, `appointments_text` CHAR, `funds_currency` CHAR, `bank_bic` CHAR, `bank_name` CHAR, `bank_correspondent_account` CHAR, `bank_city` CHAR, `bank_address` CHAR, `bank_phone_numbers` CHAR, `settlements_bank_bic` CHAR, `settlements_bank_correspondent_account` CHAR, `settlements_bank_city` CHAR, `owner` CHAR); CREATE TABLE IF NOT EXISTS `cat_choice_params` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `key` CHAR, `runtime` BOOLEAN, `condition_formula` CHAR, `field` CHAR, `disabled` BOOLEAN, `ts_composition` JSON); CREATE TABLE IF NOT EXISTS `cat_params_links` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `master` CHAR, `slave` CHAR, `hide` BOOLEAN, `note` CHAR, `use_master` INT, `captured` BOOLEAN, `editor` CHAR, `parent` CHAR, `ts_leadings` JSON, `ts_values` JSON); CREATE TABLE IF NOT EXISTS `cat_scheme_settings` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `obj` CHAR, `user` CHAR, `order` INT, `query` CHAR, `date_from` Date, `date_till` Date, `standard_period` CHAR, `formula` CHAR, `output` CHAR, `tag` CHAR, `ts_fields` JSON, `ts_sorting` JSON, `ts_dimensions` JSON, `ts_resources` JSON, `ts_selection` JSON, `ts_params` JSON, `ts_composition` JSON, `ts_conditional_appearance` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_fields` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_meta_objs` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `shown` BOOLEAN, `sorting_field` INT, `extra_values_owner` CHAR, `available` BOOLEAN, `mandatory` BOOLEAN, `include_to_name` BOOLEAN, `list` INT, `caption` CHAR, `note` CHAR, `destination` CHAR, `tooltip` CHAR, `is_extra_property` BOOLEAN, `include_to_description` BOOLEAN, `calculated` CHAR, `showcalc` BOOLEAN, `inheritance` INT, `captured` BOOLEAN, `editor` CHAR, `predefined_name` CHAR, `type` JSON, `ts_applying` JSON, `ts_use` JSON, `ts_hide` JSON); CREATE TABLE IF NOT EXISTS `cch_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `value` CHAR, `definition` CHAR, `synonym` CHAR, `list` INT, `captured` BOOLEAN, `editor` CHAR, `predefined_name` CHAR, `parent` CHAR, `type` CHAR, `ts_elmnts` JSON); CREATE TABLE IF NOT EXISTS `enm_individual_legal` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_order_sending_stages` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_planning_phases` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_elm_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_specification_order_row_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_cnn_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sz_line_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_open_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_cutting_optimization_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_nom_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_lead_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_contact_information_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_lay_split_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_inserts_glass_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_inserts_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_cnn_sides` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_vat_rates` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_specification_installation_methods` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_angle_calculating_ways` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_count_calculating_ways` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_application_joint_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_coloring` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_buyers_order_states` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_lay_regions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_nested_object_editing_mode` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_elm_positions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_bind_coordinates` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_parameters_keys_applying` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_gender` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_positions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_plan_detailing` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_opening` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_orientations` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_rounding_quantity` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_open_directions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_color_price_group_destinations` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_order_categories` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_use_cut` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_obj_delivery_states` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_text_aligns` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_predefined_formulas` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_inventory_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_contract_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_debit_credit_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sketch_view` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_mutual_contract_settlements` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_align_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_contraction_options` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_application_mode_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_offset_options` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_transfer_operations_options` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_inset_attrs_options` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_path_kind` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_report_output` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_quick_access` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_standard_period` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_data_field_kinds` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_label_positions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_comparison_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sort_directions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_accumulation_record_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); ', []);

$p.md.init({"enm":{"accumulation_record_type":[{"order":0,"name":"debit","synonym":"Приход"},{"order":1,"name":"credit","synonym":"Расход"},{"tag":"Вид движения регистра накопления","description":"Системное перечисление"}],"sort_directions":[{"order":0,"name":"asc","synonym":"По возрастанию","default":true},{"order":1,"name":"desc","synonym":"По убыванию"},{"tag":"Направление сортировки","description":"Для компоновки"}],"comparison_types":[{"order":0,"name":"gt","synonym":"Больше"},{"order":1,"name":"gte","synonym":"Больше или равно"},{"order":2,"name":"lt","synonym":"Меньше"},{"order":3,"name":"lte","synonym":"Меньше или равно "},{"order":4,"name":"eq","synonym":"Равно","default":true},{"order":5,"name":"ne","synonym":"Не равно"},{"order":6,"name":"in","synonym":"В списке"},{"order":7,"name":"nin","synonym":"Не в списке"},{"order":8,"name":"inh","synonym":"В группе"},{"order":9,"name":"ninh","synonym":"Не в группе"},{"order":10,"name":"lke","synonym":"Содержит "},{"order":11,"name":"nlk","synonym":"Не содержит"},{"order":12,"name":"filled","synonym":"Заполнено "},{"order":13,"name":"nfilled","synonym":"Не заполнено"},{"tag":"Виды сравнений","description":"Системное перечисление"}],"label_positions":[{"order":0,"name":"inherit","synonym":"Наследовать","default":true},{"order":1,"name":"hide","synonym":"Скрыть"},{"order":2,"name":"left","synonym":"Лево"},{"order":3,"name":"right","synonym":"Право"},{"order":4,"name":"top","synonym":"Верх"},{"order":5,"name":"bottom","synonym":"Низ"},{"tag":"Положение заголовка элемеента управления","description":"Системное перечисление"}],"data_field_kinds":[{"order":0,"name":"field","synonym":"Поле ввода","default":true},{"order":1,"name":"input","synonym":"Простой текст"},{"order":2,"name":"text","synonym":"Многострочный текст"},{"order":3,"name":"label","synonym":"Надпись"},{"order":4,"name":"link","synonym":"Гиперссылка"},{"order":5,"name":"cascader","synonym":"Каскадер"},{"order":6,"name":"toggle","synonym":"Переключатель"},{"order":7,"name":"image","synonym":"Картинка"},{"order":8,"name":"type","synonym":"Тип значения"},{"order":9,"name":"path","synonym":"Путь к данным"},{"order":10,"name":"typed_field","synonym":"Поле связи по типу"},{"order":11,"name":"props","synonym":"Свойства объекта"},{"order":12,"name":"star","synonym":"Пометка"},{"tag":"Типы полей ввода данных","description":"Системное перечисление"}],"standard_period":[{"order":0,"name":"custom","synonym":"Произвольный","default":true},{"order":1,"name":"yesterday","synonym":"Вчера"},{"order":2,"name":"today","synonym":"Сегодня"},{"order":3,"name":"tomorrow","synonym":"Завтра"},{"order":4,"name":"last7days","synonym":"Последние 7 дней"},{"order":5,"name":"last30days","synonym":"Последние 30 дней"},{"order":6,"name":"last3Month","synonym":"Последние 3 месяца"},{"order":7,"name":"last6Month","synonym":"Последние 6 месяцев"},{"order":8,"name":"lastWeek","synonym":"Прошлая неделя"},{"order":9,"name":"lastTendays","synonym":"Прошлая декада"},{"order":10,"name":"lastMonth","synonym":"Прошлый месяц"},{"order":11,"name":"lastQuarter","synonym":"Прошлый квартал"},{"order":12,"name":"lastHalfYear","synonym":"Прошлое полугодие"},{"order":13,"name":"lastYear","synonym":"Прошлый год"},{"order":14,"name":"next7Days","synonym":"Следующие 7 дней"},{"order":15,"name":"nextTendays","synonym":"Следующая декада"},{"order":16,"name":"nextWeek","synonym":"Следующая неделя"},{"order":17,"name":"nextMonth","synonym":"Следующий месяц"},{"order":18,"name":"nextQuarter","synonym":"Следующий квартал"},{"order":19,"name":"nextHalfYear","synonym":"Следующее полугодие"},{"order":20,"name":"nextYear","synonym":"Следующий год"},{"order":21,"name":"tillEndOfThisYear","synonym":"До конца этого года"},{"order":22,"name":"tillEndOfThisQuarter","synonym":"До конца этого квартала"},{"order":23,"name":"tillEndOfThisMonth","synonym":"До конца этого месяца"},{"order":24,"name":"tillEndOfThisHalfYear","synonym":"До конца этого полугодия"},{"order":25,"name":"tillEndOfThistendays","synonym":"До конца этой декады"},{"order":26,"name":"tillEndOfThisweek","synonym":"До конца этой недели"},{"order":27,"name":"fromBeginningOfThisYear","synonym":"С начала этого года"},{"order":28,"name":"fromBeginningOfThisQuarter","synonym":"С начала этого квартала"},{"order":29,"name":"fromBeginningOfThisMonth","synonym":"С начала этого месяца"},{"order":30,"name":"fromBeginningOfThisHalfYear","synonym":"С начала этого полугодия"},{"order":31,"name":"fromBeginningOfThisTendays","synonym":"С начала этой декады"},{"order":32,"name":"fromBeginningOfThisWeek","synonym":"С начала этой недели"},{"order":33,"name":"thisTenDays","synonym":"Эта декада"},{"order":34,"name":"thisWeek","synonym":"Эта неделя"},{"order":35,"name":"thisHalfYear","synonym":"Это полугодие"},{"order":36,"name":"thisYear","synonym":"Этот год"},{"order":37,"name":"thisQuarter","synonym":"Этот квартал"},{"order":38,"name":"thisMonth","synonym":"Этот месяц"},{"tag":"Стандартный период","description":"Для компоновки"}],"quick_access":[{"order":0,"name":"none","synonym":"Нет","default":true},{"order":1,"name":"toolbar","synonym":"Панель инструментов"},{"order":2,"name":"drawer","synonym":"Панель формы"},{"tag":"Расположение элемента быстрого доступа","description":"Для компоновки"}],"report_output":[{"order":0,"name":"grid","synonym":"Таблица","default":true},{"order":1,"name":"chart","synonym":"Диаграмма"},{"order":2,"name":"pivot","synonym":"Cводная таблица"},{"order":3,"name":"html","synonym":"Документ HTML"},{"tag":"Варианты вывода отчёта","description":"Для компоновки"}],"path_kind":[{"order":0,"name":"generatrix","synonym":"Образующая"},{"order":1,"name":"inner","synonym":"Внутренний"},{"order":2,"name":"outer","synonym":"Внешний"},{"tag":"Вариант пути","description":"Для визуализации элементов. Привязка к образующей, внутренней или внешней стороне"}],"inset_attrs_options":[{"order":0,"name":"НеПоперечина","synonym":"Не поперечина"},{"order":1,"name":"ОбаНаправления","synonym":"Оба направления"},{"order":2,"name":"ОтключитьВтороеНаправление","synonym":"Отключить второе направление"},{"order":3,"name":"ОтключитьШагиВторогоНаправления","synonym":"Отключить шаги второго направления"},{"order":4,"name":"ОтключитьПервоеНаправление","synonym":"Отключить первое направление"},{"order":5,"name":"ОтключитьШагиПервогоНаправления","synonym":"Отключить шаги первого направления"},{"tag":"Варианты атрибутов вставок","description":"Используется для расчёта спецификации вставки \"по шагам\""}],"transfer_operations_options":[{"order":0,"name":"НетПереноса","synonym":"Нет переноса"},{"order":1,"name":"НаПримыкающий","synonym":"На примыкающий"},{"order":2,"name":"НаПримыкающийОтКонца","synonym":"На примыкающий от конца"},{"order":3,"name":"ЧерезПримыкающий","synonym":"Через примыкающий"},{"tag":"Варианты переноса операций","description":"Для расчёта координат в {@link CatFurns|фурнитуре}"}],"offset_options":[{"order":0,"name":"ОтНачалаСтороны","synonym":"От начала стороны"},{"order":1,"name":"ОтКонцаСтороны","synonym":"От конца стороны"},{"order":2,"name":"ОтСередины","synonym":"От середины"},{"order":3,"name":"ОтРучки","synonym":"От ручки"},{"order":4,"name":"РазмерПоФальцу","synonym":"Размер по фальцу"},{"order":5,"name":"Формула","synonym":"Формула"},{"tag":"Варианты смещений","description":"Для расчёта координат в {@link CatFurns|фурнитуре}"}],"application_mode_kinds":[{"order":0,"name":"Минимум","synonym":"Минимум"},{"order":1,"name":"Максимум","synonym":"Максимум"},{"order":2,"name":"Сложение","synonym":"Сложение"},{"order":3,"name":"Умножение","synonym":"Умножение"},{"order":4,"name":"Вытеснение","synonym":"Вытеснение"},{"tag":"Варианты совместного применения скидок наценок"}],"contraction_options":[{"order":0,"name":"ОтДлиныСтороны","synonym":"От длины стороны"},{"order":1,"name":"ОтВысотыРучки","synonym":"От высоты ручки"},{"order":2,"name":"ОтДлиныСтороныМинусВысотыРучки","synonym":"От длины стороны минус высота ручки"},{"order":3,"name":"ФиксированнаяДлина","synonym":"Фиксированная длина"},{"order":4,"name":"Выражение","synonym":"Выражение"},{"tag":"Варианты укорочений","description":"Для расчёта координат в {@link CatFurns|фурнитуре}"}],"align_types":[{"order":0,"name":"Геометрически","synonym":"Геометрически"},{"order":1,"name":"ПоЗаполнениям","synonym":"По заполнениям"},{"tag":"Варианты уравнивания","description":"Для команды графического редактора \"Уравнять\""}],"mutual_contract_settlements":[{"order":0,"name":"ПоДоговоруВЦелом","synonym":"По договору в целом"},{"order":1,"name":"ПоЗаказам","synonym":"По заказам"},{"order":2,"name":"ПоСчетам","synonym":"По счетам"},{"tag":"Ведение взаиморасчетов по договорам"}],"sketch_view":[{"order":0,"name":"hinge","synonym":"Со стороны петель"},{"order":1,"name":"inner","synonym":"Изнутри"},{"order":2,"name":"outer","synonym":"Снаружи"},{"order":3,"name":"out_hinge","synonym":"Обратный от петель"},{"default":"hinge"},{"tag":"Вид на эскиз"}],"debit_credit_kinds":[{"order":0,"name":"Приход","synonym":"Приход"},{"order":1,"name":"Расход","synonym":"Расход"},{"tag":"Виды движений приход/расход"}],"contract_kinds":[{"order":0,"name":"СПоставщиком","synonym":"С поставщиком"},{"order":1,"name":"СПокупателем","synonym":"С покупателем"},{"order":2,"name":"СКомитентом","synonym":"С комитентом","latin":"committent"},{"order":3,"name":"СКомиссионером","synonym":"С комиссионером","latin":"commission_agent"},{"order":4,"name":"Прочее","synonym":"Прочее"},{"tag":"Виды договоров контрагентов"}],"inventory_kinds":[{"order":0,"name":"Инвентаризация","synonym":"Инвентаризация"},{"order":1,"name":"Оприходование","synonym":"Оприходование"},{"order":2,"name":"Списание","synonym":"Списание"},{"order":3,"name":"ИнвТек","synonym":"Инвентаризация текущих"},{"tag":"Виды операций инвентаризации"}],"predefined_formulas":[{"order":0,"name":"cx_prm","synonym":"Характеристика по параметрам"},{"order":1,"name":"cx_row","synonym":"Характеристика тек. строки"},{"order":2,"name":"cx_clr","synonym":"Характеристика по цвету"},{"order":3,"name":"gb_short","synonym":"Штапик короткий"},{"order":4,"name":"gb_long","synonym":"Штапик длинный"},{"order":5,"name":"nom_prm","synonym":"Номенклатура по параметру"},{"order":6,"name":"clr_prm","synonym":"Цвет по параметру"},{"order":7,"name":"clr_in","synonym":"Цвет как изнутри с дополнением"},{"order":8,"name":"clr_out","synonym":"Цвет как снаружи с дополнением"},{"order":9,"name":"w2","synonym":"Плюс ширина2"},{"tag":"Встроенные формулы"}],"text_aligns":[{"order":0,"name":"left","synonym":"Лево"},{"order":1,"name":"right","synonym":"Право"},{"order":2,"name":"center","synonym":"Центр"},{"tag":"Выравнивание текста"}],"obj_delivery_states":[{"order":0,"name":"Черновик","synonym":"Черновик"},{"order":1,"name":"Отправлен","synonym":"Отправлен"},{"order":2,"name":"Проверяется","synonym":"Проверяется"},{"order":3,"name":"Подтвержден","synonym":"Подтвержден"},{"order":4,"name":"Отклонен","synonym":"Отклонен"},{"order":5,"name":"Отозван","synonym":"Отозван"},{"order":6,"name":"Архив","synonym":"Перенесён в архив"},{"order":7,"name":"Шаблон","synonym":"Шаблон"},{"tag":"Статусы отправки документа","description":"Статус отправки документа"}],"use_cut":[{"order":0,"name":"none","synonym":"Не учитывать"},{"order":1,"name":"all","synonym":"Учитывать"},{"order":2,"name":"input","synonym":"Только входящую"},{"order":3,"name":"output","synonym":"Только исходящую"},{"tag":"Использование обрези","description":"Варианты использования деловой обрези"}],"order_categories":[{"order":0,"name":"order","synonym":"Расчет заказ"},{"order":1,"name":"service","synonym":"Сервис"},{"order":2,"name":"complaints","synonym":"Рекламация"},{"tag":"Категории заказов"}],"color_price_group_destinations":[{"order":0,"name":"ДляЦенообразования","synonym":"Для ценообразования"},{"order":1,"name":"ДляХарактеристик","synonym":"Для характеристик"},{"order":2,"name":"ДляГруппировкиВПараметрах","synonym":"Для группировки в параметрах"},{"order":3,"name":"ДляОграниченияДоступности","synonym":"Для ограничения доступности"},{"tag":"Назначения цветовых групп"}],"open_directions":[{"order":0,"name":"Левое","synonym":"Левое","latin":"left"},{"order":1,"name":"Правое","synonym":"Правое","latin":"right"},{"order":2,"name":"Откидное","synonym":"Откидное","latin":"folding"},{"default":"Правое"},{"tag":"Направление открывания","description":"Направление открывания створки"}],"rounding_quantity":[{"order":0,"name":"БезОптимизации","synonym":"Без оптимизации","latin":"none"},{"order":1,"name":"РаскройДоХлыста","synonym":"Раскрой до хлыста","latin":"stick"},{"order":2,"name":"РаскройДоУпаковки","synonym":"Раскрой до упаковки","latin":"packing"},{"default":"none"},{"tag":"Округлять количество"}],"orientations":[{"order":0,"name":"Горизонтальная","synonym":"Горизонтальная","latin":"hor"},{"order":1,"name":"Вертикальная","synonym":"Вертикальная","latin":"vert"},{"order":2,"name":"Наклонная","synonym":"Наклонная","latin":"incline"},{"tag":"Ориентация элемента"}],"opening":[{"order":0,"name":"in","synonym":"На себя"},{"order":1,"name":"out","synonym":"От себя"},{"default":"in"},{"tag":"Открывание","description":"Вовнутрь или наружу"}],"plan_detailing":[{"order":0,"name":"order","synonym":"Заказ"},{"order":1,"name":"product","synonym":"Изделие"},{"order":2,"name":"layer","synonym":"Контур"},{"order":3,"name":"elm","synonym":"Элемент"},{"order":4,"name":"nearest","synonym":"Соседний элем или слой"},{"order":5,"name":"parent","synonym":"Родительский элемент или слой"},{"order":6,"name":"sub_elm","synonym":"Вложенный элемент"},{"order":7,"name":"algorithm","synonym":"Алгоритм"},{"order":8,"name":"layer_active","synonym":"Активн. створка"},{"order":9,"name":"layer_passive","synonym":"Пассивн. створка"},{"tag":"Детализация планирования"}],"positions":[{"order":0,"name":"Любое","synonym":"Любое","latin":"any"},{"order":1,"name":"Верх","synonym":"Верх","latin":"top"},{"order":2,"name":"Низ","synonym":"Низ","latin":"bottom"},{"order":3,"name":"Лев","synonym":"Лев","latin":"left"},{"order":4,"name":"Прав","synonym":"Прав","latin":"right"},{"order":5,"name":"ЦентрВертикаль","synonym":"Центр вертикаль","latin":"vert"},{"order":6,"name":"ЦентрГоризонталь","synonym":"Центр горизонталь","latin":"hor"},{"order":7,"name":"Центр","synonym":"Центр","latin":"center"},{"order":8,"name":"ЛевВерх","synonym":"Лев верх","latin":"lt"},{"order":9,"name":"ЛевНиз","synonym":"Лев низ","latin":"lb"},{"order":10,"name":"ПравВерх","synonym":"Прав верх","latin":"rt"},{"order":11,"name":"ПравНиз","synonym":"Прав низ","latin":"rb"},{"tag":"Положение элемента","description":"Используется для назначения {@link CatInserts|Вставки} в {@link CatProduction_params|Системе}"}],"gender":[{"order":0,"name":"Мужской","synonym":"Мужской"},{"order":1,"name":"Женский","synonym":"Женский"},{"tag":"Пол физических Лиц"}],"parameters_keys_applying":[{"order":0,"name":"НаправлениеДоставки","synonym":"Направление доставки"},{"order":1,"name":"РабочийЦентр","synonym":"Рабочий центр"},{"order":2,"name":"Технология","synonym":"Технология"},{"order":3,"name":"Ценообразование","synonym":"Ценообразование"},{"order":4,"name":"ПараметрВыбора","synonym":"Параметр выбора"},{"tag":"Применения ключей параметров"}],"bind_coordinates":[{"order":0,"name":"product","synonym":"Изделие"},{"order":1,"name":"contour","synonym":"Слой"},{"order":2,"name":"b","synonym":"Начало пути"},{"order":3,"name":"e","synonym":"Конец пути"},{"tag":"Приязка координат"}],"elm_positions":[{"order":0,"name":"top","synonym":"Шапка"},{"order":1,"name":"column1","synonym":"Колонка 1"},{"order":2,"name":"column2","synonym":"Колонка 2"},{"order":3,"name":"column3","synonym":"Колонка 3"},{"order":4,"name":"bottom","synonym":"Подвал"},{"tag":"Расположение элементов управления"}],"nested_object_editing_mode":[{"order":0,"name":"string","synonym":"Строка"},{"order":1,"name":"frm","synonym":"Форма"},{"order":2,"name":"both","synonym":"Строка и форма"},{"tag":"Режим редактирования вложенного объекта"}],"lay_regions":[{"order":0,"name":"inner","synonym":"Изнутри"},{"order":1,"name":"outer","synonym":"Снаружи"},{"order":2,"name":"all","synonym":"С двух стор"},{"order":3,"name":"r1","synonym":"Кам 1"},{"order":4,"name":"r2","synonym":"Кам 2"},{"order":5,"name":"r3","synonym":"Кам 3"},{"tag":"Слои раскладки"}],"buyers_order_states":[{"order":0,"name":"ОжидаетсяСогласование","synonym":"Ожидается согласование"},{"order":1,"name":"ОжидаетсяАвансДоОбеспечения","synonym":"Ожидается аванс (до обеспечения)"},{"order":2,"name":"ГотовКОбеспечению","synonym":"Готов к обеспечению"},{"order":3,"name":"ОжидаетсяПредоплатаДоОтгрузки","synonym":"Ожидается предоплата (до отгрузки)"},{"order":4,"name":"ОжидаетсяОбеспечение","synonym":"Ожидается обеспечение"},{"order":5,"name":"ГотовКОтгрузке","synonym":"Готов к отгрузке"},{"order":6,"name":"ВПроцессеОтгрузки","synonym":"В процессе отгрузки"},{"order":7,"name":"ОжидаетсяОплатаПослеОтгрузки","synonym":"Ожидается оплата (после отгрузки)"},{"order":8,"name":"ГотовКЗакрытию","synonym":"Готов к закрытию"},{"order":9,"name":"Закрыт","synonym":"Закрыт"},{"tag":"Состояния заказов клиентов"}],"coloring":[{"order":0,"name":"lam","synonym":"Ламинация"},{"order":1,"name":"coloring","synonym":"Покраска"},{"tag":"Способ придания цвета"}],"application_joint_kinds":[{"order":0,"name":"Сумма","synonym":"Скидка (наценка) суммой на документ"},{"order":1,"name":"СуммаДляКаждойСтроки","synonym":"Скидка (наценка) суммой для каждой строки"},{"order":2,"name":"Количество","synonym":"Скидка количеством"},{"order":3,"name":"Процент","synonym":"Скидка (наценка) процентом"},{"order":4,"name":"ВидЦены","synonym":"Специальная цена"},{"order":5,"name":"Сообщение","synonym":"Выдача сообщения"},{"order":6,"name":"КартаЛояльности","synonym":"Выдача карты лояльности"},{"order":7,"name":"Подарок","synonym":"Подарок"},{"order":8,"name":"ОкруглениеСуммы","synonym":"Округление суммы документа"},{"tag":"Способы предоставления скидок наценок"}],"count_calculating_ways":[{"order":0,"name":"ПоПериметру","synonym":"По периметру","latin":"perim"},{"order":1,"name":"ПоПлощади","synonym":"По площади","latin":"area"},{"order":2,"name":"ДляЭлемента","synonym":"Для элемента","latin":"element"},{"order":3,"name":"ПоШагам","synonym":"По шагам","latin":"steps"},{"order":4,"name":"ПоФормуле","synonym":"По формуле","latin":"formulas"},{"order":5,"name":"ПоПарам","synonym":"По параметру","latin":"parameters"},{"order":6,"name":"ДлинаПоПарам","synonym":"Длина по параметру","latin":"len_prm"},{"order":7,"name":"ГабаритыПоПарам","synonym":"Габариты по параметрам","latin":"dimensions"},{"order":8,"name":"ПоСоединениям","synonym":"По соединениям","latin":"cnns","note":"Поправки размеров из концевых соединений"},{"order":9,"name":"ПоЗаполнениям","synonym":"По заполнениям","latin":"fillings","note":"Для всех заполнений контура"},{"order":10,"name":"ПоЦвету","synonym":"По цвету","latin":"coloring","note":"С учётом группы цвета и площадей изнутри-снаружи"},{"tag":"Способы расчета количества"}],"angle_calculating_ways":[{"order":0,"name":"Основной","synonym":"Основной"},{"order":1,"name":"СварнойШов","synonym":"Сварной шов"},{"order":2,"name":"СоединениеПополам","synonym":"Соед./2"},{"order":3,"name":"Соединение","synonym":"Соединение"},{"order":4,"name":"_90","synonym":"90"},{"order":5,"name":"НеСчитать","synonym":"Не считать"},{"tag":"Способы расчета угла"}],"specification_installation_methods":[{"order":0,"name":"Всегда","synonym":"Всегда"},{"order":1,"name":"САртикулом1","synonym":"с Арт1"},{"order":2,"name":"САртикулом2","synonym":"с Арт2"},{"tag":"Способы установки спецификации"}],"vat_rates":[{"order":0,"name":"НДС18","synonym":"18%"},{"order":1,"name":"НДС18_118","synonym":"18% / 118%"},{"order":2,"name":"НДС10","synonym":"10%"},{"order":3,"name":"НДС10_110","synonym":"10% / 110%"},{"order":4,"name":"НДС0","synonym":"0%"},{"order":5,"name":"БезНДС","synonym":"Без НДС"},{"order":6,"name":"НДС20","synonym":"20%"},{"order":7,"name":"НДС20_120","synonym":"20% / 120%"},{"tag":"Ставки НДС"}],"cnn_sides":[{"order":0,"name":"Изнутри","synonym":"Изнутри","latin":"inner"},{"order":1,"name":"Снаружи","synonym":"Снаружи","latin":"outer"},{"order":2,"name":"Любая","synonym":"Любая","latin":"any"},{"default":"Любая"},{"tag":"Стороны соединений","description":"Актуально для импостов и витражных элементов"}],"inserts_types":[{"order":0,"name":"Профиль","synonym":"Профиль","latin":"profile"},{"order":1,"name":"Заполнение","synonym":"Заполнение","latin":"glass"},{"order":2,"name":"Элемент","synonym":"Элемент","latin":"element"},{"order":3,"name":"Изделие","synonym":"Изделие","latin":"product"},{"order":4,"name":"Контур","synonym":"Контур","latin":"layer"},{"order":5,"name":"Заказ","synonym":"Заказ","latin":"order"},{"order":6,"name":"МоскитнаяСетка","synonym":"Москитная сетка","latin":"mosquito"},{"order":7,"name":"Подоконник","synonym":"Подоконник","latin":"sill"},{"order":8,"name":"Откос","synonym":"Откос","latin":"slope"},{"order":9,"name":"Водоотлив","synonym":"Водоотлив","latin":"sectional"},{"order":10,"name":"Жалюзи","synonym":"Жалюзи","latin":"jalousie"},{"order":11,"name":"Монтаж","synonym":"Монтаж","latin":"mount"},{"order":12,"name":"Доставка","synonym":"Доставка","latin":"delivery"},{"order":13,"name":"Набор","synonym":"Набор","latin":"set"},{"order":14,"name":"Параметрик","synonym":"Параметрик","latin":"parametric"},{"order":15,"name":"ВнешнийПараметрик","synonym":"Внешнее API","latin":"external"},{"order":16,"name":"Стеклопакет","synonym":"Стеклопакет составной","latin":"composite"},{"order":17,"name":"Примыкание","synonym":"Примыкание","latin":"adjoining"},{"order":18,"name":"Цвет","synonym":"Придание цвета","latin":"coloring"},{"order":19,"name":"Упаковка","synonym":"Упаковка","latin":"packing"},{"order":20,"name":"НеИспользовать","synonym":"Не использовать","latin":"not_use"},{"tag":"Типы вставок","description":"Задаёт алгоритмы расчета и визуализации, используется для отбора в интерфейсе"}],"inserts_glass_types":[{"order":0,"name":"Заполнение","synonym":"Заполнение"},{"order":1,"name":"Рамка","synonym":"Рамка"},{"order":2,"name":"Газ","synonym":"Гель, газ"},{"order":3,"name":"Пленка","synonym":"Пленка"},{"order":4,"name":"СтеклоСПодогревом","synonym":"Стекло с подогревом"},{"order":5,"name":"СтеклоЗакаленное","synonym":"Стекло закаленное"},{"order":6,"name":"СтеклоЭнергоСб","synonym":"Стекло энергосберегающее"},{"order":7,"name":"СтеклоЦветное","synonym":"Стекло цветное"},{"order":8,"name":"Триплекс","synonym":"Триплекс"},{"tag":"Типы вставок стеклопакета","description":"Состав заполнения"}],"lay_split_types":[{"order":0,"name":"ДелениеГоризонтальных","synonym":"Деление горизонтальных"},{"order":1,"name":"ДелениеВертикальных","synonym":"Деление вертикальных"},{"order":2,"name":"КрестВСтык","synonym":"Крест в стык"},{"order":3,"name":"КрестПересечение","synonym":"Крест пересечение"},{"tag":"Типы деления раскладки","description":"Тип параметра для команды \"добавить раскладку\""}],"contact_information_types":[{"order":0,"name":"Адрес","synonym":"Адрес"},{"order":1,"name":"Телефон","synonym":"Телефон"},{"order":2,"name":"АдресЭлектроннойПочты","synonym":"Адрес электронной почты"},{"order":3,"name":"ВебСтраница","synonym":"Веб страница"},{"order":4,"name":"Факс","synonym":"Факс"},{"order":5,"name":"Другое","synonym":"Другое"},{"order":6,"name":"Skype","synonym":"Skype"},{"tag":"Типы контактной информации"}],"lead_types":[{"order":0,"name":"email","synonym":"Электронная почта"},{"order":1,"name":"social","synonym":"Социальная сеть"},{"order":2,"name":"phone","synonym":"Телефон"},{"order":3,"name":"visit","synonym":"Визит"},{"order":4,"name":"site","synonym":"Сайт"},{"tag":"Типы лидов"}],"nom_types":[{"order":0,"name":"Товар","synonym":"Товар, материал"},{"order":1,"name":"Услуга","synonym":"Услуга"},{"order":2,"name":"Работа","synonym":"Работа, техоперация"},{"tag":"Типы номенклатуры"}],"cutting_optimization_types":[{"order":0,"name":"Нет","synonym":"Нет"},{"order":1,"name":"РасчетНарезки","synonym":"Расчет нарезки"},{"order":2,"name":"НельзяВращатьПереворачивать","synonym":"Нельзя вращать переворачивать"},{"order":3,"name":"ТолькоНомераЯчеек","synonym":"Только номера ячеек"},{"tag":"Типы оптимизаций раскроя"}],"open_types":[{"order":0,"name":"Глухое","synonym":"Глухое"},{"order":1,"name":"Поворотное","synonym":"Поворотное"},{"order":2,"name":"Откидное","synonym":"Откидное"},{"order":3,"name":"ПоворотноОткидное","synonym":"Поворотно-откидное"},{"order":4,"name":"Раздвижное","synonym":"Раздвижное"},{"order":5,"name":"Неподвижное","synonym":"Неподвижное"},{"tag":"Типы открывания"}],"sz_line_types":[{"order":0,"name":"Обычные","synonym":"Обычные"},{"order":1,"name":"Габаритные","synonym":"Только габаритные"},{"order":2,"name":"ПоСтворкам","synonym":"По створкам"},{"order":3,"name":"ОтКрая","synonym":"От края"},{"order":4,"name":"БезРазмеров","synonym":"Без размеров"},{"tag":"Типы размерных линий"}],"cnn_types":[{"order":0,"name":"УгловоеДиагональное","synonym":"Угловое диагональное","latin":"ad","css":"tb_img_cnn_ad"},{"order":1,"name":"УгловоеКВертикальной","synonym":"Угловое к вертикальной","latin":"av","css":"tb_img_cnn_short"},{"order":2,"name":"УгловоеКГоризонтальной","synonym":"Угловое к горизонтальной","latin":"ah","css":"tb_img_cnn_long"},{"order":3,"name":"ТОбразное","synonym":"Т-образное","latin":"t","css":"tb_img_cnn_t"},{"order":4,"name":"Наложение","synonym":"Наложение","latin":"ii","css":"tb_img_cnn_ii"},{"order":5,"name":"НезамкнутыйКонтур","synonym":"Незамкнутый контур","latin":"i","css":"tb_img_cnn_i"},{"order":6,"name":"КрестВСтык","synonym":"Крест в стык","latin":"xx","css":"tb_img_cnn_xx"},{"order":7,"name":"КрестПересечение","synonym":"Крест пересечение","latin":"xt","css":"tb_img_cnn_xt"},{"order":8,"name":"Короткое","synonym":"Короткое","latin":"short","css":"tb_img_cnn_short"},{"order":9,"name":"Длинное","synonym":"Длинное","latin":"long","css":"tb_img_cnn_long"},{"tag":"Типы соединений"}],"specification_order_row_types":[{"order":0,"name":"Нет","synonym":"Нет","latin":"no"},{"order":1,"name":"Материал","synonym":"Материал","latin":"material"},{"order":2,"name":"Продукция","synonym":"Продукция","latin":"prod"},{"order":3,"name":"Комплектация","synonym":"Комплектация","latin":"kit"},{"order":4,"name":"ТекИзделие","synonym":"Текущее изделие","latin":"current"},{"order":5,"name":"Контур","synonym":"Контур","latin":"layer"},{"order":6,"name":"Соседний","synonym":"Соседний элем или слой","latin":"nearest"},{"tag":"Типы строк в заказ","description":"Способ вытягивания строки спецификации в заказ либо привязка к элементу или слою"}],"elm_types":[{"order":0,"name":"Рама","synonym":"Рама","latin":"rama"},{"order":1,"name":"Створка","synonym":"Створка","latin":"flap"},{"order":2,"name":"СтворкаБИ","synonym":"Створка безимпостная","latin":"flap0"},{"order":3,"name":"Импост","synonym":"Импост","latin":"impost"},{"order":4,"name":"Штульп","synonym":"Штульп","latin":"shtulp"},{"order":5,"name":"Стекло","synonym":"Стекло - стеклопакет","latin":"glass"},{"order":6,"name":"Заполнение","synonym":"Заполнение - сэндвич","latin":"sandwich"},{"order":7,"name":"Раскладка","synonym":"Раскладка - фальшпереплет","latin":"layout"},{"order":8,"name":"Текст","synonym":"Текст","latin":"text"},{"order":9,"name":"Линия","synonym":"Линия","latin":"line","note":"Произвольная линия (путь)"},{"order":10,"name":"Размер","synonym":"Размер","latin":"size","note":"Размерная линия"},{"order":11,"name":"Радиус","synonym":"Радиус","latin":"radius","note":"Размерная линия радиуса"},{"order":12,"name":"Сечение","synonym":"Сечение","latin":"cut"},{"order":13,"name":"Добор","synonym":"Доборный проф.","latin":"addition"},{"order":14,"name":"Соединитель","synonym":"Соединит. профиль","latin":"linking"},{"order":15,"name":"Связка","synonym":"Связка элементов","latin":"bundle"},{"order":16,"name":"Вложение","synonym":"Вирт. конт. вложения","latin":"attachment"},{"order":17,"name":"Водоотлив","synonym":"Водоотлив","latin":"drainage"},{"order":18,"name":"Москитка","synonym":"Москитн. сетка","latin":"mosquito"},{"order":19,"name":"Примыкание","synonym":"Примыкание","latin":"adjoining"},{"order":20,"name":"Фурнитура","synonym":"Фурнитура","latin":"furn"},{"order":21,"name":"СоставнойПуть","synonym":"Составной путь","latin":"compound"},{"order":22,"name":"Макрос","synonym":"Макрос обр центра","latin":"macro"},{"order":23,"name":"Подоконник","synonym":"Подоконник","latin":"sill"},{"order":24,"name":"ОшибкаКритическая","synonym":"Ошибка критическая","latin":"error"},{"order":25,"name":"ОшибкаИнфо","synonym":"Ошибка инфо","latin":"info"},{"order":26,"name":"Визуализация","synonym":"Визуализация","latin":"visualization"},{"order":27,"name":"Прочее","synonym":"Прочее","latin":"other"},{"order":28,"name":"Продукция","synonym":"Продукция","latin":"product"},{"order":29,"name":"Доставка","synonym":"Доставка","latin":"delivery"},{"order":30,"name":"РаботыЦеха","synonym":"Работы цеха","latin":"work"},{"order":31,"name":"Монтаж","synonym":"Монтаж","latin":"mounting"},{"order":32,"name":"Уплотнение","synonym":"Уплотнение","latin":"gasket"},{"order":33,"name":"Арматура","synonym":"Армирование","latin":"reinforcement"},{"order":34,"name":"Штапик","synonym":"Штапик","latin":"glbead"},{"order":35,"name":"Порог","synonym":"Порог","latin":"doorstep"},{"order":36,"name":"Подставочник","synonym":"Подставочн. профиль"},{"tag":"Типы элементов","description":"Определяют поведение элемента в графическом построителе. Не рекомендуется использовать для группировки номенклатур, т.к. один и тот же материал может выступать элементами разных типов"}],"planning_phases":[{"order":0,"name":"plan","synonym":"План"},{"order":1,"name":"run","synonym":"Запуск"},{"order":2,"name":"ready","synonym":"Готовность"},{"tag":"Фазы планирования"}],"order_sending_stages":[{"order":0,"name":"replenish","synonym":"Уточнение информации"},{"order":1,"name":"pay_start","synonym":"Ожидание оплаты"},{"order":2,"name":"pay_confirmed","synonym":"Оплата подтверждена"},{"tag":"Этапы отправки заказа"}],"individual_legal":[{"order":0,"name":"ЮрЛицо","synonym":"Юрлицо"},{"order":1,"name":"ФизЛицо","synonym":"Физлицо"},{"tag":"Юр/ФизЛицо"}]},"ireg":{"log":{"name":"log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction":0}},"sequence":{"synonym":"Порядок","tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction":0}}},"resources":{"class":{"synonym":"Класс","tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}},"user":{"synonym":"Пользователь","tooltip":"Пользователь, в сеансе которого произошло событие","type":{"types":["string"],"str_len":100}}}},"log_view":{"name":"log_view","note":"","synonym":"Просмотр журнала событий","dimensions":{"key":{"synonym":"Ключ","tooltip":"Ключ события","type":{"types":["string"],"str_len":100}},"user":{"synonym":"Пользователь","tooltip":"Пользователь, отметивыший событие, как просмотренное","type":{"types":["string"],"str_len":100}}}},"currency_courses":{"name":"КурсыВалют","splitted":false,"note":"","synonym":"Курсы валют","dimensions":{"currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"Ссылка на валюты","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"period":{"synonym":"Дата курса","multiline_mode":false,"tooltip":"Дата курса валюты","mandatory":true,"type":{"types":["date"],"date_part":"date"}}},"resources":{"course":{"synonym":"Курс","multiline_mode":false,"tooltip":"Курс валюты","mandatory":true,"type":{"types":["number"],"digits":10,"fraction":4}},"multiplicity":{"synonym":"Кратность","multiline_mode":false,"tooltip":"Кратность валюты","mandatory":true,"type":{"types":["number"],"digits":10,"fraction":0}}},"attributes":{},"cachable":"ram","form":{"selection":{"fields":["cat_currencies.name as currency","period","course"],"cols":[{"id":"currency","width":"*","type":"ro","align":"left","sort":"server","caption":"Валюта"},{"id":"period","width":"*","type":"ro","align":"left","sort":"server","caption":"Дата курса"},{"id":"course","width":"*","type":"ron","align":"right","sort":"server","caption":"Курс"}]}}},"margin_coefficients":{"name":"пзМаржинальныеКоэффициентыИСкидки","splitted":false,"note":"","synonym":"Маржинальные коэффициенты","dimensions":{"price_group":{"synonym":"Ценовая группа","multiline_mode":false,"tooltip":"Если указано, правило распространяется только на продукцию данной ценовой группы","choice_groups_elm":"elm","type":{"types":["cat.price_groups"],"is_ref":true}},"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"Если указано, правило распространяется только на продукцию, параметры окружения которой, совпадают с параметрами ключа параметров","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}},"condition_formula":{"synonym":"Формула условия","multiline_mode":false,"tooltip":"В этом поле можно указать дополнительное условие на языке javascript","choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}}},"resources":{"marginality":{"synonym":"К марж","multiline_mode":false,"tooltip":"На этот коэффициент будет умножена плановая себестоимость для получения отпускной цены. Имеет смысл, если \"тип цен прайс\" не указан и константа КМАРЖ_В_СПЕЦИФИКАЦИИ сброшена","type":{"types":["number"],"digits":10,"fraction":4}},"marginality_min":{"synonym":"К марж мин.","multiline_mode":false,"tooltip":"Не позволяет установить в документе расчет скидку, при которой маржинальность строки опустится ниже указанного значения","type":{"types":["number"],"digits":10,"fraction":4}},"marginality_internal":{"synonym":"К марж внутр.","multiline_mode":false,"tooltip":"Маржинальный коэффициент внутренней продажи","type":{"types":["number"],"digits":10,"fraction":4}},"price_type_first_cost":{"synonym":"Тип цен плановой себестоимости","multiline_mode":false,"tooltip":"Этот тип цен будет использован для расчета плановой себестоимости продукции","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"price_type_sale":{"synonym":"Тип прайсовых цен","multiline_mode":false,"tooltip":"Этот тип цен будет использован для расчета отпускной цены продукции. Если указано, значения КМарж и КМарж.мин игнорируются","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"price_type_internal":{"synonym":"Тип цен внутренней продажи","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"В этом поле можно указать произвольный код на языке 1С для расчета (корректировки) себестоимости","choice_params":[{"name":"parent","path":["3220e251-ffcd-11e5-8303-e67fda7f6b46","3220e25b-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"sale_formula":{"synonym":"Формула продажа","multiline_mode":false,"tooltip":"В этом поле можно указать произвольный код на языке 1С для расчета (корректировки) цены продажи","choice_params":[{"name":"parent","path":["3220e251-ffcd-11e5-8303-e67fda7f6b46","3220e25b-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"internal_formula":{"synonym":"Формула внутр","multiline_mode":false,"tooltip":"В этом поле можно указать произвольный код на языке 1С для расчета цены внутренней продажи или заказа поставщику","choice_params":[{"name":"parent","path":["3220e251-ffcd-11e5-8303-e67fda7f6b46","3220e25b-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"external_formula":{"synonym":"Формула внешн.","multiline_mode":false,"tooltip":"В этом поле можно указать произвольный код на языке 1С для расчета внешней (дилерской) цены","choice_params":[{"name":"parent","path":["3220e251-ffcd-11e5-8303-e67fda7f6b46","3220e25b-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"extra_charge_external":{"synonym":"Наценка внешн.","multiline_mode":false,"tooltip":"Наценка внешней (дилерской) продажи по отношению к цене производителя, %. Перекрывается, если указан в лёгклм клиенте","type":{"types":["number"],"digits":5,"fraction":2}},"discount_external":{"synonym":"Скидка внешн.","multiline_mode":false,"tooltip":"Скидка по умолчанию для внешней (дилерской) продажи по отношению к дилерской цене, %. Перекрывается, если указан в лёгклм клиенте","type":{"types":["number"],"digits":5,"fraction":2}},"discount":{"synonym":"Скидка","multiline_mode":false,"tooltip":"Скидка по умолчанию, %","type":{"types":["number"],"digits":5,"fraction":2}}},"attributes":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":200}}},"cachable":"ram","form":{"selection":{"fields":["cat_price_groups.name as price_group","cat_parameters_keys.name as key","cat_formulas.name as condition_formula"],"cols":[{"id":"price_group","width":"*","type":"ro","align":"left","sort":"server","caption":"Ценовая группа"},{"id":"key","width":"*","type":"ro","align":"left","sort":"server","caption":"Ключ параметров"},{"id":"condition_formula","width":"*","type":"ro","align":"left","sort":"server","caption":"Формула условия"}]}}}},"cat":{"meta_objs":{"fields":{}},"meta_fields":{"fields":{}},"scheme_settings":{"name":"scheme_settings","synonym":"Настройки отчетов и списков","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"obj":{"synonym":"Объект","tooltip":"Имя класса метаданных","type":{"types":["string"],"str_len":250}},"user":{"synonym":"Пользователь","tooltip":"Если пусто - публичная настройка","type":{"types":["string"],"str_len":50}},"order":{"synonym":"Порядок","tooltip":"Порядок варианта","type":{"types":["number"],"digits":6,"fraction":0}},"query":{"synonym":"Запрос","tooltip":"Индекс CouchDB или текст SQL","type":{"types":["string"],"str_len":0}},"date_from":{"synonym":"Начало периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"date_till":{"synonym":"Конец периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"standard_period":{"synonym":"Стандартный период","tooltip":"Использование стандартного периода","type":{"types":["enm.standard_period"],"is_ref":true}},"formula":{"synonym":"Формула","tooltip":"Формула инициализации","type":{"types":["cat.formulas"],"is_ref":true}},"output":{"synonym":"Вывод","tooltip":"Вывод результата","type":{"types":["enm.report_output"],"is_ref":true}},"tag":{"synonym":"Дополнительные свойства","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"fields":{"name":"fields","synonym":"Доступные поля","tooltip":"Состав, порядок и ширина колонок","fields":{"parent":{"synonym":"Родитель","tooltip":"Для плоского списка, родитель пустой","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"width":{"synonym":"Ширина","tooltip":"","type":{"types":["string"],"str_len":6}},"caption":{"synonym":"Заголовок","tooltip":"","type":{"types":["string"],"str_len":100}},"tooltip":{"synonym":"Подсказка","tooltip":"","type":{"types":["string"],"str_len":100}},"ctrl_type":{"synonym":"Тип","tooltip":"Тип элемента управления","type":{"types":["enm.data_field_kinds"],"is_ref":true}},"formatter":{"synonym":"Формат","tooltip":"Функция форматирования","type":{"types":["cat.formulas"],"is_ref":true},"choice_params":[{"name":"parent","path":[]}]},"editor":{"synonym":"Редактор","tooltip":"Компонент редактирования","type":{"types":["cat.formulas"],"is_ref":true},"choice_params":[{"name":"parent","path":[]}]}}},"sorting":{"name":"sorting","synonym":"Поля сортировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"direction":{"synonym":"Направление","tooltip":"","type":{"types":["enm.sort_directions"],"is_ref":true}}}},"dimensions":{"name":"dimensions","synonym":"Поля группировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}}}},"resources":{"name":"resources","synonym":"Ресурсы","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"formula":{"synonym":"Формула","tooltip":"По умолчанию - сумма","type":{"types":["cat.formulas"],"is_ref":true}}}},"selection":{"name":"selection","synonym":"Отбор","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"area":{"synonym":"Гр. ИЛИ","tooltip":"Позволяет формировать условия ИЛИ","type":{"types":["number"],"digits":6,"fraction":0}},"left_value":{"synonym":"Левое значение","tooltip":"Путь к данным","type":{"types":["string"],"str_len":1024}},"left_value_type":{"synonym":"Тип слева","tooltip":"Тип значения слева","default":"path","type":{"types":["string"],"str_len":100}},"comparison_type":{"synonym":"Вид сравнения","tooltip":"","type":{"types":["enm.comparison_types"],"is_ref":true}},"right_value":{"synonym":"Правое значение","tooltip":"Значение или путь","type":{"types":["string"],"str_len":1024}},"right_value_type":{"synonym":"Тип справа","tooltip":"Тип значения справа","default":"path","type":{"types":["string"],"str_len":100}}}},"params":{"name":"params","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","tooltip":"","type":{"types":["string"],"str_len":100}},"value_type":{"synonym":"Тип","tooltip":"Тип значения","type":{"types":["string"],"str_len":100}},"value":{"synonym":"Значение","tooltip":"Может иметь примитивный или ссылочный тип или массив","type":{"types":["string","number"],"str_len":0,"digits":15,"fraction":3,"date_part":"date"}},"quick_access":{"synonym":"Быстрый доступ","tooltip":"Размещать на нанели инструментов","type":{"types":["boolean"]}}}},"composition":{"name":"composition","synonym":"Структура","tooltip":"","fields":{"parent":{"synonym":"Родитель","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Элемент","tooltip":"Элемент структуры отчета","type":{"types":["string"],"str_len":50}},"kind":{"synonym":"Вид раздела отчета","tooltip":"список, таблица, группировка строк, группировка колонок","type":{"types":["string"],"str_len":50}},"definition":{"synonym":"Описание","tooltip":"Описание раздела структуры","type":{"types":["string"],"str_len":50}}}},"conditional_appearance":{"name":"conditional_appearance","synonym":"Условное оформление","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"area":{"synonym":"Гр. ИЛИ","tooltip":"Позволяет формировать условия ИЛИ","type":{"types":["number"],"digits":6,"fraction":0}},"left_value":{"synonym":"Левое значение","tooltip":"Путь к данным","type":{"types":["string"],"str_len":1024}},"left_value_type":{"synonym":"Тип слева","tooltip":"Тип значения слева","default":"path","type":{"types":["string"],"str_len":100}},"comparison_type":{"synonym":"Вид сравнения","tooltip":"","type":{"types":["enm.comparison_types"],"is_ref":true}},"right_value":{"synonym":"Правое значение","tooltip":"Значение или путь","type":{"types":["string"],"str_len":1024}},"right_value_type":{"synonym":"Тип справа","tooltip":"Тип значения справа","default":"path","type":{"types":["string"],"str_len":100}},"columns":{"synonym":"Колонки","tooltip":"Список колонок через запятую, к которым будет применено оформление (по умолчанию - ко всей строке)","type":{"types":["string"],"str_len":0}},"css":{"synonym":"Оформление","tooltip":"В синтаксисе css","type":{"types":["string"],"str_len":0}}}}},"cachable":"ram"},"params_links":{"name":"СвязиПараметров","splitted":false,"synonym":"Связи параметров","illustration":"Подчиненные параметры","obj_presentation":"Связь параметров","list_presentation":"Связи параметров","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"master":{"synonym":"Ведущий","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}},"slave":{"synonym":"Ведомый","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"hide":{"synonym":"Скрыть ведомый","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"use_master":{"synonym":"Использование ведущих","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.params_links"],"is_ref":true}}},"tabular_sections":{"leadings":{"name":"Ведущие","synonym":"Ведущие","tooltip":"","fields":{"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}}}},"values":{"name":"Значения","synonym":"Значения","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["slave"]}],"choice_params":[],"choice_type":{"path":["slave"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"forcibly":{"synonym":"Принудительно","multiline_mode":false,"tooltip":"Замещать установленное ранее значение при перевыборе ведущего параметра","type":{"types":["boolean"]}}}}},"cachable":"ram"},"choice_params":{"name":"ПараметрыВыбора","splitted":false,"synonym":"Параметры выбора","illustration":"Для привязки ключей параметров к метаданным","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"Массив условий, добавляемых в параметр выбора","choice_params":[{"name":"applying","path":"ПараметрВыбора"}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.parameters_keys"],"is_ref":true}},"runtime":{"synonym":"Динамический","multiline_mode":false,"tooltip":"Если истина, фильтр будет рассчитываться всякий раз, когда его запросит поле ввода или динсписок. Статический параметр рассчитывается на старте приложения","type":{"types":["boolean"]}},"condition_formula":{"synonym":"Формула условия","multiline_mode":false,"tooltip":"В этом поле можно указать дополнительное условие на языке javascript","choice_params":[{"name":"parent","path":"1cce6b82-73be-11e9-94bb-98d95b9a5346"},{"name":"disabled","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"field":{"synonym":"Поле реквизита","multiline_mode":false,"tooltip":"Ссылка или вложенное поле, на которое накладывается отбор","mandatory":true,"type":{"types":["string"],"str_len":255}},"disabled":{"synonym":"Отключен","multiline_mode":false,"tooltip":"Не использовать данный параметр выбора","type":{"types":["boolean"]}}},"tabular_sections":{"composition":{"name":"Состав","synonym":"Состав","tooltip":"","fields":{"field":{"synonym":"Реквизит","multiline_mode":false,"tooltip":"Полное имя метаданных","mandatory":true,"type":{"types":["string"],"str_len":255}}}}},"cachable":"ram"},"partner_bank_accounts":{"name":"БанковскиеСчетаКонтрагентов","splitted":false,"synonym":"Банковские счета","illustration":"Банковские счета сторонних контрагентов и физических лиц.","obj_presentation":"Банковский счет","list_presentation":"Банковские счета","input_by_string":["name","account_number"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"account_number":{"synonym":"Номер счета","multiline_mode":false,"tooltip":"Номер расчетного счета организации","mandatory":true,"type":{"types":["string"],"str_len":20}},"bank":{"synonym":"Банк","multiline_mode":false,"tooltip":"Банк, в котором открыт расчетный счет организации","choice_groups_elm":"elm","type":{"types":["cat.banks_qualifier"],"is_ref":true}},"settlements_bank":{"synonym":"Банк для расчетов","multiline_mode":false,"tooltip":"Банк, в случае непрямых расчетов","choice_groups_elm":"elm","type":{"types":["cat.banks_qualifier"],"is_ref":true}},"correspondent_text":{"synonym":"Текст корреспондента","multiline_mode":false,"tooltip":"Текст \"Плательщик\\Получатель\" в платежных документах","type":{"types":["string"],"str_len":250}},"appointments_text":{"synonym":"Текст назначения","multiline_mode":false,"tooltip":"Текст назначения платежа","type":{"types":["string"],"str_len":250}},"funds_currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"Валюта учета денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"bank_bic":{"synonym":"БИКБанка","multiline_mode":false,"tooltip":"БИК банка, в котором открыт счет","type":{"types":["string"],"str_len":9}},"bank_name":{"synonym":"Наименование банка","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"bank_correspondent_account":{"synonym":"Корр. счет банк","multiline_mode":false,"tooltip":"Корр.счет банка","type":{"types":["string"],"str_len":20}},"bank_city":{"synonym":"Город банка","multiline_mode":false,"tooltip":"Город банка","type":{"types":["string"],"str_len":50}},"bank_address":{"synonym":"Адрес банка","multiline_mode":false,"tooltip":"Адрес банка","type":{"types":["string"],"str_len":0}},"bank_phone_numbers":{"synonym":"Телефоны банка","multiline_mode":false,"tooltip":"Телефоны банка","type":{"types":["string"],"str_len":0}},"settlements_bank_bic":{"synonym":"БИК банка для расчетов","multiline_mode":false,"tooltip":"БИК банка, в случае непрямых расчетов","type":{"types":["string"],"str_len":9}},"settlements_bank_correspondent_account":{"synonym":"Корр. счет банка для расчетов","multiline_mode":false,"tooltip":"Корр.счет банка, в случае непрямых расчетов","type":{"types":["string"],"str_len":20}},"settlements_bank_city":{"synonym":"Город банка для расчетов","multiline_mode":false,"tooltip":"Город банка, в случае непрямых расчетов","type":{"types":["string"],"str_len":50}},"owner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"Контрагент или физическое лицо, являющиеся владельцем банковского счета","choice_params":[{"name":"is_folder","path":false}],"mandatory":true,"type":{"types":["cat.individuals","cat.partners"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"obj":{"head":{" ":["name","owner","account_number","funds_currency","bank_bic","bank","settlements_bank_bic","settlements_bank"]}}}},"organization_bank_accounts":{"name":"БанковскиеСчетаОрганизаций","splitted":false,"synonym":"Банковские счета организаций","illustration":"Банковские счета собственных организаций. ","obj_presentation":"Банковский счет организации","list_presentation":"Банковские счета","input_by_string":["name","account_number"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"bank":{"synonym":"Банк","multiline_mode":false,"tooltip":"Банк, в котором открыт расчетный счет организации","choice_groups_elm":"elm","type":{"types":["cat.banks_qualifier"],"is_ref":true}},"bank_bic":{"synonym":"БИКБанка","multiline_mode":false,"tooltip":"БИК банка, в котором открыт счет","type":{"types":["string"],"str_len":9}},"funds_currency":{"synonym":"Валюта денежных средств","multiline_mode":false,"tooltip":"Валюта учета денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"account_number":{"synonym":"Номер счета","multiline_mode":false,"tooltip":"Номер расчетного счета организации","mandatory":true,"type":{"types":["string"],"str_len":20}},"settlements_bank":{"synonym":"Банк для расчетов","multiline_mode":false,"tooltip":"Банк, в случае непрямых расчетов","choice_groups_elm":"elm","type":{"types":["cat.banks_qualifier"],"is_ref":true}},"settlements_bank_bic":{"synonym":"БИК банка для расчетов","multiline_mode":false,"tooltip":"БИК банка, в случае непрямых расчетов","type":{"types":["string"],"str_len":9}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"Подразделение, отвечающее за банковский счет","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"owner":{"synonym":"Организация","multiline_mode":false,"tooltip":"Организация, являющиеся владельцем банковского счета","choice_params":[{"name":"is_folder","path":false}],"mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"obj":{"head":{" ":["name","owner","account_number","funds_currency","bank_bic","bank","settlements_bank_bic","settlements_bank"]}}}},"work_center_kinds":{"name":"ВидыРабочихЦентров","splitted":false,"synonym":"Виды рабочих центров","illustration":"","obj_presentation":"Вид рабочего центра","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"applying":{"synonym":"Детализация","multiline_mode":false,"tooltip":"Детализация планирования (до элемента, продукции, заказа...)","choice_params":[{"name":"ref","path":["product","layer","parent","elm","order"]}],"choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"available":{"synonym":"Всегда доступен","multiline_mode":false,"tooltip":"Не учитывать остатки мощностей","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram"},"property_values_hierarchy":{"name":"ЗначенияСвойствОбъектовИерархия","splitted":false,"synonym":"Дополнительные значения (иерархия)","illustration":"","obj_presentation":"Дополнительное значение (иерархия)","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction":2}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Вышестоящее дополнительное значение свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values_hierarchy"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"banks_qualifier":{"name":"КлассификаторБанковРФ","splitted":false,"synonym":"Классификатор банков РФ","illustration":"","obj_presentation":"Банк","list_presentation":"Банки","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"correspondent_account":{"synonym":"Корр. счет","multiline_mode":false,"tooltip":"Корреспондентский счет банка","type":{"types":["string"],"str_len":20}},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город банка","type":{"types":["string"],"str_len":50}},"address":{"synonym":"Адрес","multiline_mode":false,"tooltip":"Адрес банка","type":{"types":["string"],"str_len":500}},"phone_numbers":{"synonym":"Телефоны","multiline_mode":false,"tooltip":"Телефоны банка","type":{"types":["string"],"str_len":250}},"activity_ceased":{"synonym":"Деятельность прекращена","multiline_mode":false,"tooltip":"Банк по каким-либо причинам прекратил свою деятельность","type":{"types":["boolean"]}},"swift":{"synonym":"СВИФТ БИК","multiline_mode":false,"tooltip":"Международный банковский идентификационный код (SWIFT BIC)","type":{"types":["string"],"str_len":11}},"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"Идентификационный номер налогоплательщика","type":{"types":["string"],"str_len":12}},"parent":{"synonym":"Группа банков","multiline_mode":false,"tooltip":"Группа банков, в которую входит данный банк","type":{"types":["cat.banks_qualifier"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"destinations":{"name":"НаборыДополнительныхРеквизитовИСведений","splitted":false,"synonym":"Наборы дополнительных реквизитов и сведений","illustration":"","obj_presentation":"Набор дополнительных реквизитов и сведений","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа, к которой относится набор.","type":{"types":["cat.destinations"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Дополнительный реквизит","multiline_mode":false,"tooltip":"Дополнительный реквизит этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного реквизита из набора,\nчтобы можно было вернуть связь с уникальным дополнительным реквизитом.","type":{"types":["boolean"]}}}},"extra_properties":{"name":"ДополнительныеСведения","synonym":"Дополнительные сведения","tooltip":"","fields":{"property":{"synonym":"Дополнительное сведение","multiline_mode":false,"tooltip":"Дополнительное сведение этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного сведения из набора,\nчтобы можно было вернуть связь с уникальным дополнительным сведением.","type":{"types":["boolean"]}}}}},"cachable":"ram"},"countries":{"name":"СтраныМира","splitted":false,"synonym":"Страны мира","illustration":"","obj_presentation":"Страна мира","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Наименование полное","multiline_mode":false,"tooltip":"Полное наименование страны мира","type":{"types":["string"],"str_len":100}},"alpha2":{"synonym":"Код альфа-2","multiline_mode":false,"tooltip":"Двузначный буквенный код альфа-2 страны по ОКСМ","type":{"types":["string"],"str_len":2}},"alpha3":{"synonym":"Код альфа-3","multiline_mode":false,"tooltip":"Трехзначный буквенный код альфа-3 страны по ОКСМ","type":{"types":["string"],"str_len":3}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram","read_only":true},"formulas":{"name":"Формулы","splitted":false,"synonym":"Формулы","illustration":"Формулы пользователя, для выполнения при расчете спецификаций, модификаторы, вычисляемые свойства","obj_presentation":"Формула","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Текст функции на языке javascript","type":{"types":["string"],"str_len":0}},"leading_formula":{"synonym":"Ведущая формула","multiline_mode":false,"tooltip":"Если указано, выполняется код ведущей формулы с параметрами, заданными для текущей формулы","choice_params":[{"name":"leading_formula","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"condition_formula":{"synonym":"Это формула условия","multiline_mode":false,"tooltip":"Формула используется, как фильтр, а не как алгоритм расчета количества.\nЕсли возвращает не Истина, строка в спецификацию не добавляется","type":{"types":["boolean"]}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Описание в формате html","type":{"types":["string"],"str_len":0}},"template":{"synonym":"Шаблон","multiline_mode":true,"tooltip":"html или jsx шаблон отчета","type":{"types":["string"],"str_len":0}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction":0}},"async":{"synonym":"Асинхронный режим","multiline_mode":false,"tooltip":"Создавать асинхронную функцию","type":{"types":["boolean"]}},"disabled":{"synonym":"Отключена","multiline_mode":false,"tooltip":"Имеет смысл только для печатных форм и модификаторов","type":{"types":["boolean"]}},"context":{"synonym":"Контекст","multiline_mode":false,"tooltip":"Выполнять в браузере, node или везде","type":{"types":["number"],"digits":6,"fraction":0}},"jsx":{"synonym":"JSX","multiline_mode":false,"tooltip":"Транспилировать формулу из шаблона jsx","type":{"types":["boolean"]}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа формул","mandatory":true,"type":{"types":["cat.formulas"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["params","param"]}],"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}}}}},"cachable":"ram"},"elm_visualization":{"name":"пзВизуализацияЭлементов","splitted":false,"synonym":"Визуализация элементов","illustration":"Строки svg для рисования петель, ручек и графических примитивов","obj_presentation":"Визуализация элемента","list_presentation":"Визуализация элементов","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"svg_path":{"synonym":"Путь svg или текст","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"attributes":{"synonym":"Атрибуты","multiline_mode":false,"tooltip":"Дополнительные атрибуты svg path","type":{"types":["string"],"str_len":0}},"rotate":{"synonym":"Поворачивать","multiline_mode":false,"tooltip":"правила поворота эскиза параллельно касательной профиля в точке визуализации\n0 - поворачивать\n1 - ручка","type":{"types":["number"],"digits":1,"fraction":0}},"offset":{"synonym":"Смещение","multiline_mode":false,"tooltip":"Смещение в мм относительно внещнего ребра элемента","type":{"types":["number"],"digits":6,"fraction":0}},"side":{"synonym":"Сторона соедин.","multiline_mode":false,"tooltip":"имеет смысл только для импостов","choice_groups_elm":"elm","type":{"types":["enm.cnn_sides"],"is_ref":true}},"elm_side":{"synonym":"Сторона элем.","multiline_mode":false,"tooltip":"(0) - изнутри, (1) - снаружи, (-1) - в середине элемента","type":{"types":["number"],"digits":1,"fraction":0}},"cx":{"synonym":"cx","multiline_mode":false,"tooltip":"Координата точки привязки","type":{"types":["number"],"digits":6,"fraction":0}},"cy":{"synonym":"cy","multiline_mode":false,"tooltip":"Координата точки привязки","type":{"types":["number"],"digits":6,"fraction":0}},"angle_hor":{"synonym":"Угол к горизонту","multiline_mode":false,"tooltip":"Угол к к горизонту элемента по умолчанию","type":{"types":["number"],"digits":6,"fraction":0}},"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"Группа визуализаций","type":{"types":["number"],"digits":6,"fraction":0}},"mode":{"synonym":"Режим","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"origin":{"synonym":"Навигация","multiline_mode":false,"tooltip":"Навигационная ссылка на изделие или слой","choice_params":[{"name":"ref","path":["product","layer","nearest","elm"]}],"choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"sketch_view":{"name":"ВидНаЭскиз","synonym":"Доступные виды","tooltip":"Доступные виды на эскиз","fields":{"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.sketch_view"],"is_ref":true}}}},"params":{"name":"Параметры","synonym":"Параметры","tooltip":"Параметры для навигации","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}}}}},"cachable":"ram"},"branches":{"name":"ИнтеграцияОтделыАбонентов","splitted":false,"synonym":"Отделы абонентов","illustration":"","obj_presentation":"Отдел абонента","list_presentation":"","input_by_string":["name","suffix"],"hierarchical":true,"group_hierarchy":false,"main_presentation_name":true,"code_length":11,"fields":{"suffix":{"synonym":"Суффикс CouchDB","multiline_mode":false,"tooltip":"Для разделения данных в CouchDB","mandatory":true,"type":{"types":["string"],"str_len":4}},"lang":{"synonym":"Язык","multiline_mode":false,"tooltip":"Язык интерфейса пользователя","type":{"types":["string"],"str_len":2,"str_fix":true}},"direct":{"synonym":"Direct","multiline_mode":false,"tooltip":"Для пользователя запрещен режим offline","type":{"types":["boolean"]}},"use":{"synonym":"Используется","multiline_mode":false,"tooltip":"Использовать данный отдел при создании баз и пользователей","type":{"types":["boolean"]}},"no_mdm":{"synonym":"NoMDM","multiline_mode":false,"tooltip":"Отключить MDM для данного отдела (напрмиер, если это dev-база)","type":{"types":["boolean"]}},"no_partners":{"synonym":"NoPartners","multiline_mode":false,"tooltip":"Не использовать фильтр по контрагенту в репликации (только по подразделению)","type":{"types":["boolean"]}},"no_divisions":{"synonym":"NoDivisions","multiline_mode":false,"tooltip":"Не использовать фильтр по подразделению в репликации (только по контрагенту)","type":{"types":["boolean"]}},"parent":{"synonym":"Ведущий отдел","multiline_mode":false,"tooltip":"Заполняется в случае иерархической репликации","type":{"types":["cat.branches"],"is_ref":true}}},"tabular_sections":{"organizations":{"name":"Организации","synonym":"Организации","tooltip":"Организации, у которых дилер может заказывать продукцию и услуги","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"partners":{"name":"Контрагенты","synonym":"Контрагенты","tooltip":"Юридические лица дилера, от имени которых он оформляет заказы","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"divisions":{"name":"Подразделения","synonym":"Подразделения","tooltip":"Подразделения, к данным которых, дилеру предоставлен доступ","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"price_types":{"name":"ТипыЦен","synonym":"Типы цен","tooltip":"Типы цен, привязанные к дилеру","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}}}},"keys":{"name":"Ключи","synonym":"Ключи","tooltip":"Ключи параметров, привязанные к дилеру","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.parameters_keys"],"is_ref":true}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"ram"},"currencies":{"name":"Валюты","splitted":false,"synonym":"Валюты","illustration":"Валюты, используемые при расчетах","obj_presentation":"Валюта","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Наименование валюты","multiline_mode":false,"tooltip":"Полное наименование валюты","mandatory":true,"type":{"types":["string"],"str_len":50}},"extra_charge":{"synonym":"Наценка","multiline_mode":false,"tooltip":"Коэффициент, который применяется к курсу основной валюты для вычисления курса текущей валюты.","type":{"types":["number"],"digits":10,"fraction":2}},"main_currency":{"synonym":"Основная валюта","multiline_mode":false,"tooltip":"Валюта, на основании курса которой рассчитывается курс текущей валюты","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"parameters_russian_recipe":{"synonym":"Параметры прописи на русском","multiline_mode":false,"tooltip":"Параметры прописи валюты на русском языке","type":{"types":["string"],"str_len":200}}},"tabular_sections":{},"cachable":"ram","form":{"selection":{"fields":["ref","_deleted","id","name as presentation","name_full"],"cols":[{"id":"id","width":"120","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Обозначение"},{"id":"name_full","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"}]},"obj":{"head":{" ":["id","name","name_full","parameters_russian_recipe"],"Дополнительно":["main_currency","extra_charge"]},"tabular_sections":{},"tabular_sections_order":[]}}},"contact_information_kinds":{"name":"ВидыКонтактнойИнформации","splitted":false,"synonym":"Виды контактной информации","illustration":"","obj_presentation":"Вид контактной информации","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"mandatory_fields":{"synonym":"Обязательное заполнение","multiline_mode":false,"tooltip":"Вид контактной информации обязателен к заполнению","type":{"types":["boolean"]}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (адрес, телефон и т.д.)","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.contact_information_types"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа вида контактной информации","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"nom_kinds":{"name":"ВидыНоменклатуры","splitted":false,"synonym":"Виды номенклатуры","illustration":"","obj_presentation":"Вид номенклатуры","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"nom_type":{"synonym":"Тип номенклатуры","multiline_mode":false,"tooltip":"Указывается тип, к которому относится номенклатура данного вида.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.nom_types"],"is_ref":true}},"dnom":{"synonym":"Набор свойств номенклатура","multiline_mode":false,"tooltip":"Набор свойств, которым будет обладать номенклатура с этим видом","choice_groups_elm":"elm","type":{"types":["cat.destinations"],"is_ref":true}},"dcharacteristic":{"synonym":"Набор свойств характеристика","multiline_mode":false,"tooltip":"Набор свойств, которым будет обладать характеристика с этим видом","choice_groups_elm":"elm","type":{"types":["cat.destinations"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"contracts":{"name":"ДоговорыКонтрагентов","splitted":false,"synonym":"Договоры контрагентов","illustration":"Перечень договоров, заключенных с контрагентами","obj_presentation":"Договор контрагента","list_presentation":"Договоры контрагентов","input_by_string":["name","id"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"settlements_currency":{"synonym":"Валюта взаиморасчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"mutual_settlements":{"synonym":"Ведение взаиморасчетов","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.mutual_contract_settlements"],"is_ref":true}},"contract_kind":{"synonym":"Вид договора","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.contract_kinds"],"is_ref":true}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"check_days_without_pay":{"synonym":"Держать резерв без оплаты ограниченное время","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"allowable_debts_amount":{"synonym":"Допустимая сумма дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"allowable_debts_days":{"synonym":"Допустимое число дней дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"check_debts_amount":{"synonym":"Контролировать сумму дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"check_debts_days":{"synonym":"Контролировать число дней дебиторской задолженности","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"number_doc":{"synonym":"Номер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}},"main_cash_flow_article":{"synonym":"Основная статья движения денежных средств","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"main_project":{"synonym":"Основной проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"accounting_reflect":{"synonym":"Отражать в бухгалтерском учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"tax_accounting_reflect":{"synonym":"Отражать в налоговом учете","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"prepayment_percent":{"synonym":"Процент предоплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"validity":{"synonym":"Срок действия договора","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"vat_included":{"synonym":"Сумма включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"price_type":{"synonym":"Тип цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"vat_consider":{"synonym":"Учитывать НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"days_without_pay":{"synonym":"Число дней резерва без оплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"owner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_folder","path":false}],"mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}},"parent":{"synonym":"Группа договоров","multiline_mode":false,"tooltip":"","type":{"types":["cat.contracts"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"selection":{"fields":["is_folder","id","_t_.name as presentation","enm_contract_kinds.synonym as contract_kind","enm_mutual_settlements.synonym as mutual_settlements","cat_organizations.name as organization","cat_partners.name as partner"],"cols":[{"id":"partner","width":"180","type":"ro","align":"left","sort":"server","caption":"Контрагент"},{"id":"organization","width":"180","type":"ro","align":"left","sort":"server","caption":"Организация"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"},{"id":"contract_kind","width":"150","type":"ro","align":"left","sort":"server","caption":"Вид договора"},{"id":"mutual_settlements","width":"150","type":"ro","align":"left","sort":"server","caption":"Ведение расчетов"}]},"obj":{"head":{" ":[{"id":"id","path":"o.id","synonym":"Код","type":"ro"},"parent","name","number_doc","date","validity","owner","organization","contract_kind","mutual_settlements","settlements_currency"],"Дополнительно":["accounting_reflect","tax_accounting_reflect","vat_consider","vat_included","price_type","main_project","main_cash_flow_article","check_debts_amount","check_debts_days","check_days_without_pay","prepayment_percent","allowable_debts_amount","allowable_debts_days","note"]}}}},"nom_units":{"name":"ЕдиницыИзмерения","splitted":false,"synonym":"Единицы измерения","illustration":"Перечень единиц измерения номенклатуры и номенклатурных групп","obj_presentation":"Единица измерения","list_presentation":"Единицы измерения","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"qualifier_unit":{"synonym":"Единица по классификатору","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.units"],"is_ref":true}},"heft":{"synonym":"Вес","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"volume":{"synonym":"Объем","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":3}},"rounding_threshold":{"synonym":"Порог округления","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"owner":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom_groups","cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"property_values":{"name":"ЗначенияСвойствОбъектов","splitted":false,"synonym":"Дополнительные значения","illustration":"","obj_presentation":"Дополнительное значение","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction":2}},"css":{"synonym":"Класс css","multiline_mode":false,"tooltip":"css класс картинки значения - для оживления списков выбора","type":{"types":["string"],"str_len":50}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа дополнительных значений свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"meta_ids":{"name":"ИдентификаторыОбъектовМетаданных","splitted":false,"synonym":"Идентификаторы объектов метаданных","illustration":"Идентификаторы объектов метаданных для использования в базе данных.","obj_presentation":"Идентификатор объекта метаданных","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"full_moniker":{"synonym":"Полное имя","multiline_mode":false,"tooltip":"Полное имя объекта метаданных","type":{"types":["string"],"str_len":430}},"parent":{"synonym":"Группа объектов","multiline_mode":false,"tooltip":"Группа объектов метаданных.","type":{"types":["cat.meta_ids"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"cashboxes":{"name":"Кассы","splitted":false,"synonym":"Кассы","illustration":"Список мест фактического хранения и движения наличных денежных средств предприятия. Кассы разделены по организациям и валютам денежных средств. ","obj_presentation":"Касса","list_presentation":"Кассы предприятия","input_by_string":["name","id"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"funds_currency":{"synonym":"Валюта денежных средств","multiline_mode":false,"tooltip":"Валюта учета денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"Подразделение, отвечающее за кассу.","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"current_account":{"synonym":"Расчетный счет","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"choice_groups_elm":"elm","type":{"types":["cat.organization_bank_accounts"],"is_ref":true}},"owner":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_folder","path":false}],"mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"obj":{"head":{" ":[{"id":"id","path":"o.id","synonym":"Код","type":"ro"},"name","owner","funds_currency"]}}}},"units":{"name":"КлассификаторЕдиницИзмерения","splitted":false,"synonym":"Классификатор единиц измерения","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"international_short":{"synonym":"Международное сокращение","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":3}}},"tabular_sections":{},"cachable":"ram"},"partners":{"name":"Контрагенты","splitted":false,"synonym":"Контрагенты","illustration":"Список юридических или физических лиц клиентов (поставщиков, покупателей).","obj_presentation":"Контрагент","list_presentation":"Контрагенты","input_by_string":["name","id","inn"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"name_full":{"synonym":"Полное наименование","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"main_bank_account":{"synonym":"Основной банковский счет","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.partner_bank_accounts"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"kpp":{"synonym":"КПП","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":9}},"ogrn":{"synonym":"ОГРН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":15}},"okpo":{"synonym":"Код по ОКПО","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"individual_legal":{"synonym":"Юр. / физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.individual_legal"],"is_ref":true}},"main_contract":{"synonym":"Основной договор контрагента","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"identification_document":{"synonym":"Документ, удостоверяющий личность","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"buyer_main_manager":{"synonym":"Основной менеджер покупателя","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"is_buyer":{"synonym":"Покупатель","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"is_supplier":{"synonym":"Поставщик","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"primary_contact":{"synonym":"Основное контактное лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"parent":{"synonym":"Группа контрагентов","multiline_mode":false,"tooltip":"","type":{"types":["cat.partners"],"is_ref":true}}},"tabular_sections":{"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":"139d49b9-5301-45f3-b851-4488420d7d15"}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0},"hide":true},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100},"hide":true},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"email_address":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100},"hide":true},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20},"hide":true},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20},"hide":true}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0},"hide":true}}}},"cachable":"ram","form":{"obj":{"head":{" ":[{"id":"id","path":"o.id","synonym":"Код","type":"ro"},"parent","name","name_full","is_buyer","is_supplier","individual_legal","inn","kpp","okpo","main_bank_account","main_contract","primary_contact","buyer_main_manager"],"Дополнительные реквизиты":[]},"tabular_sections":{"contact_information":{"fields":["kind","presentation"],"headers":"Вид,Представление","widths":"200,*","min_widths":"100,200","aligns":"","sortings":"na,na","types":"ref,txt"}},"tabular_sections_order":["contact_information"]}}},"nom":{"name":"Номенклатура","splitted":false,"synonym":"Номенклатура","illustration":"Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг","obj_presentation":"Позиция номенклатуры","list_presentation":"","input_by_string":["name","id","article"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"article":{"synonym":"Артикул ","multiline_mode":false,"tooltip":"Артикул номенклатуры","type":{"types":["string"],"str_len":32}},"name_full":{"synonym":"Наименование для печати","multiline_mode":true,"tooltip":"Наименование номенклатуры, которое будет печататься во всех документах.","type":{"types":["string"],"str_len":1024}},"base_unit":{"synonym":"Базовая единица измерения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.units"],"is_ref":true}},"storage_unit":{"synonym":"Единица хранения остатков","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"nom_kind":{"synonym":"Вид номенклатуры","multiline_mode":false,"tooltip":"Определяет состав дополнительных реквизитов","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_kinds"],"is_ref":true}},"nom_group":{"synonym":"Номенклатурная группа","multiline_mode":false,"tooltip":"Определяет счета учета и выступает разрезом в расчете себестоимости","choice_groups_elm":"elm","type":{"types":["cat.nom_groups"],"is_ref":true}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"Для подстановки в документы","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.vat_rates"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"price_group":{"synonym":"Ценовая группа","multiline_mode":false,"tooltip":"Актуально для продукций","choice_groups_elm":"elm","type":{"types":["cat.price_groups"],"is_ref":true}},"elm_type":{"synonym":"Тип элемента: рама, створка и т.п.","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}},"len":{"synonym":"Длина - L","multiline_mode":false,"tooltip":"Длина стандартной загатовки, мм","type":{"types":["number"],"digits":8,"fraction":2}},"width":{"synonym":"Ширина - A","multiline_mode":false,"tooltip":"Ширина стандартной загатовки, мм","type":{"types":["number"],"digits":8,"fraction":2}},"thickness":{"synonym":"Толщина - T","multiline_mode":false,"tooltip":"Если указан svg визуализации, толщина берётся из чертежа, если не указан - из этого поля","type":{"types":["number"],"digits":8,"fraction":2}},"sizefurn":{"synonym":"Размер фурн. паза - D","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"sizefaltz":{"synonym":"Размер фальца - F","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"density":{"synonym":"Плотность, кг / ед. хранения","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"volume":{"synonym":"Объем, м³ / ед. хранения","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"arc_elongation":{"synonym":"Удлинение арки","multiline_mode":false,"tooltip":"Этот размер будет добавлен изогнутым элементам","type":{"types":["number"],"digits":8,"fraction":2}},"sizeb":{"synonym":"Размер до опоры - B","multiline_mode":false,"tooltip":"Имеет смысл только для вставок с вычисляемым размером \"B\" по номенклатуре","type":{"types":["number"],"digits":8,"fraction":2}},"loss_factor":{"synonym":"Коэффициент потерь","multiline_mode":false,"tooltip":"Плановый коэффициент потерь (обрезь, усушка)","type":{"types":["number"],"digits":6,"fraction":4}},"rounding_quantity":{"synonym":"Округлять количество","multiline_mode":false,"tooltip":"При расчете спецификации построителя, как в функции Окр(). 1: до десятых долей,  0: до целых, -1: до десятков","type":{"types":["number"],"digits":1,"fraction":0}},"clr":{"synonym":"Цвет по умолчанию","multiline_mode":false,"tooltip":"Цвет материала по умолчанию. Актуально для заполнений, которые берём НЕ из системы","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"cutting_optimization_type":{"synonym":"Тип оптимизации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.cutting_optimization_types"],"is_ref":true}},"saw_width":{"synonym":"Ширина пилы, мм.","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"overmeasure":{"synonym":"Припуск в раскрое, мм","multiline_mode":false,"tooltip":"Оставлять на хлысте припуск (мм) для захвата станком","type":{"types":["number"],"digits":8,"fraction":2}},"double_cut":{"synonym":"Парный раскрой","multiline_mode":false,"tooltip":"0, 1 - одиночный.\n2 - парный","type":{"types":["number"],"digits":1,"fraction":0}},"alp1":{"synonym":"Угол: Типовой угол реза","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"wsnip_min":{"synonym":"Длина плохого обрезка min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"wsnip_max":{"synonym":"Длина плохого обрезка max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"packing":{"synonym":"Нормоупаковка","multiline_mode":false,"tooltip":"Коэффициент нормоураковки (N единиц хранения остатков)","type":{"types":["number"],"digits":8,"fraction":2}},"pricing":{"synonym":"","multiline_mode":false,"tooltip":"Дополнительная формула расчета цены на случай, когда не хватает возможностей стандартной подисистемы","choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"visualization":{"synonym":"Визуализация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.elm_visualization"],"is_ref":true}},"complete_list_sorting":{"synonym":"Сортировка в листе комплектации","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction":0}},"is_accessory":{"synonym":"Это аксессуар","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"is_procedure":{"synonym":"Это техоперация","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"is_service":{"synonym":"Это услуга","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"is_pieces":{"synonym":"Штуки","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа, в которую входит данная позиция номенклатуры.","type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0},"hide":true}}},"demand":{"name":"Потребность","synonym":"Потребность","tooltip":"Виды рабочих центров для целей планирования","fields":{"kind":{"synonym":"Вид РЦ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.work_center_kinds"],"is_ref":true}},"days_from_execution":{"synonym":"Дней от готовности","multiline_mode":false,"tooltip":"Обратный отсчет. Когда надо запустить в работу в цехе. Должно иметь значение <= ДнейДоГотовности","type":{"types":["number"],"digits":6,"fraction":0}},"days_to_execution":{"synonym":"Дней до готовности","multiline_mode":false,"tooltip":"Если номенклатура есть в спецификации, плановая готовность отодвигается на N дней","type":{"types":["number"],"digits":6,"fraction":0}}}},"colors":{"name":"Цвета","synonym":"Цвета","tooltip":"Коды в разрезе цветов","fields":{"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"id":{"synonym":"Код","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"article":{"synonym":"Артикул ","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"name":{"synonym":"Наименование н+х","multiline_mode":false,"tooltip":"Наименование ключа \"Номенклатура + Характеристика\"","type":{"types":["string"],"str_len":100}},"packing":{"synonym":"Нормоупаковка","multiline_mode":false,"tooltip":"Коэффициент нормоураковки (N единиц хранения остатков)","type":{"types":["number"],"digits":8,"fraction":2}},"len":{"synonym":"Длина - L","multiline_mode":false,"tooltip":"Длина стандартной загатовки, мм","type":{"types":["number"],"digits":8,"fraction":2}}}}},"cachable":"ram","form":{"selection":{"fields":[],"cols":[{"id":"id","width":"140","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"article","width":"150","type":"ro","align":"left","sort":"server","caption":"Артикул"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"},{"id":"nom_unit","width":"70","type":"ro","align":"left","sort":"server","caption":"Ед"},{"id":"thickness","width":"70","type":"ro","align":"left","sort":"server","caption":"Толщина"}]}}},"organizations":{"name":"Организации","splitted":false,"synonym":"Организации","illustration":"","obj_presentation":"Организация","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"prefix":{"synonym":"Префикс","multiline_mode":false,"tooltip":"Используется при нумерации документов. В начало каждого номера документов данной организации добавляется символы префикса.","type":{"types":["string"],"str_len":3}},"individual_legal":{"synonym":"Юр. / физ. лицо","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.individual_legal"],"is_ref":true}},"individual_entrepreneur":{"synonym":"Индивидуальный предприниматель","multiline_mode":false,"tooltip":"Ссылка на физлицо, если данная организация, является ИП","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"Идентификационный номер налогоплательщика","type":{"types":["string"],"str_len":12}},"kpp":{"synonym":"КПП","multiline_mode":false,"tooltip":"Код причины постановки на учет","type":{"types":["string"],"str_len":9}},"ogrn":{"synonym":"ОГРН","multiline_mode":false,"tooltip":"Основной государственный регистрационный номер","type":{"types":["string"],"str_len":15}},"main_bank_account":{"synonym":"Основной банковский счет","multiline_mode":false,"tooltip":"Основной банковский счет организации","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.organization_bank_accounts"],"is_ref":true}},"main_cashbox":{"synonym":"Основноая касса","multiline_mode":false,"tooltip":"Основноая касса организации","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"certificate_series_number":{"synonym":"Серия и номер свидетельства о постановке на учет","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"certificate_date_issue":{"synonym":"Дата выдачи свидетельства о постановке на учет","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"certificate_authority_name":{"synonym":"Наименование налогового органа, выдавшего свидетельство","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":254}},"certificate_authority_code":{"synonym":"Код налогового органа, выдавшего свидетельство","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"chief":{"synonym":"Руководитель","multiline_mode":false,"tooltip":"Руководитель организации","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.organizations"],"is_ref":true}}},"tabular_sections":{"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":"c34c4e9d-c7c5-42bb-8def-93ecfe7b1977"}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0},"hide":true},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100},"hide":true},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"email_address":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100},"hide":true},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20},"hide":true},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20},"hide":true},"list_view":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"act_from":{"synonym":"Действует С","multiline_mode":false,"tooltip":"Дата актуальности контактная информация","type":{"types":["date"],"date_part":"date"}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0},"hide":true}}}},"cachable":"ram","form":{"obj":{"head":{" ":[{"id":"id","path":"o.id","synonym":"Код","type":"ro"},{"id":"prefix","path":"o.prefix","synonym":"Префикс","type":"ro"},"name","individual_legal","individual_entrepreneur","main_bank_account","main_cashbox"],"Коды":["inn","kpp","certificate_series_number","certificate_date_issue","certificate_authority_name","certificate_authority_code"]},"tabular_sections":{"contact_information":{"fields":["kind","presentation"],"headers":"Вид,Представление","widths":"200,*","min_widths":"100,200","aligns":"","sortings":"na,na","types":"ref,txt"}},"tabular_sections_order":["contact_information"]}}},"inserts":{"name":"Вставки","splitted":false,"synonym":"Вставки","illustration":"Армирование, пленки, вставки - дополнение спецификации, которое зависит от одного элемента","obj_presentation":"Вставка","list_presentation":"Вставки","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"article":{"synonym":"Артикул ","multiline_mode":false,"tooltip":"Для формулы","type":{"types":["string"],"str_len":100}},"insert_type":{"synonym":"Тип вставки","multiline_mode":false,"tooltip":"Используется, как фильтр в интерфейсе, плюс, от типа вставки могут зависеть алгоритмы расчета количеств и углов","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.inserts_types"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"Вставку можно использовать для элементов с этим цветом","choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"lmin":{"synonym":"X min","multiline_mode":false,"tooltip":"X min (длина или ширина)","type":{"types":["number"],"digits":6,"fraction":0}},"lmax":{"synonym":"X max","multiline_mode":false,"tooltip":"X max (длина или ширина)","type":{"types":["number"],"digits":6,"fraction":0}},"hmin":{"synonym":"Y min","multiline_mode":false,"tooltip":"Y min (высота)","type":{"types":["number"],"digits":6,"fraction":0}},"hmax":{"synonym":"Y max","multiline_mode":false,"tooltip":"Y max (высота)","type":{"types":["number"],"digits":6,"fraction":0}},"smin":{"synonym":"S min","multiline_mode":false,"tooltip":"Площадь min","type":{"types":["number"],"digits":8,"fraction":3}},"smax":{"synonym":"S max","multiline_mode":false,"tooltip":"Площадь max","type":{"types":["number"],"digits":8,"fraction":3}},"for_direct_profile_only":{"synonym":"Для прямых","multiline_mode":false,"tooltip":"Использовать только для прямых профилей (1), только для кривых (-1) или всегда(0)","type":{"types":["number"],"digits":1,"fraction":0}},"ahmin":{"synonym":"α min","multiline_mode":false,"tooltip":"AH min (угол к горизонтали)","type":{"types":["number"],"digits":8,"fraction":2}},"ahmax":{"synonym":"α max","multiline_mode":false,"tooltip":"AH max (угол к горизонтали)","type":{"types":["number"],"digits":8,"fraction":2}},"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"Не используется","type":{"types":["number"],"digits":6,"fraction":0}},"mmin":{"synonym":"Масса min","multiline_mode":false,"tooltip":"M min (масса)","type":{"types":["number"],"digits":6,"fraction":0}},"mmax":{"synonym":"Масса max","multiline_mode":false,"tooltip":"M max (масса)","type":{"types":["number"],"digits":6,"fraction":0}},"can_rotate":{"synonym":"Можно поворачивать","multiline_mode":false,"tooltip":"Используется при контроле размеров","type":{"types":["boolean"]}},"sizeb":{"synonym":"Размер \"B\"","multiline_mode":false,"tooltip":"Можно указать\n- размер в мм\n- половину ширины номенклатуры элемента\n- \"B\" из номенклатуры элемента\n- пару чисел [для импоста]/[для рамы], когда одна вставка используется в разных положениях","type":{"types":["number"],"digits":8,"fraction":2}},"clr_group":{"synonym":"Доступность цветов","multiline_mode":false,"tooltip":"Если указано, выбор цветов будет ограничен этой группой","choice_params":[{"name":"color_price_group_destination","path":"ДляОграниченияДоступности"}],"choice_groups_elm":"elm","type":{"types":["cat.color_price_groups"],"is_ref":true}},"is_order_row":{"synonym":"Это строка заказа","multiline_mode":false,"tooltip":"Если заполнено, строка будет добавлена в заказ, а не в спецификацию текущей продукции","choice_groups_elm":"elm","type":{"types":["cat.formulas","enm.specification_order_row_types"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Расширенное описание в markdown","type":{"types":["string"],"str_len":0}},"insert_glass_type":{"synonym":"Тип вставки стп","multiline_mode":false,"tooltip":"Тип вставки стеклопакета - используется в составных и в привязках вставок","choice_groups_elm":"elm","type":{"types":["enm.inserts_glass_types"],"is_ref":true}},"available":{"synonym":"Доступна в интерфейсе","multiline_mode":false,"tooltip":"Показывать эту вставку в списках допвставок в элемент, изделие и контур","type":{"types":["boolean"]}},"slave":{"synonym":"Ведомая","multiline_mode":false,"tooltip":"Выполнять пересчет спецификации этой вставки при изменении других строк заказа (например, спецификация монтажа)","type":{"types":["boolean"]}},"is_supplier":{"synonym":"Поставщик","multiline_mode":false,"tooltip":"Если указано, вставка формирует уникальную характеристику и получает цену через API поставщика","choice_groups_elm":"elm","type":{"types":["cat.http_apis"],"is_ref":true}},"region":{"synonym":"Ряд по умолчанию","multiline_mode":false,"tooltip":"Для вставок в ряды связок - актуально для витражных и прочих составных конструкций","type":{"types":["number"],"digits":1,"fraction":0}},"split_type":{"synonym":"Тип деления","multiline_mode":false,"tooltip":"Тип деления по умолчанию","choice_groups_elm":"elm","type":{"types":["enm.lay_split_types","string"],"is_ref":true,"str_len":512}},"pair":{"synonym":"Пара","multiline_mode":false,"tooltip":"Вставка соседней раскладки","choice_params":[{"name":"insert_type","path":"Профиль"}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"lay_split_types":{"synonym":"Единственный тип деления","multiline_mode":false,"tooltip":"Запретить изменять тип деления","type":{"types":["boolean"]}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"specification":{"name":"Спецификация","synonym":"Спецификация","tooltip":"","fields":{"elm":{"synonym":"№","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.inserts","cat.nom"],"is_ref":true}},"algorithm":{"synonym":"Алгоритм","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.predefined_formulas"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["specification","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"},{"name":"color_price_group_destination","path":"ДляХарактеристик"}],"choice_groups_elm":"elm","type":{"types":["cat.color_price_groups","cat.formulas","cat.clrs"],"is_ref":true,"default":"cat.clrs"}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":8}},"sz":{"synonym":"Размер","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"coefficient":{"synonym":"Коэфф.","multiline_mode":false,"tooltip":"коэффициент (кол-во комплектующего на 1мм профиля или 1м² заполнения)","type":{"types":["number"],"digits":14,"fraction":8}},"angle_calc_method":{"synonym":"Расчет угла","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.angle_calculating_ways"],"is_ref":true}},"count_calc_method":{"synonym":"Расчет колич.","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.count_calculating_ways"],"is_ref":true}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","choice_params":[{"name":"parent","path":["3220e24b-ffcd-11e5-8303-e67fda7f6b46","3220e251-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"lmin":{"synonym":"Длина min","multiline_mode":false,"tooltip":"Минимальная длина или ширина","type":{"types":["number"],"digits":6,"fraction":0}},"lmax":{"synonym":"Длина max","multiline_mode":false,"tooltip":"Максимальная длина или ширина","type":{"types":["number"],"digits":6,"fraction":0}},"ahmin":{"synonym":"Угол min","multiline_mode":false,"tooltip":"Минимальный угол к горизонтали","type":{"types":["number"],"digits":8,"fraction":2}},"ahmax":{"synonym":"Угол max","multiline_mode":false,"tooltip":"Максимальный угол к горизонтали","type":{"types":["number"],"digits":8,"fraction":2}},"smin":{"synonym":"S min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":3}},"smax":{"synonym":"S max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":3}},"rmin":{"synonym":"Радиус min","multiline_mode":false,"tooltip":"Минимальный радиус","type":{"types":["number"],"digits":6,"fraction":0}},"rmax":{"synonym":"Радиус max","multiline_mode":false,"tooltip":"Максимальный радиус","type":{"types":["number"],"digits":6,"fraction":0}},"for_direct_profile_only":{"synonym":"Для прямых","multiline_mode":false,"tooltip":"Использовать только для прямых профилей (1), только для кривых (-1) или всегда(0)","type":{"types":["number"],"digits":1,"fraction":0}},"step":{"synonym":"Шаг","multiline_mode":false,"tooltip":"Шаг (расчет по точкам)","type":{"types":["number"],"digits":10,"fraction":3}},"step_angle":{"synonym":"Угол шага","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"offsets":{"synonym":"Отступы шага / длина мmax","multiline_mode":false,"tooltip":"Для способа расчёта \"По шагам\", задаёт отступы. В остальных случаях, ограничивает длину max","type":{"types":["number"],"digits":10,"fraction":3}},"do_center":{"synonym":"↔","multiline_mode":false,"tooltip":"Положение от края или от центра","type":{"types":["boolean"]}},"attrs_option":{"synonym":"Направления","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.inset_attrs_options"],"is_ref":true}},"is_order_row":{"synonym":"Это строка заказа","multiline_mode":false,"tooltip":"Если заполнено, строка будет добавлена в заказ, а не в спецификацию текущей продукции","choice_groups_elm":"elm","type":{"types":["cat.formulas","enm.specification_order_row_types"],"is_ref":true}},"is_main_elm":{"synonym":"Это основной элемент","multiline_mode":false,"tooltip":"Для профильных вставок определяет номенклатуру, размеры которой будут использованы при построении эскиза","type":{"types":["boolean"]}}}},"selection_params":{"name":"ПараметрыОтбора","synonym":"Параметры отбора","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"area":{"synonym":"Гр. ИЛИ","multiline_mode":false,"tooltip":"Позволяет формировать условия ИЛИ","type":{"types":["number"],"digits":6,"fraction":0}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"origin":{"synonym":"Источник","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"comparison_type":{"synonym":"Вид сравнения","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["gt","gte","lt","lte","eq","ne","in","nin","inh","ninh"]}],"choice_groups_elm":"elm","type":{"types":["enm.comparison_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["comparison_type"],"path":["selection_params","comparison_type"]},{"name":["selection","owner"],"path":["selection_params","param"]},{"name":["txt_row"],"path":["selection_params","txt_row"]}],"choice_type":{"path":["selection_params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового реквизита либо сериализация списочного значения","type":{"types":["string"],"str_len":0}}}},"product_params":{"name":"ПараметрыИзделия","synonym":"Параметры изделия","tooltip":"Значения по умолчанию (для параметрических изделий)","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["product_params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["product_params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"hide":{"synonym":"Скрыть","multiline_mode":false,"tooltip":"Не показывать строку параметра в диалоге свойств изделия","type":{"types":["boolean"]}},"forcibly":{"synonym":"Принудительно","multiline_mode":false,"tooltip":"Замещать установленное ранее значение при перевыборе системы","type":{"types":["boolean"]}},"pos":{"synonym":"Расположение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.elm_positions"],"is_ref":true}},"list":{"synonym":"Дискретный ряд","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":250}}}},"inserts":{"name":"Вставки","synonym":"Доп. вставки","tooltip":"Дополнительные рекомендуемые вставки в элемент","fields":{"inset":{"synonym":"Рекомендуемая доп. вставка","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":["Элемент","Профиль"]}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}}}}},"cachable":"ram","form":{"selection":{"fields":[],"cols":[{"id":"id","width":"140","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"insert_type","width":"200","type":"ro","align":"left","sort":"server","caption":"Тип вставки"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"}]},"obj":{"head":{" ":["id","name","insert_type","sizeb","clr","clr_group","is_order_row","priority"],"Дополнительно":["lmin","lmax","hmin","hmax","smin","smax","ahmin","ahmax","mmin","mmax","for_direct_profile_only","impost_fixation","shtulp_fixation","can_rotate"]},"tabular_sections":{"specification":{"fields":["nom","clr","quantity","sz","coefficient","angle_calc_method","count_calc_method","formula","is_order_row","is_main_elm","lmin","lmax","ahmin","ahmax","smin","smax"],"headers":"Номенклатура,Цвет,Колич.,Размер,Коэфф.,Расч.угла,Расч.колич.,Формула,↑ В заказ,Осн. мат.,Длина min,Длина max,Угол min,Угол max,S min, S max","widths":"*,160,100,100,100,140,140,160,80,80,100,100,100,100,100,100","min_widths":"200,160,100,100,100,140,140,160,140,80,100,100,100,100,100,100","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na","types":"ref,ref,calck,calck,calck,ref,ref,ref,ref,ch,calck,calck,calck,calck,calck,calck"}},"tabular_sections_order":["specification"]}}},"parameters_keys":{"name":"КлючиПараметров","splitted":false,"synonym":"Ключи параметров","illustration":"Списки пар {Параметр:Значение} для фильтрации в подсистемах формирования спецификаций, планировании и ценообразовании\n","obj_presentation":"Ключ параметров","list_presentation":"Ключи параметров","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания","type":{"types":["number"],"digits":5,"fraction":0}},"applying":{"synonym":"Применение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.parameters_keys_applying"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.parameters_keys"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"area":{"synonym":"Гр. ИЛИ","multiline_mode":false,"tooltip":"Позволяет формировать условия ИЛИ","type":{"types":["number"],"digits":6,"fraction":0}},"origin":{"synonym":"Источник","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["product","layer","nearest","parent","elm","order"]}],"choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"comparison_type":{"synonym":"Вид сравнения","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["gt","gte","lt","lte","eq","ne","in","nin","inh","ninh"]}],"choice_groups_elm":"elm","type":{"types":["enm.comparison_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["comparison_type"],"path":["params","comparison_type"]},{"name":["selection","owner"],"path":["params","property"]},{"name":["txt_row"],"path":["params","txt_row"]}],"choice_type":{"path":["params","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового реквизита либо сериализация списочного значения","type":{"types":["string"],"str_len":0}}}}},"cachable":"ram"},"production_params":{"name":"пзПараметрыПродукции","splitted":false,"synonym":"Параметры продукции","illustration":"Настройки системы профилей и фурнитуры","obj_presentation":"Система","list_presentation":"Параметры продукции","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"default_clr":{"synonym":"Осн цвет","multiline_mode":false,"tooltip":"Цвет изделия по умолчанию","choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"clr_group":{"synonym":"Доступность цветов","multiline_mode":false,"tooltip":"Группа цветов, доступных для профилей системы","choice_params":[{"name":"color_price_group_destination","path":"ДляОграниченияДоступности"}],"choice_groups_elm":"elm","type":{"types":["cat.color_price_groups"],"is_ref":true}},"template":{"synonym":"Это вложенное изделие ","multiline_mode":false,"tooltip":"Система для вложенных изделий","type":{"types":["boolean"]}},"flap_pos_by_impost":{"synonym":"Положение ств. по импостам.","multiline_mode":false,"tooltip":"Использовать положения Центр, Центр вертикаль и Центр горизонталь для створок","type":{"types":["boolean"]}},"flap_weight_max":{"synonym":"Фильтр по тяжелой створке","multiline_mode":false,"tooltip":"Использовать в фильтре фурнитуры массу самой тяжелой створки изделия, вместо текущей створки","type":{"types":["boolean"]}},"formula":{"synonym":"График размеров","multiline_mode":false,"tooltip":"","choice_params":[{"name":"parent","path":"33bb8f4e-04e0-11ed-8e44-be0a92ebdb41"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"jx":{"synonym":"Момент инерции, см⁴","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"e":{"synonym":"Mодуль упругости, кгс/см²","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"c":{"synonym":"Аэродинамический коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"g":{"synonym":"Коэффициент надежности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"f":{"synonym":"Допустимый прогиб, см","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"check_static":{"synonym":"Рассчитывать статические нагрузки","multiline_mode":false,"tooltip":"Анализировать прочность и выводить сообщения на эскизе","type":{"types":["boolean"]}},"show_flipped":{"synonym":"Показывать перевёрнутость","multiline_mode":false,"tooltip":"Показывать реквизит перевёрнутости слоя","type":{"types":["boolean"]}},"glass_thickness":{"synonym":"Фильтр толщин заполнений","multiline_mode":false,"tooltip":"0 - по толщинам из списка\n1 - по списку\n2 - по вилке толщин (min max)\n3 - без ограничений","type":{"types":["number"],"digits":1,"fraction":0}},"furn_level":{"synonym":"Слой фурнитуры min","multiline_mode":false,"tooltip":"Минимальный уровень вложенности, на котором разрешена фурнитура","type":{"types":["number"],"digits":1,"fraction":0}},"base_clr":{"synonym":"Цвет основы","multiline_mode":false,"tooltip":"Параметр, используемый в данной системе, как цвет основы","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"sketch_view":{"synonym":"Вид на эскиз","multiline_mode":false,"tooltip":"Вид по умолчанию","choice_groups_elm":"elm","type":{"types":["enm.sketch_view"],"is_ref":true}},"outline":{"synonym":"Эскиз","multiline_mode":false,"tooltip":"Картинка для формы выбора","choice_params":[{"name":"obj_delivery_state","path":"Шаблон"}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Расширенное описание в markdown","type":{"types":["string"],"str_len":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Стандартная иерархия","type":{"types":["cat.production_params"],"is_ref":true}}},"tabular_sections":{"elmnts":{"name":"Элементы","synonym":"Элементы","tooltip":"Типовые рама, створка, импост и заполнение для данной системы","fields":{"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Рама","Створка","Импост","Штульп","Заполнение","Раскладка","Добор","Соединитель","Москитка","Водоотлив","Стекло","СтворкаБИ","Примыкание"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.elm_types"],"is_ref":true}},"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"Если указано, фильтрует строку","choice_params":[{"name":"applying","path":["Технология","ПараметрВыбора"]}],"choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}},"nom":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_params":[{"name":"list","path":1}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.inserts","cch.predefined_elmnts"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"pos":{"synonym":"Положение","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Лев","Прав","Верх","Низ","ЦентрВертикаль","ЦентрГоризонталь","Центр","Любое"]}],"choice_groups_elm":"elm","type":{"types":["enm.positions"],"is_ref":true}}}},"production":{"name":"Продукция","synonym":"Продукция","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["production","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["production","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}}}},"product_params":{"name":"ПараметрыИзделия","synonym":"Параметры изделия","tooltip":"Значения параметров изделия по умолчанию","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["product_params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["product_params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"hide":{"synonym":"Скрыть","multiline_mode":false,"tooltip":"Не показывать строку параметра в диалоге свойств изделия","type":{"types":["boolean"]}},"forcibly":{"synonym":"Принудительно","multiline_mode":false,"tooltip":"Замещать установленное ранее значение при перевыборе системы","type":{"types":["boolean"]}},"elm":{"synonym":"Для элемента","multiline_mode":false,"tooltip":"Свойство может уточняться для элемента","type":{"types":["boolean"]}}}},"furn_params":{"name":"ПараметрыФурнитуры","synonym":"Параметры фурнитуры","tooltip":"Значения параметров фурнитуры по умолчанию","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["furn_params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["furn_params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"hide":{"synonym":"Скрыть","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"forcibly":{"synonym":"Принудительно","multiline_mode":false,"tooltip":"Замещать установленное ранее значение при перевыборе системы","type":{"types":["boolean"]}}}},"params":{"name":"Параметры","synonym":"Параметры номенклатур","tooltip":"Умолчания характеристик материалов","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["params","param"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"hide":{"synonym":"Скрыть","multiline_mode":false,"tooltip":"Не показывать строку параметра в диалоге свойств изделия","type":{"types":["boolean"]}},"forcibly":{"synonym":"Принудительно","multiline_mode":false,"tooltip":"Замещать установленное ранее значение при перевыборе системы","type":{"types":["boolean"]}},"elm":{"synonym":"Для элемента","multiline_mode":false,"tooltip":"Свойство может уточняться для элемента","type":{"types":["boolean"]}}}},"colors":{"name":"Цвета","synonym":"Цвета не красить","tooltip":"Список цветов с учётом цвета основы, для которых не требуется вклад в спецификацию","fields":{"base_clr":{"synonym":"Цвет основы","multiline_mode":false,"tooltip":"Имеет смысл, если цвет, не требующий отработки, зависит от цвета основы","choice_links":[{"name":["selection","owner"],"path":["base_clr"]}],"choice_groups_elm":"elm","choice_type":{"path":["base_clr"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Набор реквизитов, состав которого определяется компанией.","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"templates":{"name":"Шаблоны","synonym":"Шаблоны","tooltip":"","fields":{"template":{"synonym":"Шаблон","multiline_mode":false,"tooltip":"","choice_params":[{"name":"obj_delivery_state","path":"Шаблон"}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["doc.calc_order"],"is_ref":true}}}}},"cachable":"ram","form":{"obj":{"head":{" ":["id","name","parent","clr_group","tmin","tmax","allow_open_cnn"]},"tabular_sections":{"elmnts":{"fields":["by_default","elm_type","nom","clr","pos"],"headers":"√,Тип,Номенклатура,Цвет,Положение","widths":"70,160,*,160,160","min_widths":"70,160,200,160,160","aligns":"","sortings":"na,na,na,na,na","types":"ch,ref,ref,ref,ref"},"production":{"fields":["nom","param","value"],"headers":"Номенклатура,Параметр,Значение","widths":"*,160,160","min_widths":"200,160,160","aligns":"","sortings":"na,na,na","types":"ref,ro,ro"},"product_params":{"fields":["param","value","hide","forcibly"],"headers":"Параметр,Значение,Скрыть,Принудительно","widths":"*,*,80,80","min_widths":"200,200,80,80","aligns":"","sortings":"na,na,na,na","types":"ro,ro,ch,ch"},"params":{"fields":["param","value","hide","forcibly"],"headers":"Параметр,Значение,Скрыть,Принудительно","widths":"*,*,80,80","min_widths":"200,200,80,80","aligns":"","sortings":"na,na,na,na","types":"ro,ro,ch,ch"},"furn_params":{"fields":["param","value","hide","forcibly"],"headers":"Параметр,Значение,Скрыть,Принудительно","widths":"*,*,80,80","min_widths":"200,200,80,80","aligns":"","sortings":"na,na,na,na","types":"ro,ro,ch,ch"}},"tabular_sections_order":["elmnts","production","product_params","furn_params","base_blocks"]}}},"delivery_areas":{"name":"РайоныДоставки","splitted":false,"synonym":"Районы доставки","illustration":"","obj_presentation":"Район доставки","list_presentation":"Районы доставки","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.countries"],"is_ref":true}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион, край, область","mandatory":true,"type":{"types":["string"],"str_len":50}},"city":{"synonym":"Город (населенный пункт)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"latitude":{"synonym":"Гео. коорд. Широта","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":12}},"longitude":{"synonym":"Гео. коорд. Долгота","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":12}},"delivery_area":{"synonym":"Район (внутри города)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"rstore":{"synonym":"Региональный склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}}},"tabular_sections":{"coordinates":{"name":"Координаты","synonym":"Координаты","tooltip":"Периметр района","fields":{"latitude":{"synonym":"Гео. коорд. Широта","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":12}},"longitude":{"synonym":"Гео. коорд. Долгота","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":12}}}}},"cachable":"ram","common":true},"cnns":{"name":"пзСоединения","splitted":false,"synonym":"Соединения элементов","illustration":"Спецификации соединений элементов. См.: {@tutorial cnns}","obj_presentation":"Соединение","list_presentation":"Соединения","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"amin":{"synonym":"Угол минимальный","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"amax":{"synonym":"Угол максимальный","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"sd1":{"synonym":"Сторона","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.cnn_sides"],"is_ref":true}},"sz":{"synonym":"Размер","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"cnn_type":{"synonym":"Тип соединения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.cnn_types"],"is_ref":true}},"ahmin":{"synonym":"AH min (угол к горизонтали)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"ahmax":{"synonym":"AH max (угол к горизонтали)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"lmin":{"synonym":"Длина шва min ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"lmax":{"synonym":"Длина шва max ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"tmin":{"synonym":"Толщина min ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"tmax":{"synonym":"Толщина max ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"var_layers":{"synonym":"Разн. плоск. створок","multiline_mode":false,"tooltip":"Створки в разных плоскостях","type":{"types":["boolean"]}},"for_direct_profile_only":{"synonym":"Для прямых","multiline_mode":false,"tooltip":"Использовать только для прямых профилей (1), только для кривых (-1) или всегда(0)","type":{"types":["number"],"digits":1,"fraction":0}},"art1vert":{"synonym":"Арт1 верт.","multiline_mode":false,"tooltip":"Соединение используется только в том случае, если Артикул1 - вертикальный","type":{"types":["boolean"]}},"art1glass":{"synonym":"Арт1 - стеклопакет","multiline_mode":false,"tooltip":"Артикул1 может быть составным стеклопакетом","type":{"types":["boolean"]}},"art2glass":{"synonym":"Арт2 - стеклопакет","multiline_mode":false,"tooltip":"Артикул2 может быть составным стеклопакетом","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"applying":{"synonym":"Применение","multiline_mode":false,"tooltip":"Применимость соединения на стыке, честном Т или в любом месте\n0 - Везде\n1 - Только стык\n2 - Только T\n3 - Только угол","type":{"types":["number"],"digits":6,"fraction":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"specification":{"name":"Спецификация","synonym":"Спецификация","tooltip":"","fields":{"elm":{"synonym":"№","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.inserts","cat.nom"],"is_ref":true}},"algorithm":{"synonym":"Алгоритм","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.predefined_formulas"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["specification","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"},{"name":"color_price_group_destination","path":"ДляХарактеристик"}],"choice_groups_elm":"elm","type":{"types":["cat.color_price_groups","cat.formulas","cat.clrs"],"is_ref":true,"default":"cat.clrs"}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"коэффициент (кол-во комплектующего на 1мм профиля)","type":{"types":["number"],"digits":14,"fraction":8}},"sz":{"synonym":"Размер","multiline_mode":false,"tooltip":"размер (в мм, на которое компл. заходит на Артикул 2)","type":{"types":["number"],"digits":8,"fraction":2}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":8}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","choice_params":[{"name":"parent","path":["3220e259-ffcd-11e5-8303-e67fda7f6b46","3220e251-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"sz_min":{"synonym":"Размер min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"sz_max":{"synonym":"Размер max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"amin":{"synonym":"Угол min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"amax":{"synonym":"Угол max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"set_specification":{"synonym":"Устанавливать","multiline_mode":false,"tooltip":"Устанавливать спецификацию","choice_groups_elm":"elm","type":{"types":["enm.specification_installation_methods"],"is_ref":true}},"for_direct_profile_only":{"synonym":"Для прямых","multiline_mode":false,"tooltip":"Использовать только для прямых профилей (1), только для кривых (-1) или всегда(0)","type":{"types":["number"],"digits":1,"fraction":0}},"alp2":{"synonym":"Учитывать α>180","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"angle_calc_method":{"synonym":"Расчет угла","multiline_mode":false,"tooltip":"Способ расчета угла","choice_groups_elm":"elm","type":{"types":["enm.angle_calculating_ways"],"is_ref":true}},"contour_number":{"synonym":"Контур №","multiline_mode":false,"tooltip":"Номер контура (доп)","type":{"types":["number"],"digits":6,"fraction":0}},"is_order_row":{"synonym":"Это строка заказа","multiline_mode":false,"tooltip":"Если заполнено, строка будет добавлена в заказ, а не в спецификацию текущей продукции","choice_groups_elm":"elm","type":{"types":["cat.formulas","enm.specification_order_row_types"],"is_ref":true}}}},"cnn_elmnts":{"name":"СоединяемыеЭлементы","synonym":"Соединяемые элементы","tooltip":"","fields":{"nom1":{"synonym":"Номенклатура1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"clr1":{"synonym":"Цвет1","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"nom2":{"synonym":"Номенклатура2","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"clr2":{"synonym":"Цвет2","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"is_nom_combinations_row":{"synonym":"Это строка сочетания номенклатур","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"selection_params":{"name":"ПараметрыОтбора","synonym":"Параметры отбора","tooltip":"","fields":{"elm":{"synonym":"№","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"area":{"synonym":"Гр. ИЛИ","multiline_mode":false,"tooltip":"Позволяет формировать условия ИЛИ","type":{"types":["number"],"digits":6,"fraction":0}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"origin":{"synonym":"Источник","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["product","layer","nearest","parent","elm","order","algorithm"]}],"choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"comparison_type":{"synonym":"Вид сравнения","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["gt","gte","lt","lte","eq","ne","in","nin","inh","ninh"]}],"choice_groups_elm":"elm","type":{"types":["enm.comparison_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["comparison_type"],"path":["selection_params","comparison_type"]},{"name":["selection","owner"],"path":["selection_params","param"]},{"name":["txt_row"],"path":["selection_params","txt_row"]}],"choice_type":{"path":["selection_params","param"],"elm":0},"mandatory":true,"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового реквизита либо сериализация списочного значения","type":{"types":["string"],"str_len":0}}}},"sizes":{"name":"Размеры","synonym":"Размеры","tooltip":"Варианты размеров с фильтром по параметрам","fields":{"elm":{"synonym":"Размер","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"origin":{"synonym":"Источник","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["product","layer","nearest","parent","elm","order"]}],"choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"comparison_type":{"synonym":"Вид сравнения","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["gt","gte","lt","lte","eq","ne","in","nin","inh","ninh"]}],"choice_groups_elm":"elm","type":{"types":["enm.comparison_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["comparison_type"],"path":["sizes","comparison_type"]},{"name":["selection","owner"],"path":["sizes","param"]},{"name":["txt_row"],"path":["sizes","txt_row"]}],"choice_type":{"path":["sizes","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового реквизита либо сериализация списочного значения","type":{"types":["string"],"str_len":0}},"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}}}},"priorities":{"name":"Приоритеты","synonym":"Приоритеты","tooltip":"","fields":{"sys":{"synonym":"Система","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.production_params"],"is_ref":true}},"orientation":{"synonym":"Ориентация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.orientations"],"is_ref":true}},"priority":{"synonym":"Приоритет","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}}}}},"cachable":"ram","form":{"selection":{"fields":[],"cols":[{"id":"id","width":"140","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"cnn_type","width":"200","type":"ro","align":"left","sort":"server","caption":"Тип"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"}]},"obj":{"head":{" ":["id","name","cnn_type","sz","priority"],"Дополнительно":["sd1","amin","amax","ahmin","ahmax","lmin","lmax","tmin","tmax","var_layers","for_direct_profile_only","art1vert","art1glass","art2glass"]},"tabular_sections":{"specification":{"fields":["nom","clr","quantity","sz","coefficient","angle_calc_method","formula","is_order_row","sz_min","sz_max","amin","amax","set_specification","for_direct_profile_only"],"headers":"Номенклатура,Цвет,Колич.,Размер,Коэфф.,Расч.угла,Формула,↑ В заказ,Размер min,Размер max,Угол min,Угол max,Устанавливать,Для прямых","widths":"*,160,100,100,100,140,160,140,100,100,100,100,140,140","min_widths":"200,160,100,100,100,140,160,140,100,100,100,100,140,140","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na,na,na,na,na","types":"ref,ref,calck,calck,calck,ref,ref,ref,calck,calck,calck,calck,ref,calck"},"cnn_elmnts":{"fields":["nom1","clr1","nom2","clr2","is_nom_combinations_row"],"headers":"Номенклатура1,Цвет1,Номенклатура2,Цвет2","widths":"*,*,*,*","min_widths":"160,160,160,160","aligns":"","sortings":"na,na,na,na","types":"ref,ref,ref,ref"}},"tabular_sections_order":["specification","cnn_elmnts"]}}},"furns":{"name":"пзФурнитура","splitted":false,"synonym":"Фурнитура","illustration":"Описывает ограничения и правила формирования спецификаций фурнитуры","obj_presentation":"Фурнитура","list_presentation":"Фурнитура","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"flap_weight_max":{"synonym":"Масса створки макс","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"left_right":{"synonym":"Левая правая","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"is_set":{"synonym":"Это набор","multiline_mode":false,"tooltip":"Определяет, является элемент набором для построения спецификации или комплектом фурнитуры для выбора в построителе","type":{"types":["boolean"]}},"is_sliding":{"synonym":"Это раздвижка","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"furn_set":{"synonym":"Набор фурнитуры","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_set","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.furns"],"is_ref":true}},"side_count":{"synonym":"Количество сторон","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"clr_group":{"synonym":"Доступность цветов","multiline_mode":false,"tooltip":"Если указано, выбор цветов будет ограничен этой группой","choice_params":[{"name":"color_price_group_destination","path":"ДляОграниченияДоступности"}],"choice_groups_elm":"elm","type":{"types":["cat.color_price_groups"],"is_ref":true}},"handle_side":{"synonym":"Ручка на стороне","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"open_type":{"synonym":"Тип открывания","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.open_types"],"is_ref":true}},"name_short":{"synonym":"Синоним","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":3}},"applying":{"synonym":"Уровень","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"formula":{"synonym":"График размеров","multiline_mode":false,"tooltip":"Альтернатива табчасти \"НастройкиОткрывания\", чтобы задать размеры min-max","choice_params":[{"name":"parent","path":"33bb8f4e-04e0-11ed-8e44-be0a92ebdb41"}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Расширенное описание в markdown","type":{"types":["string"],"str_len":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.furns"],"is_ref":true}}},"tabular_sections":{"open_tunes":{"name":"НастройкиОткрывания","synonym":"Настройки открывания","tooltip":"","fields":{"side":{"synonym":"Сторона","multiline_mode":false,"tooltip":"№ стороны","type":{"types":["number"],"digits":1,"fraction":0}},"lmin":{"synonym":"X min (длина или ширина)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"lmax":{"synonym":"X max (длина или ширина)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"amin":{"synonym":"α min","multiline_mode":false,"tooltip":"Минимальный угол к соседнему элементу","type":{"types":["number"],"digits":8,"fraction":2}},"amax":{"synonym":"α max","multiline_mode":false,"tooltip":"Максимальный угол к соседнему элементу","type":{"types":["number"],"digits":8,"fraction":2}},"arc_available":{"synonym":"Дуга","multiline_mode":false,"tooltip":"Разрешено искривление элемента","type":{"types":["boolean"]}},"shtulp_available":{"synonym":"Штульп","multiline_mode":false,"tooltip":"Примыкает либо крепится штульп","type":{"types":["boolean"]}},"shtulp_fix_here":{"synonym":"Крепится штульп","multiline_mode":false,"tooltip":"Пассивная штульповая створка","type":{"types":["boolean"]}},"rotation_axis":{"synonym":"Ось поворота","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"partial_opening":{"synonym":"Неполн. откр.","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"outline":{"synonym":"Эскиз","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":3,"fraction":0}}}},"specification":{"name":"Спецификация","synonym":"Спецификация","tooltip":"","fields":{"elm":{"synonym":"№","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"dop":{"synonym":"№ доп","multiline_mode":false,"tooltip":"Элемент дополнительной спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура/Набор","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_set","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.inserts","cat.nom","cat.furns"],"is_ref":true}},"algorithm":{"synonym":"Алгоритм","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.predefined_formulas"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["specification","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"},{"name":"color_price_group_destination","path":"ДляХарактеристик"}],"choice_groups_elm":"elm","type":{"types":["cat.color_price_groups","cat.formulas","cat.clrs"],"is_ref":true,"default":"cat.clrs"}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":8}},"handle_height_base":{"synonym":"Выс. ручк.","multiline_mode":false,"tooltip":"Высота ручки по умолчению.\n>0: фиксированная высота\n=0: Высоту задаёт оператор\n<0: Ручка по центру","type":{"types":["number"],"digits":6,"fraction":0}},"fix_ruch":{"synonym":"Высота ручки фиксирована","multiline_mode":false,"tooltip":"Запрещено изменять высоту ручки","type":{"types":["boolean"]}},"handle_height_min":{"synonym":"Выс. ручк. min","multiline_mode":false,"tooltip":"Строка будет добавлена только в том случае, если ручка выше этого значеия","type":{"types":["number"],"digits":6,"fraction":0}},"handle_height_max":{"synonym":"Выс. ручк. max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"contraction":{"synonym":"Укороч","multiline_mode":false,"tooltip":"Укорочение","choice_groups_elm":"elm","type":{"types":["string","number"],"str_len":100,"digits":8,"fraction":2}},"contraction_option":{"synonym":"Укороч. от","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.contraction_options"],"is_ref":true}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":8}},"flap_weight_min":{"synonym":"Масса створки min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"flap_weight_max":{"synonym":"Масса створки max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"side":{"synonym":"Сторона","multiline_mode":false,"tooltip":"Сторона фурнитуры, на которую устанавливается элемент или выполняется операция","type":{"types":["number"],"digits":1,"fraction":0}},"cnn_side":{"synonym":"Сторона соед.","multiline_mode":false,"tooltip":"Фильтр: выполнять операцию, если примыкающий элемент примыкает с заданной стороны","choice_groups_elm":"elm","type":{"types":["enm.cnn_sides"],"is_ref":true}},"offset_option":{"synonym":"Смещ. от","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.offset_options"],"is_ref":true}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","choice_params":[{"name":"parent","path":["3220e25a-ffcd-11e5-8303-e67fda7f6b46","3220e251-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"transfer_option":{"synonym":"Перенос опер.","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.transfer_operations_options"],"is_ref":true}},"overmeasure":{"synonym":"Припуск","multiline_mode":false,"tooltip":"Учитывать припуск длины элемента (например, на сварку)","type":{"types":["boolean"]}},"is_set_row":{"synonym":"Это строка набора","multiline_mode":false,"tooltip":"Интерфейсное поле (Номенклатура=Фурнитура) для редактирования без кода","type":{"types":["number"],"digits":1,"fraction":0}},"is_procedure_row":{"synonym":"Это строка операции","multiline_mode":false,"tooltip":"Интерфейсное поле (Номенклатура=Номенклатура И ТипНоменклатуры = Техоперация) для редактирования без кода","type":{"types":["number"],"digits":1,"fraction":0}},"is_order_row":{"synonym":"Это строка заказа","multiline_mode":false,"tooltip":"Если заполнено, строка будет добавлена в заказ, а не в спецификацию текущей продукции","choice_groups_elm":"elm","type":{"types":["cat.formulas","enm.specification_order_row_types"],"is_ref":true}}}},"selection_params":{"name":"ПараметрыОтбора","synonym":"Параметры отбора","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"dop":{"synonym":"Доп","multiline_mode":false,"tooltip":"Элемент дополнительной спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"area":{"synonym":"Гр. ИЛИ","multiline_mode":false,"tooltip":"Позволяет формировать условия ИЛИ","type":{"types":["number"],"digits":6,"fraction":0}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"origin":{"synonym":"Источник","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.plan_detailing"],"is_ref":true}},"comparison_type":{"synonym":"Вид сравнения","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["gt","gte","lt","lte","eq","ne","in","nin","inh","ninh"]}],"choice_groups_elm":"elm","type":{"types":["enm.comparison_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["comparison_type"],"path":["selection_params","comparison_type"]},{"name":["selection","owner"],"path":["selection_params","param"]},{"name":["txt_row"],"path":["selection_params","txt_row"]}],"choice_type":{"path":["selection_params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового реквизита либо сериализация списочного значения","type":{"types":["string"],"str_len":0}}}},"specification_restrictions":{"name":"ОграниченияСпецификации","synonym":"Ограничения спецификации","tooltip":"","fields":{"elm":{"synonym":"№","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"dop":{"synonym":"Доп","multiline_mode":false,"tooltip":"Элемент дополнительной спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"side":{"synonym":"Сторона","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"lmin":{"synonym":"X min (длина или ширина)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"lmax":{"synonym":"X max (длина или ширина)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"amin":{"synonym":"α мин","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"amax":{"synonym":"α макс","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"for_direct_profile_only":{"synonym":"Для прямых","multiline_mode":false,"tooltip":"Использовать только для прямых профилей (1), только для кривых (-1) или всегда(0)","type":{"types":["number"],"digits":1,"fraction":0}}}}},"cachable":"ram","form":{"selection":{"fields":[],"cols":[{"id":"id","width":"140","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"open_type","width":"150","type":"ro","align":"left","sort":"server","caption":"Тип открывания"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"}]},"obj":{"head":{" ":["id","name","name_short","parent","open_type","is_set","furn_set"],"Дополнительно":["side_count","left_right","handle_side","is_sliding"]},"tabular_sections":{"open_tunes":{"fields":["side","lmin","lmax","amin","amax","rotation_axis","partial_opening","arc_available","shtulp_available","shtulp_fix_here"],"headers":"Сторона,L min,L max,Угол min,Угол max,Ось поворота,Неполн. откр.,Дуга,Разрешен штульп,Крепится штульп","widths":"*,*,*,*,*,100,100,100,100,100","min_widths":"100,100,100,100,100,100,100,100,100,100","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na","types":"calck,calck,calck,calck,calck,ch,ch,ch,ch,ch"},"specification":{"fields":["elm","dop","nom","clr","quantity","coefficient","side","cnn_side","offset_option","formula","transfer_option"],"headers":"Элемент,Доп,Материал,Цвет,Колич.,Коэфф.,Сторона,Строна соед.,Смещ. от,Формула,Перенос опер.","widths":"80,80,*,140,100,100,100,140,140,140,140","min_widths":"80,80,200,140,100,100,100,140,140,140,140","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na,na","types":"ron,ron,ref,ref,calck,calck,calck,ref,ref,ref,ref"}},"tabular_sections_order":["open_tunes","specification"]}}},"clrs":{"name":"пзЦвета","splitted":false,"synonym":"Цвета","illustration":"","obj_presentation":"Цвет","list_presentation":"Цвета","input_by_string":["name","ral","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"ral":{"synonym":"Цвет RAL","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"machine_tools_clr":{"synonym":"Код для станка","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"clr_str":{"synonym":"Цвет в построителе","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":36}},"clr_out":{"synonym":"Цвет снаружи","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"clr_in":{"synonym":"Цвет изнутри","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"grouping":{"synonym":"Группировка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.property_values"],"is_ref":true}},"area_src":{"synonym":"Источник площади","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.coloring"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.clrs"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","form":{"obj":{"items":[{"element":"FormGroup","row":true,"items":[{"element":"DataField","fld":"name"},{"element":"DataField","fld":"id"},{"element":"DataField","fld":"parent","label":"Папка"}]},{"element":"FormGroup","row":true,"items":[{"element":"DataField","fld":"clr_in"},{"element":"DataField","fld":"clr_out"},{"element":"DataField","fld":"grouping"}]},{"element":"FormGroup","row":true,"items":[{"element":"FieldColor","fld":"clr_str"},{"element":"DataField","fld":"machine_tools_clr"},{"element":"DataField","fld":"ral"}]}]}}},"color_price_groups":{"name":"ЦветоЦеновыеГруппы","splitted":false,"synonym":"Цвето-ценовые группы","illustration":"","obj_presentation":"Цвето-ценовая группа","list_presentation":"Цвето-ценовые группы","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"color_price_group_destination":{"synonym":"Назначение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.color_price_group_destinations"],"is_ref":true}},"condition_formula":{"synonym":"Формула условия","multiline_mode":false,"tooltip":"В этом поле можно указать дополнительное условие на языке javascript","choice_params":[{"name":"parent","path":"1cce6b82-73be-11e9-94bb-98d95b9a5346"},{"name":"disabled","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"mode":{"synonym":"Режим","multiline_mode":false,"tooltip":"Режим формулы","type":{"types":["number"],"digits":1,"fraction":0}},"hide_composite":{"synonym":"Скрыть составные","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"clr":{"synonym":"Приведение цвета","multiline_mode":false,"tooltip":"","choice_params":[{"name":"parent","path":"faf4d037-7d9a-4d4e-ad65-ba01caa36481"}],"choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"price_groups":{"name":"ЦеновыеГруппы","synonym":"Ценовые группы","tooltip":"","fields":{"price_group":{"synonym":"Ценовая гр. или номенклатура","multiline_mode":false,"tooltip":"Ссылка на ценовую группу или номенклатуру или папку (родитель - первый уровень иерархии) номенклатуры, для которой действует соответствие цветов","type":{"types":["cat.price_groups","cat.nom"],"is_ref":true}}}},"clr_conformity":{"name":"СоответствиеЦветов","synonym":"Соответствие цветов","tooltip":"","fields":{"clr1":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","type":{"types":["cat.color_price_groups","cat.clrs"],"is_ref":true}},"clr2":{"synonym":"Соответствие","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"}],"choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}}}},"exclude":{"name":"Исключить","synonym":"Исключения сторон","tooltip":"","fields":{"side":{"synonym":"Сторона","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Изнутри","Снаружи"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.cnn_sides"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_params":[{"name":"clr_in","path":"00000000-0000-0000-0000-000000000000"},{"name":"clr_out","path":"00000000-0000-0000-0000-000000000000"}],"mandatory":true,"type":{"types":["cat.color_price_groups","cat.clrs"],"is_ref":true}}}}},"cachable":"ram"},"divisions":{"name":"Подразделения","splitted":false,"synonym":"Подразделения","illustration":"Перечень подразделений предприятия","obj_presentation":"Подразделение","list_presentation":"Подразделения","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":9,"fields":{"main_project":{"synonym":"Основной проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction":0}},"parent":{"synonym":"Входит в подразделение","multiline_mode":false,"tooltip":"","type":{"types":["cat.divisions"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Набор реквизитов, состав которого определяется компанией.","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"keys":{"name":"Ключи","synonym":"Ключи","tooltip":"Ключи параметров, привязанные к дилеру","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.parameters_keys"],"is_ref":true}}}}},"cachable":"ram"},"users":{"name":"Пользователи","splitted":false,"synonym":"Пользователи","illustration":"","obj_presentation":"Пользователь","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"invalid":{"synonym":"Недействителен","multiline_mode":false,"tooltip":"Пользователь больше не работает в программе, но сведения о нем сохранены.\nНедействительные пользователи скрываются из всех списков\nпри выборе или подборе в документах и других местах программы.","type":{"types":["boolean"]}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"Подразделение, в котором работает пользователь","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"individual_person":{"synonym":"Физическое лицо","multiline_mode":false,"tooltip":"Физическое лицо, с которым связан пользователь","choice_groups_elm":"elm","type":{"types":["cat.individuals"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":0}},"ancillary":{"synonym":"Служебный","multiline_mode":false,"tooltip":"Неразделенный или разделенный служебный пользователь, права к которому устанавливаются непосредственно и программно.","type":{"types":["boolean"]}},"user_ib_uid":{"synonym":"Идентификатор пользователя ИБ","multiline_mode":false,"tooltip":"Уникальный идентификатор пользователя информационной базы, с которым сопоставлен этот элемент справочника.","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"id":{"synonym":"Логин","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":50}},"latin":{"synonym":"latin","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":100}},"prefix":{"synonym":"Префикс нумерации","multiline_mode":false,"tooltip":"Префикс номеров документов текущего пользователя","mandatory":true,"type":{"types":["string"],"str_len":2}},"branch":{"synonym":"Отдел","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.branches"],"is_ref":true}},"push_only":{"synonym":"Только push","multiline_mode":false,"tooltip":"Для пользователя установлен режим push-only (изменения мигрируют в одну сторону - от пользователя на сервер)","type":{"types":["boolean"]}},"roles":{"synonym":"Роли Couchdb","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["string"],"str_len":1000}},"ips":{"synonym":"IP-адреса входа","multiline_mode":false,"tooltip":"Список ip-адресов с маской через запятую, с которых разрешена авторизация\n192.168.9.0/24, 192.168.21.*","type":{"types":["string"],"str_len":0}},"suffix":{"synonym":"Суффикс CouchDB","multiline_mode":false,"tooltip":"Для разделения данных в CouchDB","mandatory":true,"type":{"types":["string"],"str_len":4}},"direct":{"synonym":"Direct","multiline_mode":false,"tooltip":"Для пользователя запрещен режим offline","type":{"types":["boolean"]}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":"8cbaa30d-faab-45ad-880e-84f8b421f448"}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0}},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"email_address":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100}},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20}},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20}},"list_view":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}}},"acl_objs":{"name":"ОбъектыДоступа","synonym":"Объекты доступа","tooltip":"","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.individuals","cat.users","cat.nom_prices_types","cat.divisions","cat.parameters_keys","cat.partners","cat.organizations","cat.abonents","cat.cashboxes","cat.meta_ids","cat.stores"],"is_ref":true}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"ids":{"name":"Идентификаторы","synonym":"Идентификаторы авторизации","tooltip":"","fields":{"identifier":{"synonym":"Идентификатор","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["string"],"str_len":255}},"server":{"synonym":"Сервер","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.servers"],"is_ref":true}}}},"subscribers":{"name":"Абоненты","synonym":"Абоненты","tooltip":"","fields":{"abonent":{"synonym":"Абонент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.abonents"],"is_ref":true}},"branch":{"synonym":"Отдел","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["subscribers","abonent"]}],"choice_groups_elm":"elm","type":{"types":["cat.branches"],"is_ref":true}},"roles":{"synonym":"Роли Couchdb","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":1000}}}}},"cachable":"ram","form":{"obj":{"head":{" ":["id","name","individual_person"],"Дополнительно":["ancillary","invalid",{"id":"user_ib_uid","path":"o.user_ib_uid","synonym":"Идентификатор пользователя ИБ","type":"ro"},{"id":"user_fresh_uid","path":"o.user_fresh_uid","synonym":"Идентификатор пользователя сервиса","type":"ro"},"note"]},"tabular_sections":{"contact_information":{"fields":["kind","presentation"],"headers":"Вид,Представление","widths":"200,*","min_widths":"100,200","aligns":"","sortings":"na,na","types":"ref,txt"}},"tabular_sections_order":["contact_information"]}}},"projects":{"name":"Проекты","splitted":false,"synonym":"Проекты","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"finished":{"synonym":"Завершен","multiline_mode":false,"tooltip":"Признак, указывающий на то, что работы по проекту завершены.","type":{"types":["boolean"]}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Ответственный за реализацию проекта.","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Любые комментарии по проекту","type":{"types":["string"],"str_len":0}},"category":{"synonym":"Категория","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.project_categories"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.projects"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Набор реквизитов, состав которого определяется компанией.","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"stages":{"name":"Этапы","synonym":"Этапы","tooltip":"","fields":{"stage":{"synonym":"Этап","multiline_mode":false,"tooltip":"","choice_params":[{"name":"grouping","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.stages"],"is_ref":true}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Ответственный за регистрацию этапа","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Комментарии к этапу","type":{"types":["string"],"str_len":0}}}},"acl_objs":{"name":"ОбъектыДоступа","synonym":"Объекты доступа","tooltip":"","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.users","cat.divisions","cat.abonents","cat.branches"],"is_ref":true}}}}},"cachable":"doc"},"stores":{"name":"Склады","splitted":false,"synonym":"Склады (места хранения)","illustration":"Сведения о местах хранения товаров (складах), их структуре и физических лицах, назначенных материально ответственными (МОЛ) за тот или иной склад","obj_presentation":"Склад","list_presentation":"Склады","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"assembly_days":{"synonym":"Дней для сборки","multiline_mode":false,"tooltip":"Разрыв \"производство -> доставка\", дней","type":{"types":["number"],"digits":6,"fraction":0}},"address":{"synonym":"Адрес","multiline_mode":false,"tooltip":"Географический адрес","type":{"types":["string"],"str_len":0}},"latitude":{"synonym":"Широта","multiline_mode":false,"tooltip":"Географические координаты (широта)","type":{"types":["number"],"digits":15,"fraction":12}},"longitude":{"synonym":"Долгота","multiline_mode":false,"tooltip":"Географические координаты (долгота)","type":{"types":["number"],"digits":15,"fraction":12}},"delivery_area":{"synonym":"Район","multiline_mode":false,"tooltip":"Географическая зона, к которой привязан адрес","choice_groups_elm":"elm","type":{"types":["cat.delivery_areas"],"is_ref":true}},"address_fields":{"synonym":"Значения полей адреса","multiline_mode":false,"tooltip":"Служебный реквизит","type":{"types":["string"],"str_len":0}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.stores"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Набор реквизитов, состав которого определяется компанией.","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"ram"},"cash_flow_articles":{"name":"СтатьиДвиженияДенежныхСредств","splitted":false,"synonym":"Статьи движения денежных средств","illustration":"Перечень статей движения денежных средств (ДДС), используемых в предприятии для проведения анализа поступлений и расходов в разрезе статей движения денежных средств. ","obj_presentation":"Статья движения денежных средств","list_presentation":"Статьи движения денежных средств","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Рекомендации по выбору статьи движения денежных средств в документах","type":{"types":["string"],"str_len":1024}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Определяет порядок вывода вариантов анализа в мониторе целевых показателей при группировке по категориям целей.","type":{"types":["number"],"digits":6,"fraction":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"В группе статей","multiline_mode":false,"tooltip":"Группа статей движения денежных средств","type":{"types":["cat.cash_flow_articles"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"nom_prices_types":{"name":"ТипыЦенНоменклатуры","splitted":false,"synonym":"Типы цен номенклатуры","illustration":"Перечень типов отпускных цен предприятия","obj_presentation":"Тип цен номенклатуры","list_presentation":"Типы цен номенклатуры","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"price_currency":{"synonym":"Валюта цены по умолчанию","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}},"discount_percent":{"synonym":"Процент скидки или наценки по умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"vat_price_included":{"synonym":"Цена включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"rounding_order":{"synonym":"Порядок округления","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"rounding_in_a_big_way":{"synonym":"Округлять в большую сторону","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{},"cachable":"ram"},"individuals":{"name":"ФизическиеЛица","splitted":false,"synonym":"Физические лица","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":10,"fields":{"birth_date":{"synonym":"Дата рождения","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"inn":{"synonym":"ИНН","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":12}},"imns_code":{"synonym":"Код ИФНС","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"pfr_number":{"synonym":"Страховой номер ПФР","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":14}},"sex":{"synonym":"Пол","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.gender"],"is_ref":true}},"birth_place":{"synonym":"Место рождения","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":240}},"Фамилия":{"synonym":"Фамилия","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Имя":{"synonym":"Имя","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Отчество":{"synonym":"Отчество","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ФамилияРП":{"synonym":"Фамилия (родительный падеж)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ИмяРП":{"synonym":"Имя (родительный падеж)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ОтчествоРП":{"synonym":"Отчество (родительный падеж)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ОснованиеРП":{"synonym":"Основание (родительный падеж)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"ДолжностьРП":{"synonym":"Должность (родительный падеж)","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"Должность":{"synonym":"Должность","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.individuals"],"is_ref":true}}},"tabular_sections":{"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":"822f19bc-09ab-4913-b283-b5461382a75d"}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0}},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"email_address":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100}},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20}},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20}},"list_view":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}}}},"cachable":"ram","form":{"obj":{"head":{" ":[{"id":"id","path":"o.id","synonym":"Код","type":"ro"},"name","sex","birth_date",{"id":"parent","path":"o.parent","synonym":"Группа","type":"ref"}],"Коды":["inn","imns_code","pfr_number"],"Для печатных форм":["Фамилия","Имя","Отчество","ФамилияРП","ИмяРП","ОтчествоРП","Должность","ДолжностьРП","ОснованиеРП"]},"tabular_sections":{"contact_information":{"fields":["kind","presentation"],"headers":"Вид,Представление","widths":"200,*","min_widths":"100,200","aligns":"","sortings":"na,na","types":"ref,txt"}},"tabular_sections_order":["contact_information"]}}},"characteristics":{"name":"ХарактеристикиНоменклатуры","splitted":false,"synonym":"Характеристики номенклатуры","illustration":"Дополнительные характеристики элементов номенклатуры: цвет, размер и т.п.","obj_presentation":"Характеристика номенклатуры","list_presentation":"Характеристики номенклатуры","input_by_string":["name"],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"x":{"synonym":"Длина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"y":{"synonym":"Высота, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"z":{"synonym":"Толщина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"s":{"synonym":"Площадь, м²","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"weight":{"synonym":"Масса, кг","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"calc_order":{"synonym":"Расчет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"product":{"synonym":"Изделие","multiline_mode":false,"tooltip":"Для продукции - номер строки заказа, для характеристики стеклопакета - номер элемента","type":{"types":["number"],"digits":6,"fraction":0}},"leading_product":{"synonym":"Ведущая продукция","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"leading_elm":{"synonym":"Ведущий элемент","multiline_mode":false,"tooltip":"Номер элемента или слоя ведущей продукции","type":{"types":["number"],"digits":6,"fraction":0}},"origin":{"synonym":"Происхождение","multiline_mode":false,"tooltip":"Породившая продукцию Вставка или Заказ поставщику","choice_groups_elm":"elm","type":{"types":["cat.inserts","doc.purchase_order"],"is_ref":true,"default":"cat.inserts"}},"base_block":{"synonym":"Типовой блок","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"sys":{"synonym":"Система","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.production_params"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":512}},"obj_delivery_state":{"synonym":"Этап согласования","multiline_mode":false,"tooltip":"Для целей RLS","choice_params":[{"name":"ref","path":["Подтвержден","Отклонен","Архив","Шаблон","Черновик"]}],"choice_groups_elm":"elm","type":{"types":["enm.obj_delivery_states"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"Для целей RLS","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"department":{"synonym":"Офис продаж","multiline_mode":false,"tooltip":"Для целей RLS","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"builder_props":{"synonym":"Доп. свойства построителя","multiline_mode":false,"tooltip":"Объект JSON-строкой","type":{"types":["string"],"str_len":1000}},"svg":{"synonym":"Миниэскиз","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0},"compress":true},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"owner":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.nom_kinds","cat.nom"],"is_ref":true}}},"tabular_sections":{"constructions":{"name":"Конструкции","synonym":"Конструкции","tooltip":"Конструкции изделия. Они же - слои или контуры","fields":{"cnstr":{"synonym":"№ Конструкции","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"parent":{"synonym":"Внешн. констр.","multiline_mode":false,"tooltip":"№ внешней конструкции","type":{"types":["number"],"digits":6,"fraction":0}},"x":{"synonym":"Ширина, м","multiline_mode":false,"tooltip":"Габаритная ширина контура","type":{"types":["number"],"digits":8,"fraction":2}},"y":{"synonym":"Высота, м","multiline_mode":false,"tooltip":"Габаритная высота контура","type":{"types":["number"],"digits":8,"fraction":2}},"z":{"synonym":"Глубина","multiline_mode":false,"tooltip":"Z-координата плоскости (z-index) длч многослойных конструкций","type":{"types":["number"],"digits":8,"fraction":2}},"w":{"synonym":"Ширина фурн","multiline_mode":false,"tooltip":"Ширина фурнитуры (по фальцу)","type":{"types":["number"],"digits":8,"fraction":2}},"h":{"synonym":"Высота фурн","multiline_mode":false,"tooltip":"Высота фурнитуры (по фальцу)","type":{"types":["number"],"digits":8,"fraction":2}},"furn":{"synonym":"Фурнитура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_folder","path":false},{"name":"is_set","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.furns"],"is_ref":true}},"direction":{"synonym":"Направл. откр.","multiline_mode":false,"tooltip":"Направление открывания","choice_params":[{"name":"ref","path":["Левое","Правое"]}],"choice_groups_elm":"elm","type":{"types":["enm.open_directions"],"is_ref":true}},"h_ruch":{"synonym":"Высота ручки","multiline_mode":false,"tooltip":"Высота ручки в координатах контура (от габарита створки)","type":{"types":["number"],"digits":6,"fraction":0}},"fix_ruch":{"synonym":"Высота ручки фиксирована","multiline_mode":false,"tooltip":"Вычисляется по свойствам фурнитуры","type":{"types":["number"],"digits":6,"fraction":0}},"is_rectangular":{"synonym":"Есть кривые","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"kind":{"synonym":"Вид слоя","multiline_mode":false,"tooltip":"0 - обычный слой\n1 - виртуальный\n2 - вложенное изделие\n3 - слой родительского изделия\n10 - вирт. изделие к слою\n11 - вирт. изделие к изделию","type":{"types":["number"],"digits":6,"fraction":0}},"flipped":{"synonym":"Перевёрнут","multiline_mode":false,"tooltip":"Штапик наружу\n(0) - авто, (1) - перевёрнут, (-1) - не перевёрнут","type":{"types":["number"],"digits":1,"fraction":0}},"dop":{"synonym":"Допреквизиты и параметры","multiline_mode":false,"tooltip":"","type":{"types":["json"]}}}},"coordinates":{"name":"Координаты","synonym":"Координаты","tooltip":"Координаты элементов","fields":{"cnstr":{"synonym":"Конструкция","multiline_mode":false,"tooltip":"Номер конструкции (слоя)","type":{"types":["number"],"digits":6,"fraction":0}},"parent":{"synonym":"Родитель","multiline_mode":false,"tooltip":"Дополнительная иерархия. Например, номер стеклопакета для раскладки или внешняя примыкающая палка для створки или доборного профиля","type":{"types":["number"],"digits":6,"fraction":0}},"region":{"synonym":"Ряд","multiline_mode":false,"tooltip":"Для расклодок: inner, outer, 1, 2, 3","choice_groups_elm":"elm","type":{"types":["enm.lay_regions","number"],"is_ref":true,"digits":1,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Номер элемента","type":{"types":["number"],"digits":6,"fraction":0}},"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"path_data":{"synonym":"Путь SVG","multiline_mode":false,"tooltip":"Данные пути образующей в терминах svg или json элемента","type":{"types":["string"],"str_len":1000}},"x1":{"synonym":"X1","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"y1":{"synonym":"Y1","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"x2":{"synonym":"X2","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"y2":{"synonym":"Y2","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"r":{"synonym":"Радиус","multiline_mode":false,"tooltip":"Вспомогательное поле - частный случай криволинейного элемента","type":{"types":["number"],"digits":8,"fraction":2}},"arc_ccw":{"synonym":"Против часов.","multiline_mode":false,"tooltip":"Вспомогательное поле - частный случай криволинейного элемента - дуга против часовой стрелки","type":{"types":["boolean"]}},"s":{"synonym":"Площадь","multiline_mode":false,"tooltip":"Вычисляемое","type":{"types":["number"],"digits":14,"fraction":6}},"angle_hor":{"synonym":"Угол к горизонту","multiline_mode":false,"tooltip":"Вычисляется для прямой, проходящей через узлы","type":{"types":["number"],"digits":8,"fraction":2}},"alp1":{"synonym":"Угол 1, °","multiline_mode":false,"tooltip":"Вычисляемое - угол реза в первом узле","type":{"types":["number"],"digits":8,"fraction":2}},"alp2":{"synonym":"Угол 2, °","multiline_mode":false,"tooltip":"Вычисляемое - угол реза во втором узле","type":{"types":["number"],"digits":8,"fraction":2}},"len":{"synonym":"Длина, м","multiline_mode":false,"tooltip":"Вычисляется по координатам и соединениям","type":{"types":["number"],"digits":8,"fraction":2}},"pos":{"synonym":"Положение","multiline_mode":false,"tooltip":"Вычисляется во соседним элементам","choice_groups_elm":"elm","type":{"types":["enm.positions"],"is_ref":true}},"orientation":{"synonym":"Ориентация","multiline_mode":false,"tooltip":"Вычисляется по углу к горизонту","choice_groups_elm":"elm","type":{"types":["enm.orientations"],"is_ref":true}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"Вычисляется по вставке, геометрии и параметрам","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"offset":{"synonym":"Смещение","multiline_mode":false,"tooltip":"Смещение от опорной линии d0","type":{"types":["number"],"digits":8,"fraction":2}},"dop":{"synonym":"Допреквизиты и параметры","multiline_mode":false,"tooltip":"","type":{"types":["json"]}}}},"inserts":{"name":"Вставки","synonym":"Вставки","tooltip":"Дополнительные вставки в изделие и контуры","fields":{"cnstr":{"synonym":"Конструкция","multiline_mode":false,"tooltip":"Номер конструкции (слоя)\nЕсли 0, вставка относится к изделию.\nЕсли >0 - к контуру\nЕсли <0 - к элементу","type":{"types":["number"],"digits":6,"fraction":0}},"region":{"synonym":"Ряд","multiline_mode":false,"tooltip":"0 - не ряд\n1 - ряд внутри элемента\n>1 - изнутри элемента\n<1 - снаружи","type":{"types":["number"],"digits":1,"fraction":0}},"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":["МоскитнаяСетка","Контур","Изделие","Профиль","Элемент"]},{"name":"available","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"dop":{"synonym":"Допреквизиты и параметры","multiline_mode":false,"tooltip":"","type":{"types":["json"]}}}},"params":{"name":"Параметры","virtual":true,"synonym":"Параметры","tooltip":"Параметры изделий и фурнитуры","fields":{"cnstr":{"synonym":"Конструкция","multiline_mode":false,"tooltip":"Фильтр для дополнительных вставок","type":{"types":["number"],"digits":6,"fraction":0}},"region":{"synonym":"Ряд","multiline_mode":false,"tooltip":"Фильтр для дополнительных вставок","type":{"types":["number"],"digits":1,"fraction":0}},"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"Фильтр для дополнительных вставок","choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom","cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"hide":{"synonym":"Скрыть","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"cnn_elmnts":{"name":"СоединяемыеЭлементы","synonym":"Соединяемые элементы","tooltip":"Соединения элементов","fields":{"elm1":{"synonym":"Элем 1","multiline_mode":false,"tooltip":"Номер первого элемента","type":{"types":["number"],"digits":6,"fraction":0}},"node1":{"synonym":"Узел 1","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":1}},"elm2":{"synonym":"Элем 2","multiline_mode":false,"tooltip":"Номер второго элемента","type":{"types":["number"],"digits":6,"fraction":0}},"node2":{"synonym":"Узел 2","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":1}},"cnn":{"synonym":"Соединение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cnns"],"is_ref":true}},"aperture_len":{"synonym":"Длина шва/проема","multiline_mode":false,"tooltip":"Для соединений с заполнениями: длина светового проема примыкающего элемента","type":{"types":["number"],"digits":8,"fraction":2}}}},"glass_specification":{"name":"СпецификацияЗаполнений","synonym":"Спецификация заполнений","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":["Заполнение"]},{"name":"insert_glass_type","path":["Заполнение","Рамка","Газ","Пленка","СтеклоСПодогревом","СтеклоЗакаленное","СтеклоЦветное","Триплекс"]}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"dop":{"synonym":"Допреквизиты и параметры","multiline_mode":false,"tooltip":"","type":{"types":["json"]}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"glasses":{"name":"Заполнения","synonym":"Заполнения","tooltip":"Стеклопакеты и сэндвичи - вычисляемая табличная часть (кеш) для упрощения отчетов","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"№ элемента","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.nom"],"str_len":50,"is_ref":true}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics","string"],"is_ref":true,"str_len":50}},"width":{"synonym":"Ширина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}},"height":{"synonym":"Высота, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}},"s":{"synonym":"Площадь, м ²","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":3}},"is_rectangular":{"synonym":"Прямоуг.","multiline_mode":false,"tooltip":"Прямоугольное заполнение","type":{"types":["boolean"]}},"is_sandwich":{"synonym":"Листовые","multiline_mode":false,"tooltip":"Непрозрачное заполнение - сэндвич","type":{"types":["boolean"]}},"thickness":{"synonym":"Толщина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction":0}},"coffer":{"synonym":"Камеры","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}}}},"specification":{"name":"Спецификация","compress":true,"synonym":"Спецификация","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Номер элемента, если значение > 0, либо номер конструкции, если значение < 0","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["specification","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"qty":{"synonym":"Количество (шт)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"len":{"synonym":"Длина/высота, м","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"width":{"synonym":"Ширина, м","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"s":{"synonym":"Площадь, м²","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"alp1":{"synonym":"Угол 1, °","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"alp2":{"synonym":"Угол 2, °","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"totqty":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":4}},"totqty1":{"synonym":"Количество (+%)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":4}},"price":{"synonym":"Себест.план","multiline_mode":false,"tooltip":"Цена плановой себестоимости строки спецификации","type":{"types":["number"],"digits":15,"fraction":4}},"amount":{"synonym":"Сумма себест.","multiline_mode":false,"tooltip":"Сумма плановой себестоимости строки спецификации","type":{"types":["number"],"digits":15,"fraction":4}},"amount_marged":{"synonym":"Сумма с наценкой","multiline_mode":false,"tooltip":"Вклад строки спецификации в стоимость изделия для сценария КМАРЖ_В_СПЕЦИФИКАЦИИ","type":{"types":["number"],"digits":15,"fraction":4}},"origin":{"synonym":"Происхождение","multiline_mode":false,"tooltip":"Ссылка на настройки построителя, из которых возникла строка спецификации","choice_groups_elm":"elm","type":{"types":["cat.inserts","number","cat.cnns","cat.furns"],"is_ref":true,"digits":6,"fraction":0}},"specify":{"synonym":"Уточнение происхождения","multiline_mode":false,"tooltip":"Ссылка на настройки построителя, из которых возникла строка спецификации","choice_groups_elm":"elm","type":{"types":["cat.inserts","string","cat.nom","cat.cnns","cat.furns"],"is_ref":true,"str_len":255}},"changed":{"synonym":"Запись изменена","multiline_mode":false,"tooltip":"Запись изменена оператором (1) или добавлена корректировкой спецификации (-1)","type":{"types":["number"],"digits":1,"fraction":0}},"dop":{"synonym":"Это акс. или визуализ.","multiline_mode":false,"tooltip":"Содержит (1) для строк аксессуаров и (-1) для строк с визуализацией","type":{"types":["number"],"digits":1,"fraction":0}}}},"dop":{"name":"Доп","synonym":"Дополнение спецификации","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Номер элемента, если значение > 0, либо номер конструкции, если значение < 0","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":512}},"coordinate":{"synonym":"Координата","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"origin":{"synonym":"Происхождение","multiline_mode":false,"tooltip":"Ссылка на настройки построителя, из которых возникла строка спецификации","choice_groups_elm":"elm","type":{"types":["cat.inserts","number","cat.cnns","cat.furns"],"is_ref":true,"digits":6,"fraction":0}},"dop":{"synonym":"Это акс. или визуализ.","multiline_mode":false,"tooltip":"Содержит (1) для строк аксессуаров и (-1) для строк с визуализацией","type":{"types":["number"],"digits":1,"fraction":0}}}},"demand":{"name":"Потребность","synonym":"Потребность","tooltip":"","fields":{"kind":{"synonym":"Вид РЦ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.work_center_kinds"],"is_ref":true}},"days_from_execution":{"synonym":"Дней от готовности","multiline_mode":false,"tooltip":"Обратный отсчет. Когда надо запустить в работу в цехе. Должно иметь значение <= ДнейДоГотовности","type":{"types":["number"],"digits":6,"fraction":0}},"days_to_execution":{"synonym":"Дней до готовности","multiline_mode":false,"tooltip":"Если номенклатура есть в спецификации, плановая готовность отодвигается на N дней","type":{"types":["number"],"digits":6,"fraction":0}}}}},"hashable":true,"cachable":"doc","form":{"obj":{"head":{" ":["name","owner","calc_order","product","leading_product","leading_elm"],"Дополнительно":["x","y","z","s","clr","weight","condition_products"]},"tabular_sections":{"specification":{"fields":["elm","nom","clr","characteristic","qty","len","width","s","alp1","alp2","totqty1","price","amount","amount_marged"],"headers":"Эл.,Номенклатура,Цвет,Характеристика,Колич.,Длина&nbsp;выс.,Ширина,Площадь,Угол1,Угол2,Колич++,Цена,Сумма,Сумма++","widths":"50,*,70,*,50,70,70,80,70,70,70,70,70,80","min_widths":"50,180,70,180,50,80,70,70,70,70,70,70,70,70","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na,na,na,na,na","types":"ron,ref,ref,ref,calck,calck,calck,calck,calck,calck,ron,ron,ron,ron"},"constructions":{"fields":["cnstr","parent","x","y","w","h","furn","direction","h_ruch"],"headers":"Констр.,Внешн.,Ширина,Высота,Ширина фурн.,Высота фурн.,Фурнитура,Цвет фурн.,Открывание,Высота ручки","widths":"50,50,70,70,70,70,*,80,80,70","min_widths":"50,50,70,70,70,70,120,80,80,70","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na","types":"ron,ron,ron,ron,ron,ron,ref,ro,ro,ro"},"coordinates":{"fields":["cnstr","parent","elm","elm_type","clr","inset","path_data","x1","y1","x2","y2","len","alp1","alp2","angle_hor","s","pos","orientation"],"headers":"Констр.,Внешн.,Эл.,Тип,Цвет,Вставка,Путь,x1,y1,x2,y2,Длина,Угол1,Угол2,Горизонт,Площадь,Положение,Ориентация","widths":"50,50,50,70,80,*,70,70,70,70,70,70,70,70,70,70,70,70","min_widths":"50,50,50,70,80,120,70,70,70,70,70,70,70,70,70,70,70,70","aligns":"","sortings":"na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na","types":"ron,ron,ron,ref,ref,ref,ro,ron,ron,ron,ron,ron,ron,ron,ron,ron,ro,ro"},"inserts":{"fields":["cnstr","inset","clr"],"headers":"Констр.,Вставка,Цвет","widths":"50,*,*","min_widths":"50,100,100","aligns":"","sortings":"na,na,na","types":"calck,ref,ref"},"cnn_elmnts":{"fields":["elm1","elm2","node1","node2","aperture_len","cnn"],"headers":"Эл1,Эл2,Узел1,Узел2,Длина,Соединение","widths":"50,50,50,50,160,*","min_widths":"50,50,50,50,100,200","aligns":"","sortings":"na,na,na,na,na,na","types":"calck,calck,ed,ed,calck,ref"},"params":{"fields":["cnstr","inset","param","value","hide"],"headers":"Констр.,Вставка,Параметр,Значение,Скрыть","widths":"50,80,*,*,50","min_widths":"50,70,200,200,50","aligns":"","sortings":"na,na,na,na,na","types":"ron,ro,ro,ro,ch"}},"tabular_sections_order":["specification","constructions","coordinates","inserts","cnn_elmnts","params"]}}},"price_groups":{"name":"ЦеновыеГруппы","splitted":false,"synonym":"Ценовые группы","illustration":"","obj_presentation":"Ценовая группа","list_presentation":"Ценовые группы","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"definition":{"synonym":"Описание","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":1024}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"stages":{"name":"Этапы","splitted":false,"synonym":"Этапы проектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Описание назначения использования группы шаблонов для сайта","type":{"types":["string"],"str_len":0}},"grouping":{"synonym":"Это группа","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}},"tabular_sections":{},"cachable":"ram"},"project_categories":{"name":"КатегорииПроектов","splitted":false,"synonym":"Категории проектов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Описание назначения использования группы шаблонов для сайта","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"stages":{"name":"Этапы","synonym":"Этапы","tooltip":"","fields":{"stage":{"synonym":"Этап","multiline_mode":false,"tooltip":"","choice_params":[{"name":"grouping","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.stages"],"is_ref":true}},"grouping":{"synonym":"Группа","multiline_mode":false,"tooltip":"","choice_params":[{"name":"grouping","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.stages"],"is_ref":true}}}}},"cachable":"ram"},"charges_discounts":{"name":"СкидкиНаценки","splitted":false,"synonym":"Скидки (наценки)","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"price_type":{"synonym":"Тип цен","multiline_mode":false,"tooltip":"Если указано, скидка действует только при совпадении с типом цены в строке заказа","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_prices_types"],"is_ref":true}},"sorting_field":{"synonym":"Порядок применения","multiline_mode":false,"tooltip":"Для скидок (наценок), входящих в группу \"Умножение\" определяет последовательность применения. Для скидок, входящих в группу \"Вытеснение\" определяет приоритеты скидок в пределах группы.","type":{"types":["number"],"digits":5,"fraction":0}},"application_joint":{"synonym":"Вариант совместного применения","multiline_mode":false,"tooltip":"Определяет вариант, в соответствии с которым рассчитываются скидки ( наценки) данной группы при совместном применении.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.application_mode_kinds"],"is_ref":true}},"application_mode":{"synonym":"Способ предоставления","multiline_mode":false,"tooltip":"Определяет способ, в соответствии с которым предоставляется скидка  (наценка).","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.formulas","enm.application_joint_kinds"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа скидок (наценок)","type":{"types":["cat.charges_discounts"],"is_ref":true}}},"tabular_sections":{"periods":{"name":"Периоды","synonym":"Периоды","tooltip":"","fields":{"start_date":{"synonym":"Дата начала","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["date"],"date_part":"date_time"}},"expiration_date":{"synonym":"Дата окончания","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["date"],"date_part":"date_time"}}}},"keys":{"name":"Ключи","synonym":"Условия предоставления","tooltip":"","fields":{"condition":{"synonym":"Условие","multiline_mode":false,"tooltip":"Условие при выполнении которого будет предоставлена скидка (наценка).","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}}}},"price_groups":{"name":"ЦеновыеГруппы","synonym":"Ценовые группы","tooltip":"","fields":{"price_group":{"synonym":"Ценовая группа","multiline_mode":false,"tooltip":"Ценовая группа, на номенклатурные позиции которой предоставляется указанное значение скидки (наценки). ","choice_groups_elm":"elm","type":{"types":["cat.price_groups","cat.nom"],"is_ref":true}},"value":{"synonym":"Значение скидки (наценки)","multiline_mode":false,"tooltip":"Значение скидки (наценки), тип которого зависит от способа предоставления.","type":{"types":["number"],"digits":15,"fraction":2}}}}},"cachable":"ram"},"nom_groups":{"name":"ГруппыФинансовогоУчетаНоменклатуры","splitted":false,"synonym":"Группы фин. учета номенклатуры","illustration":"Перечень номенклатурных групп для учета затрат и укрупненного планирования продаж, закупок и производства","obj_presentation":"Номенклатурная группа","list_presentation":"Номенклатурные группы","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"parent":{"synonym":"Раздел","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_groups"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"abonents":{"name":"ИнтеграцияАбоненты","splitted":false,"synonym":"Абоненты","illustration":"","obj_presentation":"Абонент","list_presentation":"Абоненты","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":6,"fields":{"no_mdm":{"synonym":"NoMDM","multiline_mode":false,"tooltip":"Отключить MDM для данного абонента (напрмиер, если это dev-база)","type":{"types":["boolean"]}}},"tabular_sections":{"servers":{"name":"ИнтеграцияСерверы","synonym":"Серверы","tooltip":"","fields":{"key":{"synonym":"Год","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":4,"fraction":0}},"name":{"synonym":"Имя базы","multiline_mode":false,"tooltip":"Указывается, если имя архивной базы отличается от типового","type":{"types":["string"],"str_len":255}},"proxy":{"synonym":"url auth-proxy","multiline_mode":false,"tooltip":"Для редиректа из основного маршрута","type":{"types":["string"],"str_len":255}}}}},"cachable":"meta"},"insert_bind":{"name":"ПривязкиВставок","splitted":false,"synonym":"Привязки вставок","illustration":"Замена регистра \"Корректировка спецификации\"","obj_presentation":"Привязка вставки","list_presentation":"Привязки вставок","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"Если указано, привязка распространяется только на продукцию, параметры окружения которой, совпадают с параметрами ключа параметров","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"production":{"name":"Продукция","synonym":"Продукция","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","type":{"types":["cat.production_params","cat.nom"],"is_ref":true}}}},"inserts":{"name":"Вставки","synonym":"Вставки","tooltip":"Дополнительные вставки в изделие и контуры","fields":{"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":["МоскитнаяСетка","Контур","Изделие","Водоотлив","Откос","Подоконник","Элемент"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.inserts"],"is_ref":true}},"elm_type":{"synonym":"Источник","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Рама","Створка","Продукция","Заполнение","Стекло"]}],"choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}}}}},"cachable":"ram"},"templates":{"name":"Шаблоны","splitted":false,"synonym":"Группы шаблонов","illustration":"Для \"быстрых окон\"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Описание назначения использования группы шаблонов для сайта (markdown)","type":{"types":["string"],"str_len":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"templates":{"name":"Шаблоны","synonym":"Шаблоны","tooltip":"","fields":{"template":{"synonym":"Шаблон","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.characteristics"],"is_ref":true}},"xmin":{"synonym":"Ширина min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"xmax":{"synonym":"Ширина max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"ymin":{"synonym":"Высота min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"ymax":{"synonym":"Высота max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"sys":{"synonym":"Система","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.production_params"],"is_ref":true}},"furn":{"synonym":"Фурнитура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_set","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.furns"],"is_ref":true}},"filling":{"synonym":"Заполнение","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":"Заполнение"},{"name":"insert_glass_type","path":""}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Общее описание шаблона","type":{"types":["string"],"str_len":0}},"props":{"synonym":"Props","multiline_mode":false,"tooltip":"Свойства слоёв изделия","type":{"types":["string"],"str_len":0}},"grouping":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}}}}},"cachable":"ram"},"work_centers":{"name":"РабочиеЦентры","splitted":false,"synonym":"Рабочие центры","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.work_centers"],"is_ref":true}}},"tabular_sections":{"work_center_kinds":{"name":"ВидыРабочихЦентров","synonym":"Виды рабочих центров","tooltip":"","fields":{"kind":{"synonym":"Вид РЦ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.work_center_kinds"],"is_ref":true}}}}},"cachable":"ram","common":true},"nonstandard_attributes":{"name":"ПризнакиНестандартов","splitted":false,"synonym":"Признаки нестандартов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"crooked":{"synonym":"Кривой","multiline_mode":false,"tooltip":"Есть гнутые или наклонные элементы","type":{"types":["boolean"]}},"colored":{"synonym":"Цветной","multiline_mode":false,"tooltip":"Есть покраска или ламинация","type":{"types":["boolean"]}},"lay":{"synonym":"Раскладка","multiline_mode":false,"tooltip":"Содержит стеклопакеты с раскладкой","type":{"types":["boolean"]}},"made_to_order":{"synonym":"Заказной","multiline_mode":false,"tooltip":"Специальный материал под заказ","type":{"types":["boolean"]}},"packing":{"synonym":"Упаковка","multiline_mode":false,"tooltip":"Дополнительная услуга","type":{"types":["boolean"]}}},"tabular_sections":{},"cachable":"doc"},"delivery_directions":{"name":"НаправленияДоставки","splitted":false,"synonym":"Направления доставки","illustration":"Объединяет районы, территории или подразделения продаж","obj_presentation":"Направление доставки","list_presentation":"Направления доставки","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{},"tabular_sections":{"composition":{"name":"Состав","synonym":"Состав","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.delivery_areas","cat.divisions"],"is_ref":true}}}},"coordinates":{"name":"Координаты","synonym":"Координаты","tooltip":"Периметр района","fields":{"latitude":{"synonym":"Гео. коорд. Широта","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":12}},"longitude":{"synonym":"Гео. коорд. Долгота","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":12}}}}},"cachable":"ram"},"http_apis":{"name":"ПоставщикиСВнешнимAPI","splitted":false,"synonym":"Поставщики с внешним API","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{},"tabular_sections":{"nom":{"name":"Номенклатура","synonym":"Номенклатура","tooltip":"Позиции с параметрами, которые можно заказать у данного поставщика. В заказе будет номенклатура с уникальной характеристикой","fields":{"identifier":{"synonym":"Идентификатор","multiline_mode":false,"tooltip":"Ид. вставки поставщика","type":{"types":["string"],"str_len":36}},"name":{"synonym":"Наименование","multiline_mode":false,"tooltip":"Наименование у поставщика","type":{"types":["string"],"str_len":50}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"Характеристика номенклатуры","choice_links":[{"name":["selection","owner"],"path":["nom","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"params":{"synonym":"Параметры","multiline_mode":true,"tooltip":"Необходимые данной позиции параметры и диапазоны значений","type":{"types":["string"],"str_len":0}}}},"params":{"name":"Параметры","synonym":"Параметры","tooltip":"Все, используемые данным поставщиком параметры","fields":{"identifier":{"synonym":"Идентификатор","multiline_mode":false,"tooltip":"Ид. параметра поставщика","type":{"types":["string"],"str_len":36}},"name":{"synonym":"Наименование","multiline_mode":false,"tooltip":"Наименование у поставщика","type":{"types":["string"],"str_len":50}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":25}},"values":{"synonym":"Значения","multiline_mode":true,"tooltip":"json-сериализация возможных значений параметра, если параметр предполагает дискретный ряд или enum","type":{"types":["string"],"str_len":0}}}}},"cachable":"ram"},"lead_src":{"name":"ИсточникиЛидов","splitted":false,"synonym":"Источники лидов","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.lead_types"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"leads":{"name":"Лиды","splitted":false,"synonym":"Лиды","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"Дата создания","mandatory":true,"type":{"types":["date"],"date_part":"date_time"}},"origin":{"synonym":"Источник","multiline_mode":false,"tooltip":"Телефон, сайт, визит и т.д.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.lead_src"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Автор","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"Место, где родился лид","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"dop":{"synonym":"Допреквизиты и параметры","multiline_mode":false,"tooltip":"","type":{"types":["json"]}}},"tabular_sections":{},"cachable":"doc"}},"dp":{"scheme_settings":{"name":"scheme_settings","synonym":"Варианты настроек компоновки","fields":{"scheme":{"synonym":"Текущая настройка","tooltip":"Текущий вариант настроек","mandatory":true,"type":{"types":["cat.scheme_settings"],"is_ref":true}}}},"builder_size":{"name":"builder_size","splitted":false,"synonym":"Размерная линия","illustration":"Метаданные инструмента ruler","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"offset":{"synonym":"Отступ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"angle":{"synonym":"Поворот","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"fix_angle":{"synonym":"Фикс. угол","multiline_mode":false,"tooltip":"Направлять размерную линию под заданным углом, вместо кратчайшего пути между точками","type":{"types":["boolean"]}},"align":{"synonym":"Выравнивание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.text_aligns"],"is_ref":true}},"hide_c1":{"synonym":"Скрыть выноску1","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"hide_c2":{"synonym":"Скрыть выноску2","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"hide_line":{"synonym":"Скрыть линию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"text":{"synonym":"Текст","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"font_family":{"synonym":"Шрифт","multiline_mode":true,"tooltip":"Имя шрифта","type":{"types":["string"],"str_len":50}},"bold":{"synonym":"Жирный","multiline_mode":true,"tooltip":"","type":{"types":["boolean"]}},"font_size":{"synonym":"Размер","multiline_mode":true,"tooltip":"Размер шрифта","type":{"types":["number"],"digits":3,"fraction":0}}},"tabular_sections":{}},"builder_coordinates":{"name":"builder_coordinates","splitted":false,"synonym":"Таблица координат","illustration":"Метаданные инструмента coordinates","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"bind":{"synonym":"Приязка координат","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["b","e"]}],"choice_groups_elm":"elm","type":{"types":["enm.bind_coordinates"],"is_ref":true}},"path":{"synonym":"Путь","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["generatrix","inner","outer"]}],"choice_groups_elm":"elm","type":{"types":["enm.path_kind"],"is_ref":true}},"offset":{"synonym":"Отступ","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"step":{"synonym":"Шаг","multiline_mode":false,"tooltip":"Шаг (расчет по точкам)","type":{"types":["number"],"digits":10,"fraction":3}},"step_angle":{"synonym":"Угол","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}}},"tabular_sections":{"coordinates":{"name":"Координаты","synonym":"Координаты","tooltip":"","fields":{"x":{"synonym":"X","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"y":{"synonym":"Y","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}}}}}},"builder_pen":{"name":"builder_pen","splitted":false,"synonym":"Рисование","illustration":"Метаданные инструмента pen (рисование профилей)","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Рама","Импост","Раскладка","Добор","Соединитель","Водоотлив","Линия","Примыкание","Сечение"]}],"choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}},"inset":{"synonym":"Материал профиля","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"bind_generatrix":{"synonym":"Магнит к профилю","multiline_mode":true,"tooltip":"","type":{"types":["boolean"]}},"bind_node":{"synonym":"Магнит к узлам","multiline_mode":true,"tooltip":"","type":{"types":["boolean"]}},"bind_sys":{"synonym":"Вставки из системы","multiline_mode":true,"tooltip":"","type":{"types":["boolean"]}},"grid":{"synonym":"Шаг сетки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"region":{"synonym":"Ряд","multiline_mode":false,"tooltip":"Для расклодок: inner, outer, 1, 2, 3","choice_params":[{"name":"ref","path":["r1","r2","r3"]}],"choice_groups_elm":"elm","type":{"types":["enm.lay_regions"],"is_ref":true}}},"tabular_sections":{}},"builder_price":{"name":"builder_price","splitted":false,"synonym":"Цены номенклатуры","illustration":"Метаданные карточки цен номенклатуры","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"department":{"synonym":"Офис продаж","multiline_mode":false,"tooltip":"Подразделение продаж","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Цены","tooltip":"","fields":{"price_type":{"synonym":"Тип Цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.currencies"],"is_ref":true}}}},"rounding_quantity":{"name":"ОкруглятьКоличество","synonym":"Округлять количество","tooltip":"","fields":{"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Рама","Уплотнение","Фурнитура","Прочее"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.elm_types"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.rounding_quantity"],"is_ref":true}}}}}},"buyers_order":{"name":"ЗаказПокупателя","splitted":false,"synonym":"Заказ покупателя","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"sys":{"synonym":"Система","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.production_params"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"len":{"synonym":"Длина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"height":{"synonym":"Высота, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"depth":{"synonym":"Глубина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"s":{"synonym":"Площадь, м²","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"quantity":{"synonym":"Колич., шт","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":150}},"first_cost":{"synonym":"Себест. ед.","multiline_mode":false,"tooltip":"Плановая себестоимость единицы продукции","type":{"types":["number"],"digits":15,"fraction":2}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount_percent":{"synonym":"Скидка %","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"discount_percent_internal":{"synonym":"Скидка внутр. %","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"discount":{"synonym":"Скидка","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"shipping_date":{"synonym":"Дата доставки","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"client_number":{"synonym":"Номер клиента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"inn":{"synonym":"ИНН Клиента","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"shipping_address":{"synonym":"Адрес доставки","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":255}},"phone":{"synonym":"Телефон","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":100}},"price_internal":{"synonym":"Цена внутр.","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_internal":{"synonym":"Сумма внутр.","multiline_mode":false,"tooltip":"Сумма внутренней реализации (холдинг) или внешней (от дилера конечному клиенту)","type":{"types":["number"],"digits":15,"fraction":2}},"base_block":{"synonym":"Типовой блок","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"weight":{"synonym":"Масса кг.","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"furn":{"synonym":"Фурнитура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_folder","path":false},{"name":"is_set","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.furns"],"is_ref":true}},"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":"Заполнение"},{"name":"insert_glass_type","path":""}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}}},"tabular_sections":{"product_params":{"name":"ПараметрыИзделия","synonym":"Параметры продукции","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["product_params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["product_params","param"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"hide":{"synonym":"Скрыть","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"production":{"name":"Продукция","synonym":"Продукция","tooltip":"","fields":{"inset":{"synonym":"Продукция","multiline_mode":false,"tooltip":"","choice_params":[{"name":"insert_type","path":["Изделие","МоскитнаяСетка","Жалюзи","Подоконник","Откос","Заполнение","Доставка","Монтаж"]},{"name":"available","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["production","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"len":{"synonym":"Длина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"height":{"synonym":"Высота, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"depth":{"synonym":"Глубина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"s":{"synonym":"Площадь, м²","multiline_mode":false,"tooltip":"Площадь изделия","type":{"types":["number"],"digits":10,"fraction":4}},"quantity":{"synonym":"Количество, шт","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":150}},"first_cost":{"synonym":"Себест. ед.","multiline_mode":false,"tooltip":"Плановая себестоимость единицы продукции","type":{"types":["number"],"digits":15,"fraction":2}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount_percent":{"synonym":"Скидка %","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"ordn":{"synonym":"Ведущая продукция","multiline_mode":false,"tooltip":"ссылка на продукциию, к которой относится материал","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"qty":{"synonym":"Количество, шт","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}},"use":{"synonym":"√","multiline_mode":false,"tooltip":"Использовать","type":{"types":["boolean"]}}}},"glass_specification":{"name":"СпецификацияЗаполнений","synonym":"Спецификация заполнений (ORDGLP)","tooltip":"","fields":{"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"sorting":{"synonym":"Порядок","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"inset":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}}}},"specification":{"name":"Спецификация","synonym":"Спецификация","tooltip":"","fields":{"elm":{"synonym":"№","multiline_mode":false,"tooltip":"Идентификатор строки спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"dop":{"synonym":"Доп","multiline_mode":false,"tooltip":"Элемент дополнительной спецификации","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура/Набор","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_set","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.inserts","cat.nom","cat.furns"],"is_ref":true}},"algorithm":{"synonym":"Алгоритм","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.predefined_formulas"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"handle_height_base":{"synonym":"Выс. ручк.","multiline_mode":false,"tooltip":"Стандартная высота ручки","type":{"types":["number"],"digits":6,"fraction":0}},"handle_height_min":{"synonym":"Выс. ручк. min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"handle_height_max":{"synonym":"Выс. ручк. max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"contraction":{"synonym":"Укорочение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","number"],"str_len":100,"digits":10,"fraction":4}},"contraction_option":{"synonym":"Укороч. от","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.contraction_options"],"is_ref":true}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"flap_weight_min":{"synonym":"Масса створки min","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"flap_weight_max":{"synonym":"Масса створки max","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"side":{"synonym":"Сторона","multiline_mode":false,"tooltip":"Сторона фурнитуры, на которую устанавливается элемент или на которой выполняется операция","type":{"types":["number"],"digits":1,"fraction":0}},"cnn_side":{"synonym":"Сторона соед.","multiline_mode":false,"tooltip":"Фильтр: выполнять операцию, если примыкающий элемент примыкает с заданной стороны","choice_groups_elm":"elm","type":{"types":["enm.cnn_sides"],"is_ref":true}},"offset_option":{"synonym":"Смещ. от","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.offset_options"],"is_ref":true}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"transfer_option":{"synonym":"Перенос опер.","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.transfer_operations_options"],"is_ref":true}},"overmeasure":{"synonym":"Припуск","multiline_mode":false,"tooltip":"Учитывать припуск длины элемента (например, на сварку)","type":{"types":["boolean"]}},"is_set_row":{"synonym":"Это строка набора","multiline_mode":false,"tooltip":"Интерфейсное поле (Номенклатура=Фурнитура) для редактирования без кода","type":{"types":["number"],"digits":1,"fraction":0}},"is_procedure_row":{"synonym":"Это строка операции","multiline_mode":false,"tooltip":"Интерфейсное поле (Номенклатура=Номенклатура И ТипНоменклатуры = Техоперация) для редактирования без кода","type":{"types":["number"],"digits":1,"fraction":0}},"is_order_row":{"synonym":"Это строка заказа","multiline_mode":false,"tooltip":"Если \"Истина\", строка будет добавлена в заказ, а не в спецификацию текущей продукции","type":{"types":["boolean"]}},"origin":{"synonym":"Происхождение","multiline_mode":false,"tooltip":"Ссылка на настройки построителя, из которых возникла строка спецификации","choice_groups_elm":"elm","type":{"types":["cat.inserts","number","cat.cnns","cat.furns"],"is_ref":true,"digits":6,"fraction":0}},"specify":{"synonym":"Уточнение происхождения","multiline_mode":false,"tooltip":"Ссылка на настройки построителя, из которых возникла строка спецификации","choice_groups_elm":"elm","type":{"types":["cat.inserts","cat.nom","cat.cnns","cat.furns"],"is_ref":true}}}},"charges_discounts":{"name":"СкидкиНаценки","synonym":"Скидки наценки","tooltip":"","fields":{"nom_kind":{"synonym":"Группа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_kinds"],"is_ref":true}},"discount_percent":{"synonym":"Скидка %","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}}}},"sys_furn":{"name":"СистемыФурнитуры","synonym":"Фурнитура","tooltip":"","fields":{"elm1":{"synonym":"Текущая","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_set","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.furns"],"is_ref":true}},"elm2":{"synonym":"Заменить на","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_set","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.furns"],"is_ref":true}}}},"sys_profile":{"name":"СистемыПрофилей","synonym":"Разрешенные системы","tooltip":"Допустимые системы","fields":{"sys":{"synonym":"Система","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.production_params"],"is_ref":true}}}}},"form":{"obj":{"head":{" ":["calc_order"]},"tabular_sections":{"production":{"fields":["row","inset","clr","len","height","depth","s","quantity","note"],"headers":"№,Продукция,Цвет,Длина,Высота,Глубина,Площадь,Колич.,Комментарий","widths":"40,*,120,80,75,75,75,75,*","min_widths":"30,200,100,70,70,70,70,70,80","aligns":"center,left,left,right,right,right,right,right,left","sortings":"na,na,na,na,na,na,na,na,na","types":"cntr,ref,ref,calck,calck,calck,calck,calck,txt"},"inserts":{"fields":["inset","clr"],"headers":"Вставка,Цвет","widths":"*,*","min_widths":"90,90","aligns":"","sortings":"na,na","types":"ref,ref"}}}}},"builder_text":{"name":"builder_text","splitted":false,"synonym":"Произвольный текст","illustration":"Метаданные инструмента text","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"text":{"synonym":"Текст","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"font_family":{"synonym":"Шрифт","multiline_mode":true,"tooltip":"Имя шрифта","type":{"types":["string"],"str_len":50}},"bold":{"synonym":"Жирный","multiline_mode":true,"tooltip":"","type":{"types":["boolean"]}},"font_size":{"synonym":"Размер","multiline_mode":true,"tooltip":"Размер шрифта","type":{"types":["number"],"digits":3,"fraction":0}},"angle":{"synonym":"Поворот","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"align":{"synonym":"Выравнивание","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.text_aligns"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.clrs"],"is_ref":true}},"x":{"synonym":"X коорд.","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"y":{"synonym":"Y коорд.","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}}},"tabular_sections":{}},"builder_lay_impost":{"name":"builder_lay_impost","splitted":false,"synonym":"Импосты и раскладки","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Импост","Раскладка","Рама"]}],"choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"region":{"synonym":"Ряд","multiline_mode":false,"tooltip":"Для расклодок: inner, outer, 1, 2, 3","choice_params":[{"name":"ref","path":["r1","r2","r3"]}],"choice_groups_elm":"elm","type":{"types":["enm.lay_regions"],"is_ref":true}},"split":{"synonym":"Тип деления","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["ДелениеГоризонтальных","ДелениеВертикальных","КрестВСтык","КрестПересечение"]}],"choice_groups_elm":"elm","type":{"types":["enm.lay_split_types"],"is_ref":true}},"elm_by_y":{"synonym":"Элементов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction":0}},"step_by_y":{"synonym":"Шаг","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":4,"fraction":0}},"align_by_y":{"synonym":"Опора","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Низ","Верх","Центр"]}],"choice_groups_elm":"elm","type":{"types":["enm.positions"],"is_ref":true}},"inset_by_y":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"elm_by_x":{"synonym":"Элементов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":2,"fraction":0}},"step_by_x":{"synonym":"Шаг","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":4,"fraction":0}},"align_by_x":{"synonym":"Опора","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Лев","Прав","Центр"]}],"choice_groups_elm":"elm","type":{"types":["enm.positions"],"is_ref":true}},"inset_by_x":{"synonym":"Вставка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.inserts"],"is_ref":true}},"w":{"synonym":"Ширина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"h":{"synonym":"Высота","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}}},"tabular_sections":{"sizes":{"name":"Размеры","synonym":"Размеры","tooltip":"Размеры ячеек фасада по X и Y","fields":{"elm":{"synonym":"Напраленние","multiline_mode":false,"tooltip":"0 - горизонт, 1 - вертикаль","type":{"types":["number"],"digits":1,"fraction":0}},"sz":{"synonym":"Размер","multiline_mode":false,"tooltip":"Размер ячейки. Порядок в номере строки, направление в elm","mandatory":true,"type":{"types":["string"],"str_len":8}},"changed":{"synonym":"Запись изменена","multiline_mode":false,"tooltip":"Запись изменена оператором","type":{"types":["number"],"digits":1,"fraction":0}}}}},"form":{"obj":{"head":{" ":["elm_type","clr","split"],"Деление Y":["inset_by_y","elm_by_y","step_by_y","align_by_y"],"Деление X":["inset_by_x","elm_by_x","step_by_x","align_by_x"],"Габариты":["w","h"]}}}}},"doc":{"purchase":{"name":"ПоступлениеТоваровУслуг","splitted":false,"synonym":"Поступление товаров и услуг","illustration":"Документы отражают поступление товаров и услуг","obj_presentation":"Поступление товаров и услуг","list_presentation":"Поступление товаров и услуг","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_supplier","path":true}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"Услуга","path":false},{"name":"set","path":false}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"Характеристика номенклатуры","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":3}},"unit":{"synonym":"Ед.","multiline_mode":false,"tooltip":"Единица измерения","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_units"],"is_ref":true}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"trans":{"synonym":"Заказ резерв","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}}}},"services":{"name":"Услуги","synonym":"Услуги","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"Услуга","path":true},{"name":"set","path":false}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"content":{"synonym":"Содержание услуги, доп. сведения","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["string"],"str_len":0}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"nom_group":{"synonym":"Номенклатурная группа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_groups"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"cost_item":{"synonym":"Статья затрат","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"buyers_order":{"synonym":"Заказ затрат","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc"},"inventory_cuts":{"name":"ИнвентаризацияДеловойОбрези","splitted":false,"synonym":"Инвентаризация деловой обрези","illustration":"","obj_presentation":"Инвентаризация НЗП","list_presentation":"Инвентаризации НЗП","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"transactions_kind":{"synonym":"Вид операции","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.inventory_kinds"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"work_center":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions","cat.work_centers"],"is_ref":true}}},"tabular_sections":{"materials":{"name":"Материалы","synonym":"Материалы","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["materials","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true},"force_ram":true},"len":{"synonym":"Длина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"width":{"synonym":"Ширина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"qty":{"synonym":"Количество, шт","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"cell":{"synonym":"Ячейка","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"recorded_quantity":{"synonym":"Количество по данным учета","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}}}}},"cachable":"doc"},"inventory_goods":{"name":"ИнвентаризацияТоваровНаСкладе","splitted":false,"synonym":"Инвентаризация товаров на складе","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"origin":{"synonym":"Происхождение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.inventory_goods"],"is_ref":true}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика номенклатуры","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true},"force_ram":true},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"recorded_quantity":{"synonym":"Количество по данным учета","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"unit":{"synonym":"Единица измерения","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"len":{"synonym":"Длина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"width":{"synonym":"Ширина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"qty":{"synonym":"Штук","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}}}}},"cachable":"doc"},"work_centers_task":{"name":"НарядРЦ","splitted":false,"synonym":"Задание рабочему центру","illustration":"","obj_presentation":"Наряд","list_presentation":"Задания рабочим центрам","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"Участок производства","choice_params":[{"name":"applying","path":"РабочийЦентр"}],"choice_groups_elm":"elm","type":{"types":["cat.parameters_keys","cat.work_centers"],"is_ref":true}},"recipient":{"synonym":"Получатель","multiline_mode":false,"tooltip":"СГП или след. передел","choice_params":[{"name":"applying","path":"РабочийЦентр"}],"choice_groups_elm":"elm","type":{"types":["cat.parameters_keys","cat.work_centers"],"is_ref":true}},"biz_cuts":{"synonym":"Деловая обрезь","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.use_cut"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"planning":{"name":"Планирование","synonym":"Планирование","tooltip":"","fields":{"obj":{"synonym":"Объект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"specimen":{"synonym":"Экземпляр","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"power":{"synonym":"Мощность","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}}}},"demand":{"name":"Потребность","synonym":"Материалы","tooltip":"Потребность в материалах","fields":{"production":{"synonym":"Продукция","multiline_mode":false,"tooltip":"Ссылка на характеристику продукции или объект планирования. Указывает, к чему относится материал текущей строки","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"specimen":{"synonym":"Экземпляр","multiline_mode":false,"tooltip":"Номер экземпляра","type":{"types":["number"],"digits":6,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Номер элемента","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"Номенклатура потребности. По умолчанию, совпадает с номенклатурой спецификации, но может содержать аналог","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"Характеристика потребности. По умолчанию, совпадает с характеристикой спецификации, но может содержать аналог","choice_links":[{"name":["selection","owner"],"path":["demand","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics","cat.clrs"],"is_ref":true,"default":"cat.characteristics"}},"final_balance":{"synonym":"Остаток потребности","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"from_cut":{"synonym":"Из обрези","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"close":{"synonym":"Закрыть","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}},"cuts":{"name":"Обрезь","synonym":"Обрезь","tooltip":"Приход и расход деловой обрези","fields":{"record_kind":{"synonym":"Вид движения","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.debit_credit_kinds"],"is_ref":true}},"stick":{"synonym":"№ хлыста","multiline_mode":false,"tooltip":"№ листа (хлыста, заготовки)","type":{"types":["number"],"digits":6,"fraction":0}},"pair":{"synonym":"№ пары","multiline_mode":false,"tooltip":"№ парной заготовки","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["cuts","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics","cat.clrs"],"is_ref":true,"default":"cat.characteristics"}},"len":{"synonym":"Длина","multiline_mode":false,"tooltip":"длина в мм","type":{"types":["number"],"digits":8,"fraction":2}},"width":{"synonym":"Ширина","multiline_mode":false,"tooltip":"ширина в мм","type":{"types":["number"],"digits":8,"fraction":2}},"x":{"synonym":"Координата X","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"y":{"synonym":"Координата Y","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"Количество в единицах хранения","type":{"types":["number"],"digits":8,"fraction":2}},"cell":{"synonym":"Ячейка","multiline_mode":false,"tooltip":"№ ячейки (откуда брать заготовку или куда помещать деловой обрезок)","type":{"types":["string"],"str_len":9}}}},"cutting":{"name":"Раскрой","synonym":"Раскрой","tooltip":"","fields":{"production":{"synonym":"Продукция","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"specimen":{"synonym":"Экземпляр","multiline_mode":false,"tooltip":"Номер экземпляра","type":{"types":["number"],"digits":6,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Номер элемента","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["cutting","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics","cat.clrs"],"is_ref":true,"default":"cat.characteristics"}},"len":{"synonym":"Длина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"width":{"synonym":"Ширина","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"stick":{"synonym":"№ хлыста","multiline_mode":false,"tooltip":"№ листа (заготовки), на котором размещать изделие","type":{"types":["number"],"digits":6,"fraction":0}},"pair":{"synonym":"№ пары","multiline_mode":false,"tooltip":"№ парного изделия","type":{"types":["number"],"digits":6,"fraction":0}},"orientation":{"synonym":"Ориентация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.orientations"],"is_ref":true}},"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}},"alp1":{"synonym":"Угол реза1","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"alp2":{"synonym":"Угол реза2","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"cell":{"synonym":"Ячейка","multiline_mode":false,"tooltip":"№ ячейки (куда помещать изделие)","type":{"types":["string"],"str_len":9}},"part":{"synonym":"Партия","multiline_mode":false,"tooltip":"Партия (такт, группа раскроя)","type":{"types":["number"],"digits":6,"fraction":0}},"x":{"synonym":"Координата X","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"y":{"synonym":"Y","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"rotated":{"synonym":"Поворот","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"nonstandard":{"synonym":"Это нестандарт","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}}},"cachable":"doc"},"calc_order":{"name":"Расчет","splitted":false,"synonym":"Расчет-заказ","illustration":"Аналог заказа покупателя типовых конфигураций.\nСодержит инструменты для формирования спецификаций и подготовки данных производства и диспетчеризации","obj_presentation":"Расчет-заказ","list_presentation":"Расчеты-заказы","input_by_string":["number_doc","number_internal","client_of_dealer","shipping_address"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"number_internal":{"synonym":"Номер внутр","multiline_mode":false,"tooltip":"Дополнительный (внутренний) номер документа","type":{"types":["string"],"str_len":20}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_folder","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_buyer","path":true}],"choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"client_of_dealer":{"synonym":"Клиент дилера","multiline_mode":false,"tooltip":"Наименование конечного клиента в дилерских заказах","type":{"types":["string"],"str_len":255}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"bank_account":{"synonym":"Банковский счет","multiline_mode":false,"tooltip":"Банковский счет организации, на который планируется поступление денежных средств","choice_links":[{"name":["selection","owner"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["cat.organization_bank_accounts"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Дополнительная информация","type":{"types":["string"],"str_len":255}},"manager":{"synonym":"Менеджер","multiline_mode":false,"tooltip":"Менеджер, оформивший заказ","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"leading_manager":{"synonym":"Ведущий менеджер","multiline_mode":false,"tooltip":"Куратор, ведущий менеджер","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"department":{"synonym":"Офис продаж","multiline_mode":false,"tooltip":"Подразделение продаж","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"Склад отгрузки товаров по заказу","type":{"types":["cat.stores"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_operation":{"synonym":"Сумма упр","multiline_mode":false,"tooltip":"Сумма в валюте управленческого учета","type":{"types":["number"],"digits":15,"fraction":2}},"amount_internal":{"synonym":"Сумма внутр.","multiline_mode":false,"tooltip":"Сумма внутренней реализации","type":{"types":["number"],"digits":15,"fraction":2}},"accessory_characteristic":{"synonym":"Характеристика аксессуаров","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"sys_profile":{"synonym":"Профиль","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":255}},"sys_furn":{"synonym":"Фурнитура","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":255}},"phone":{"synonym":"Телефон","multiline_mode":false,"tooltip":"Телефон по адресу доставки","type":{"types":["string"],"str_len":100}},"delivery_area":{"synonym":"Район","multiline_mode":false,"tooltip":"Район (зона, направление) доставки для группировки при планировании и оптимизации маршрута геокодером","choice_groups_elm":"elm","type":{"types":["cat.delivery_areas"],"is_ref":true}},"shipping_address":{"synonym":"Адрес доставки","multiline_mode":false,"tooltip":"Адрес доставки изделий заказа","type":{"types":["string"],"str_len":255}},"coordinates":{"synonym":"Координаты","multiline_mode":false,"tooltip":"Гео - координаты адреса доставки","type":{"types":["string"],"str_len":50}},"address_fields":{"synonym":"Значения полей адреса","multiline_mode":false,"tooltip":"Служебный реквизит","type":{"types":["string"],"str_len":0}},"difficult":{"synonym":"Сложный","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"vat_consider":{"synonym":"Учитывать НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"vat_included":{"synonym":"Сумма включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"extra_charge_external":{"synonym":"Наценка внешн.","multiline_mode":false,"tooltip":"Наценка внешней (дилерской) продажи по отношению к цене производителя, %.","type":{"types":["number"],"digits":5,"fraction":2}},"obj_delivery_state":{"synonym":"Этап согласования","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Подтвержден","Отклонен","Архив","Шаблон","Черновик"]}],"choice_groups_elm":"elm","type":{"types":["enm.obj_delivery_states"],"is_ref":true}},"category":{"synonym":"Категория заказа","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.order_categories"],"is_ref":true}},"sending_stage":{"synonym":"Этап отправки","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.order_sending_stages"],"is_ref":true}},"approval":{"synonym":"Согласие на обработку персональных данных","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"lead":{"synonym":"Лид","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.leads"],"is_ref":true}}},"tabular_sections":{"production":{"name":"Продукция","synonym":"Продукция","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["production","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":512}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}},"unit":{"synonym":"Ед.","multiline_mode":false,"tooltip":"Единица измерения","choice_links":[{"name":["selection","owner"],"path":["production","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"qty":{"synonym":"Количество, шт","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"len":{"synonym":"Длина/высота, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"width":{"synonym":"Ширина, мм","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"s":{"synonym":"Площадь, м²","multiline_mode":false,"tooltip":"Площадь изделия","type":{"types":["number"],"digits":10,"fraction":6}},"first_cost":{"synonym":"Себест. ед.","multiline_mode":false,"tooltip":"Плановая себестоимость единицы продукции","type":{"types":["number"],"digits":15,"fraction":4}},"marginality":{"synonym":"К. марж","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount_percent":{"synonym":"Скидка %","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"discount":{"synonym":"Скидка","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"margin":{"synonym":"Маржа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount_percent_internal":{"synonym":"Скидка внутр. %","multiline_mode":false,"tooltip":"Процент скидки для внутренней перепродажи (холдинг) или внешней (дилеры)","type":{"types":["number"],"digits":5,"fraction":2}},"extra_charge_external":{"synonym":"Наценка %","multiline_mode":false,"tooltip":"Процент наценки для внешней продажи (от дилера конечному покупателю)","type":{"types":["number"],"digits":5,"fraction":2}},"price_internal":{"synonym":"Цена внутр.","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_internal":{"synonym":"Сумма внутр.","multiline_mode":false,"tooltip":"Сумма внутренней реализации (холдинг) или внешней (от дилера конечному клиенту)","type":{"types":["number"],"digits":15,"fraction":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"ordn":{"synonym":"Ведущая продукция","multiline_mode":false,"tooltip":"ссылка на продукциию, к которой относится материал","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"changed":{"synonym":"Запись изменена","multiline_mode":false,"tooltip":"Запись изменена оператором (1, -2) или добавлена корректировкой спецификации (-1)","type":{"types":["number"],"digits":1,"fraction":0}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0}},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"email_address":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100}},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20}},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20}}}},"planning":{"name":"Планирование","synonym":"Планирование","tooltip":"","fields":{"phase":{"synonym":"Фаза","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.planning_phases"],"is_ref":true}},"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"Плановая дата доставки или начала операции","type":{"types":["date"],"date_part":"date"}},"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"Ключ или вид РЦ","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys","cat.work_center_kinds"],"is_ref":true}},"obj":{"synonym":"Объект","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","calc_order"],"path":["ref"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"specimen":{"synonym":"Экземпляр","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"power":{"synonym":"Мощность","multiline_mode":false,"tooltip":"Трудоемкость или время операции","type":{"types":["number"],"digits":8,"fraction":2}}}},"orders":{"name":"Заказы","synonym":"Заказы поставщикам","tooltip":"","fields":{"is_supplier":{"synonym":"Поставщик","multiline_mode":false,"tooltip":"Поставщики с внешним API","choice_groups_elm":"elm","type":{"types":["cat.http_apis"],"is_ref":true}},"invoice":{"synonym":"Заказ","multiline_mode":false,"tooltip":"Заказ между заводом и торговым домом","choice_groups_elm":"elm","type":{"types":["doc.purchase_order"],"is_ref":true}}}}},"hashable":true,"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","number_internal","partner","client_of_dealer","manager","doc_amount","obj_delivery_state","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"number_internal","width":"160","type":"ro","align":"left","sort":"na","caption":"№ внутр"},{"id":"partner","width":"180","type":"ro","align":"left","sort":"na","caption":"Контрагент"},{"id":"client_of_dealer","width":"*","type":"ro","align":"left","sort":"na","caption":"Клиент"},{"id":"manager","width":"180","type":"ro","align":"left","sort":"na","caption":"Автор"},{"id":"doc_amount","width":"120","type":"ron","align":"right","sort":"na","caption":"Сумма"},{"id":"obj_delivery_state","width":"120","type":"ro","align":"left","sort":"na","caption":"Статус"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":["name","owner","calc_order","product","leading_product","leading_elm"]},"tabular_sections":{"production":{"fields":["row","nom","characteristic","note","qty","len","width","s","quantity","unit","discount_percent","price","amount","discount_percent_internal","price_internal","amount_internal"],"aligns":"center,left,left,left,right,right,right,right,right,left,right,right,right,right,right,right","sortings":"na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na","types":""},"planning":{"fields":["obj","elm","specimen","key","date","performance"],"aligns":"left,right,right,left,left,right","sortings":"na,na,na,na,na,na","headers":"Продукция,Элемент,Экземпляр,Ключ,Дата,Мощность","widths":"*,70,70,*,120,90","min_widths":"180,60,60,180,110,80","types":"ref,calck,calck,ref,dhxCalendar,calck"}},"tabular_sections_order":["production","planning"]}}},"credit_card_order":{"name":"ОплатаОтПокупателяПлатежнойКартой","splitted":false,"synonym":"Оплата от покупателя платежной картой","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Покупатель","multiline_mode":false,"tooltip":"Контрагент, подотчетник","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"payment_details":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"Статья движения денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"trans":{"synonym":"Объект расчетов","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order","cat.contracts"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"Сумма платежа","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":2}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","organization","partner","doc_amount","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"organization","width":"*","type":"ro","align":"left","sort":"na","caption":"Организация"},{"id":"partner","width":"*","type":"ro","align":"left","sort":"na","caption":"Контрагент"},{"id":"doc_amount","width":"160","type":"ro","align":"left","sort":"na","caption":"Сумма"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":[{"id":"number_doc","path":"o.number_doc","type":"ro","synonym":"Номер"},"date","organization","partner","department","responsible","note",{"id":"doc_amount","path":"o.doc_amount","type":"ro","synonym":"Сумма документа"}]},"tabular_sections":{"payment_details":{"fields":["row","cash_flow_article","trans","amount"],"headers":"№,Статья,Заказ,Сумма","aligns":"center,left,left,right","sortings":"na,na,na,na","types":"cntr,ref,ref,calck","widths":"50,*,*,120","min_widths":"40,140,140,80"}}}}},"work_centers_performance":{"name":"МощностиРЦ","splitted":false,"synonym":"Мощности рабочих центров","illustration":"","obj_presentation":"Мощность рабочих центров","list_presentation":"Мощности рабочих центров","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"start_date":{"synonym":"Дата начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"expiration_date":{"synonym":"Дата окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"planning":{"name":"Планирование","synonym":"Планирование","tooltip":"","fields":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys","cat.work_center_kinds"],"is_ref":true}},"power":{"synonym":"Мощность","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}}}}},"cachable":"doc"},"debit_bank_order":{"name":"ПлатежноеПоручениеВходящее","splitted":false,"synonym":"Платежное поручение входящее","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Плательщик","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"bank_account":{"synonym":"Счет организации","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["cat.organization_bank_accounts"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"payment_details":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"Статья движения денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"trans":{"synonym":"Объект расчетов","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order","cat.contracts"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"Сумма платежа","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":2}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","organization","partner","doc_amount","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"organization","width":"*","type":"ro","align":"left","sort":"na","caption":"Организация"},{"id":"partner","width":"*","type":"ro","align":"left","sort":"na","caption":"Контрагент"},{"id":"doc_amount","width":"160","type":"ro","align":"left","sort":"na","caption":"Сумма"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":[{"id":"number_doc","path":"o.number_doc","type":"ro","synonym":"Номер"},"date","organization","partner","department","responsible","note",{"id":"doc_amount","path":"o.doc_amount","type":"ro","synonym":"Сумма документа"}]},"tabular_sections":{"payment_details":{"fields":["row","cash_flow_article","trans","amount"],"headers":"№,Статья,Заказ,Сумма","aligns":"center,left,left,right","sortings":"na,na,na,na","types":"cntr,ref,ref,calck","widths":"50,*,*,120","min_widths":"40,140,140,80"}}}}},"credit_bank_order":{"name":"ПлатежноеПоручениеИсходящее","splitted":false,"synonym":"Платежное поручение исходящее","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Получатель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"bank_account":{"synonym":"Счет организации","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organization_bank_accounts"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"payment_details":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"Статья движения денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"trans":{"synonym":"Объект расчетов","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order","cat.contracts"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"Сумма платежа","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":2}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc"},"debit_cash_order":{"name":"ПриходныйКассовыйОрдер","splitted":false,"synonym":"Приходный кассовый ордер","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Плательщик","multiline_mode":false,"tooltip":"Контрагент, подотчетник","choice_groups_elm":"elm","type":{"types":["cat.individuals","cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"cashbox":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"payment_details":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"Статья движения денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"trans":{"synonym":"Объект расчетов","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order","cat.contracts"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"Сумма платежа","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":2}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","organization","partner","doc_amount","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"organization","width":"*","type":"ro","align":"left","sort":"na","caption":"Организация"},{"id":"partner","width":"*","type":"ro","align":"left","sort":"na","caption":"Контрагент"},{"id":"doc_amount","width":"160","type":"ro","align":"left","sort":"na","caption":"Сумма"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":[{"id":"number_doc","path":"o.number_doc","type":"ro","synonym":"Номер"},"date","organization","partner","department","cashbox","responsible","note",{"id":"doc_amount","path":"o.doc_amount","type":"ro","synonym":"Сумма документа"}]},"tabular_sections":{"payment_details":{"fields":["row","cash_flow_article","trans","amount"],"headers":"№,Статья,Заказ,Сумма","aligns":"center,left,left,right","sortings":"na,na,na,na","types":"cntr,ref,ref,calck","widths":"50,*,*,120","min_widths":"40,140,140,80"}}}}},"credit_cash_order":{"name":"РасходныйКассовыйОрдер","splitted":false,"synonym":"Расходный кассовый ордер","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Получатель","multiline_mode":false,"tooltip":"Контрагент, подотчетник","choice_groups_elm":"elm","type":{"types":["cat.individuals","cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"cashbox":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"payment_details":{"name":"РасшифровкаПлатежа","synonym":"Расшифровка платежа","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья движения денежных средств","multiline_mode":false,"tooltip":"Статья движения денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"trans":{"synonym":"Объект расчетов","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order","cat.contracts"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"Сумма платежа","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":2}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc"},"selling":{"name":"РеализацияТоваровУслуг","splitted":false,"synonym":"Реализация товаров и услуг","illustration":"Документы отражают факт реализации (отгрузки) товаров","obj_presentation":"Реализация товаров и услуг","list_presentation":"Реализация товаров и услуг","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.organizations"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_buyer","path":true}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.partners"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.divisions"],"is_ref":true}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"Услуга","path":false},{"name":"set","path":false}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"Характеристика номенклатуры","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":3}},"unit":{"synonym":"Ед.","multiline_mode":false,"tooltip":"Единица измерения","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_units"],"is_ref":true}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount_percent":{"synonym":"Процент скидки или наценки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}}}},"services":{"name":"Услуги","synonym":"Услуги","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_params":[{"name":"Услуга","path":true},{"name":"set","path":false}],"choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"content":{"synonym":"Содержание услуги, доп. сведения","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["string"],"str_len":0}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount_percent":{"synonym":"Процент скидки или наценки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":5,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"Документ расчетов с партнером","choice_links":[{"name":["selection","partner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}}},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","organization","partner","doc_amount","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"organization","width":"*","type":"ro","align":"left","sort":"na","caption":"Организация"},{"id":"partner","width":"*","type":"ro","align":"left","sort":"na","caption":"Контрагент"},{"id":"doc_amount","width":"160","type":"ro","align":"left","sort":"na","caption":"Сумма"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":[{"id":"number_doc","path":"o.number_doc","type":"ro","synonym":"Номер"},"date","organization","partner","department","warehouse","responsible","note",{"id":"doc_amount","path":"o.doc_amount","type":"ro","synonym":"Сумма документа"}]},"tabular_sections":{"goods":{"fields":["row","nom","quantity","unit","price","discount_percent","vat_rate","amount","vat_amount","trans"],"headers":"№,Номенклатура,Количество,Ед.,Цена,Скидка,Ставка НДС,Сумма,Сумма НДС,Заказ","aligns":"center,left,right,left,right,right,left,right,right,left","sortings":"na,na,na,na,na,na,na,na,na,na","types":"cntr,ref,calck,ref,calck,calck,ref,calck,ron,ref","widths":"50,*,100,100,100,100,100,100,100,*","min_widths":"40,160,80,80,80,80,80,80,80,80,160"}}}}},"nom_prices_setup":{"name":"УстановкаЦенНоменклатуры","splitted":false,"synonym":"Установка цен номенклатуры","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"price_type":{"synonym":"Тип Цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика или цветогруппа","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_params":[{"name":"color_price_group_destination","path":"ДляЦенообразования"}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics","cat.color_price_groups","cat.clrs"],"is_ref":true,"default":"cat.characteristics"}},"price_type":{"synonym":"Тип Цен","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_prices_types","cat.branches"],"is_ref":true}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":4}}}}},"cachable":"ram","form":{"selection":{"fields":["posted","date","number_doc","price_type","currency","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"price_type","width":"*","type":"ro","align":"left","sort":"na","caption":"Тип цен"},{"id":"currency","width":"120","type":"ro","align":"left","sort":"na","caption":"Валюта"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]},"obj":{"head":{" ":[{"id":"number_doc","path":"o.number_doc","type":"ro","synonym":"Номер"},"date","responsible","note","price_type","currency"]},"tabular_sections":{"goods":{"fields":["row","nom","nom_characteristic","price_type","price"],"headers":"№,Номенклатура,Характеристика,Тип цен,Цена","aligns":"center,left,left,left,right","sortings":"na,na,na,na,na","types":"cntr,ref,ref,ref,calck","widths":"50,*,*,80,90","min_widths":"40,200,140,0,80"}}}}},"planning_event":{"name":"СобытиеПланирования","splitted":false,"synonym":"Событие планирования","illustration":"","obj_presentation":"Событие планирования","list_presentation":"События планирования","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"phase":{"synonym":"Фаза","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.planning_phases"],"is_ref":true}},"key":{"synonym":"Ключ","multiline_mode":false,"tooltip":"","choice_params":[{"name":"applying","path":["НаправлениеДоставки","РабочийЦентр"]}],"choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}},"recipient":{"synonym":"Получатель","multiline_mode":false,"tooltip":"СГП или следующий передел","choice_groups_elm":"elm","type":{"types":["cat.parameters_keys"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_params":[{"name":"is_folder","path":false}],"choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"project":{"synonym":"Проект","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.projects"],"is_ref":true}},"origin":{"synonym":"Происхождение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.planning_event"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"executors":{"name":"Исполнители","synonym":"Исполнители","tooltip":"","fields":{"executor":{"synonym":"Исполнитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.individuals","cat.partners"],"is_ref":true}},"coefficient":{"synonym":"Коэффициент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":3}}}},"planning":{"name":"Планирование","synonym":"Планирование","tooltip":"","fields":{"obj":{"synonym":"Объект","multiline_mode":false,"tooltip":"Если указано - изделие, если пусто - Расчет из шапки","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"specimen":{"synonym":"Экземпляр","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"power":{"synonym":"Мощность","multiline_mode":false,"tooltip":"Трудоемкость или время операции","type":{"types":["number"],"digits":8,"fraction":2}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"Номенклатура работы или услуги события","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"begin_time":{"synonym":"Время начала","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"end_time":{"synonym":"Время окончания","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}}}}},"cachable":"doc"},"purchase_order":{"name":"ЗаказПоставщику","splitted":false,"synonym":"Заказ поставщику","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"contract":{"synonym":"Договор контрагента","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["partner"]},{"name":["selection","organization"],"path":["organization"]}],"choice_groups_elm":"elm","type":{"types":["cat.contracts"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"shipping_date":{"synonym":"Дата поступления","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"settlements_course":{"synonym":"Курс взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":4}},"settlements_multiplicity":{"synonym":"Кратность взаиморасчетов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"bank_account":{"synonym":"Банковский счет","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["partner"]}],"choice_groups_elm":"elm","type":{"types":["cat.partner_bank_accounts"],"is_ref":true}},"vat_included":{"synonym":"Сумма включает НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_consider":{"synonym":"Учитывать НДС","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"obj_delivery_state":{"synonym":"Этап согласования","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Подтвержден","Отклонен","Отправлен","Отозван","Черновик"]}],"choice_groups_elm":"elm","type":{"types":["enm.obj_delivery_states"],"is_ref":true}},"identifier":{"synonym":"Идентификатор","multiline_mode":false,"tooltip":"Идентификатор в учетной системе поставщика","type":{"types":["string"],"str_len":36}}},"tabular_sections":{"goods":{"name":"Товары","synonym":"Товары","tooltip":"","fields":{"identifier":{"synonym":"Идентификатор","multiline_mode":false,"tooltip":"Ид. вставки поставщика","type":{"types":["string"],"str_len":36}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"nom_characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"Характеристика номенклатуры","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"unit":{"synonym":"Ед.","multiline_mode":false,"tooltip":"Единица измерения","choice_links":[{"name":["selection","owner"],"path":["goods","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.nom_units"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":3}},"price":{"synonym":"Цена","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_rate":{"synonym":"Ставка НДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.vat_rates"],"is_ref":true}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}},"params":{"synonym":"Параметры","multiline_mode":true,"tooltip":"Необходимые данной позиции параметры для обсчета сервисом поставщика","type":{"types":["string"],"str_len":0}},"calc_order":{"synonym":"Расчет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}}}}},"cachable":"doc"}},"areg":{},"rep":{"materials_demand":{"name":"materials_demand","splitted":false,"synonym":"Потребность в материалах","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{"calc_order":{"synonym":"Расчет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","choice_params":[{"name":"parent","path":["3220e252-ffcd-11e5-8303-e67fda7f6b46","3220e251-ffcd-11e5-8303-e67fda7f6b46"]}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"scheme":{"synonym":"Вариант настроек","multiline_mode":false,"tooltip":"","choice_params":[{"name":"obj","path":"rep.materials_demand.specification"}],"choice_groups_elm":"elm","type":{"types":["cat.scheme_settings"],"is_ref":true}}},"tabular_sections":{"production":{"name":"Продукция","synonym":"Продукция","tooltip":"","fields":{"use":{"synonym":"Использование","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true},"choice_params":[{"name":"calc_order","path":{"not":"00000000-0000-0000-0000-000000000000"}}]},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"№ элемента","type":{"types":["number"],"digits":6,"fraction":0}},"qty":{"synonym":"Количество, шт","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":3}}}},"specification":{"name":"Спецификация","synonym":"Спецификация","tooltip":"","fields":{"calc_order":{"synonym":"Расчет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"product":{"synonym":"Изделие","multiline_mode":false,"tooltip":"Для продукции - номер строки заказа, для характеристики стеклопакета - номер элемента","type":{"types":["number"],"digits":6,"fraction":0}},"cnstr":{"synonym":"№ Конструкции","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction":0}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"Номер элемента, если значение > 0, либо номер конструкции, если значение < 0","type":{"types":["number"],"digits":6,"fraction":0}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"article":{"synonym":"Артикул","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"id":{"synonym":"Код","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":20}},"clr":{"synonym":"Цвет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["string","cat.clrs"],"str_len":72,"str_fix":true,"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["specification","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"nom_kind":{"synonym":"Вид номенклатуры","multiline_mode":false,"tooltip":"Указывается вид, к которому следует отнести данную позицию номенклатуры.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_kinds"],"is_ref":true}},"price_group":{"synonym":"Ценовая группа","multiline_mode":false,"tooltip":"Актуально для продукций","choice_groups_elm":"elm","type":{"types":["cat.price_groups"],"is_ref":true}},"nom_group":{"synonym":"Номенклатурная группа","multiline_mode":false,"tooltip":"Определяет счета учета и выступает разрезом в расчете себестоимости","choice_groups_elm":"elm","type":{"types":["cat.nom_groups"],"is_ref":true}},"packing":{"synonym":"Нормоупаковка","multiline_mode":false,"tooltip":"Коэффициент нормоураковки (N единиц хранения остатков)","type":{"types":["number"],"digits":8,"fraction":2}},"qty":{"synonym":"Количество (шт)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"len":{"synonym":"Длина, м","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"width":{"synonym":"Ширина, м","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"s":{"synonym":"Площадь, м²","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":6}},"material":{"synonym":"Материал","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":255}},"grouping":{"synonym":"Группировка","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"totqty":{"synonym":"Количество","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":4}},"totqty1":{"synonym":"Количество (+%)","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":14,"fraction":4}},"alp1":{"synonym":"Угол 1, °","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"alp2":{"synonym":"Угол 2, °","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":8,"fraction":2}},"sz":{"synonym":"Размер","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"price":{"synonym":"Себест.план","multiline_mode":false,"tooltip":"Цена плановой себестоимости строки спецификации","type":{"types":["number"],"digits":15,"fraction":2}},"amount":{"synonym":"Сумма себест.","multiline_mode":false,"tooltip":"Сумма плановой себестоимости строки спецификации","type":{"types":["number"],"digits":15,"fraction":2}},"amount_marged":{"synonym":"Сумма с наценкой","multiline_mode":false,"tooltip":"Вклад строки спецификации в стоимость изделия для сценария КМАРЖ_В_СПЕЦИФИКАЦИИ","type":{"types":["number"],"digits":15,"fraction":2}}}}}},"cash":{"name":"cash","splitted":false,"synonym":"Денежные средства","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"register":{"synonym":"Регистратор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.credit_card_order","doc.debit_bank_order","doc.registers_correction","doc.credit_cash_order","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"bank_account_cashbox":{"synonym":"Касса или банковский счет","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organization_bank_accounts","cat.cashboxes"],"is_ref":true}},"initial_balance":{"synonym":"Начальный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"debit":{"synonym":"Приход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"credit":{"synonym":"Расход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"final_balance":{"synonym":"Конечный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}}}}}},"goods":{"name":"goods","splitted":false,"synonym":"Товары на складах","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"register":{"synonym":"Регистратор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.registers_correction","doc.selling","doc.purchase"],"is_ref":true}},"warehouse":{"synonym":"Склад","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.stores"],"is_ref":true}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["data","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"initial_balance":{"synonym":"Начальный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"debit":{"synonym":"Приход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"credit":{"synonym":"Расход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"final_balance":{"synonym":"Конечный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_initial_balance":{"synonym":"Сумма начальный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_debit":{"synonym":"Сумма приход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_credit":{"synonym":"Сумма расход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"amount_final_balance":{"synonym":"Сумма конечный остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}}}}}},"invoice_execution":{"name":"invoice_execution","splitted":false,"synonym":"Исполнение заказов","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"invoice":{"synonym":"Сумма заказа","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"pay":{"synonym":"Оплачено","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"pay_total":{"synonym":"Оплатить","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"pay_percent":{"synonym":"% Оплаты","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"shipment":{"synonym":"Отгружено","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"shipment_total":{"synonym":"Отгрузить","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"shipment_percent":{"synonym":"% Отгрузки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}}}}}},"mutual_settlements":{"name":"mutual_settlements","splitted":false,"synonym":"Взаиморасчеты","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"register":{"synonym":"Регистратор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.credit_card_order","doc.debit_bank_order","doc.registers_correction","doc.credit_cash_order","doc.selling","doc.purchase","doc.debit_cash_order","doc.credit_bank_order"],"is_ref":true}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"initial_balance":{"synonym":"Нач. остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"debit":{"synonym":"Приход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"credit":{"synonym":"Расход","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"final_balance":{"synonym":"Кон. остаток","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}}}}}},"selling":{"name":"selling","splitted":false,"synonym":"Продажи","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Данные","tooltip":"","fields":{"period":{"synonym":"Период","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date"}},"register":{"synonym":"Регистратор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.registers_correction","doc.selling","doc.purchase"],"is_ref":true}},"organization":{"synonym":"Организация","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.organizations"],"is_ref":true}},"department":{"synonym":"Подразделение","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.divisions"],"is_ref":true}},"partner":{"synonym":"Контрагент","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.partners"],"is_ref":true}},"trans":{"synonym":"Сделка","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["doc.calc_order"],"is_ref":true}},"nom":{"synonym":"Номенклатура","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.nom"],"is_ref":true}},"characteristic":{"synonym":"Характеристика","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["data","nom"]}],"choice_groups_elm":"elm","type":{"types":["cat.characteristics"],"is_ref":true}},"quantity":{"synonym":"Количество","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction":3}},"amount":{"synonym":"Сумма","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"vat_amount":{"synonym":"Сумма НДС","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}},"discount":{"synonym":"Сумма скидки","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":15,"fraction":2}}}}}},"formulas_stat":{"name":"formulas_stat","splitted":false,"synonym":"Статистика работы формул","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"data":{"name":"data","synonym":"Data","tooltip":"","fields":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"","type":{"types":["date"],"date_part":"date_time"}},"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"user":{"synonym":"Пользователь","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"suffix":{"synonym":"Суффикс","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":4,"str_fix":true}},"requests":{"synonym":"Вызовов","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}},"time":{"synonym":"Время, mc","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":10,"fraction":0}}}}}}},"cch":{"predefined_elmnts":{"name":"ПредопределенныеЭлементы","splitted":false,"synonym":"Константы и списки","illustration":"Хранит значения настроек и параметров подсистем","obj_presentation":"Значение настроек","list_presentation":"","input_by_string":["name","synonym"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.http_apis","cat.production_params","cat.inserts","cat.price_groups","cat.currencies","cat.color_price_groups","cat.property_values_hierarchy","cat.formulas","cat.property_values","boolean","cat.nom_prices_types","cat.divisions","enm.elm_types","cat.parameters_keys","string","cat.nom_kinds","date","cat.units","number","enm.plan_detailing","doc.calc_order","cat.nom","cat.furns","enm.inserts_glass_types","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date","digits":15,"fraction":3}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним предопределенного элемента латиницей для обращения из javascript","type":{"types":["string"],"str_len":50}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.predefined_elmnts"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cat.http_apis","cat.production_params","cat.inserts","cat.price_groups","cat.currencies","cat.color_price_groups","cat.property_values_hierarchy","cat.formulas","cat.property_values","boolean","cat.nom_prices_types","cat.divisions","enm.elm_types","cat.parameters_keys","string","cat.nom_kinds","date","cat.units","number","enm.plan_detailing","doc.calc_order","cat.nom","cat.furns","enm.inserts_glass_types","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date","digits":15,"fraction":3}}},"tabular_sections":{"elmnts":{"name":"Элементы","synonym":"Элементы","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.http_apis","cat.production_params","cat.inserts","cat.price_groups","cat.currencies","cat.color_price_groups","cat.property_values_hierarchy","cat.formulas","cat.property_values","boolean","cat.nom_prices_types","cat.divisions","enm.elm_types","cat.parameters_keys","string","cat.nom_kinds","date","cat.units","number","enm.plan_detailing","doc.calc_order","cat.nom","cat.furns","enm.inserts_glass_types","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date","digits":15,"fraction":3}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["cat.http_apis","cat.production_params","cat.inserts","cat.price_groups","cat.currencies","cat.color_price_groups","cat.property_values_hierarchy","cat.formulas","cat.property_values","boolean","cat.nom_prices_types","cat.divisions","enm.elm_types","cat.parameters_keys","string","cat.nom_kinds","date","cat.units","number","enm.plan_detailing","doc.calc_order","cat.nom","cat.furns","enm.inserts_glass_types","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date","digits":15,"fraction":3}}}}},"cachable":"ram","form":{"obj":{"head":{" ":[{"id":"name","path":"o.name","synonym":"Наименование","type":"ro"},{"id":"synonym","path":"o.synonym","synonym":"Синоним","type":"ro"},"list","zone","value"]},"tabular_sections":{"elmnts":{"fields":["elm","value"],"headers":"Элемент,Значение","widths":"*,*","min_widths":"150,150","aligns":"","sortings":"na,na","types":"ref,ref"}}}}},"properties":{"name":"ДополнительныеРеквизитыИСведения","splitted":false,"synonym":"Дополнительные реквизиты и сведения","illustration":"","obj_presentation":"Дополнительный реквизит / сведение","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"shown":{"synonym":"Виден","multiline_mode":false,"tooltip":"Настройка видимости дополнительного реквизита","type":{"types":["boolean"]}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Используется для упорядочивания (служебный)","type":{"types":["number"],"digits":6,"fraction":0}},"extra_values_owner":{"synonym":"Владелец дополнительных значений","multiline_mode":false,"tooltip":"Свойство-образец, с которым у этого свойства одинаковый список дополнительных значений","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"available":{"synonym":"Доступен","multiline_mode":false,"tooltip":"Настройка доступности дополнительного реквизита","type":{"types":["boolean"]}},"mandatory":{"synonym":"Заполнять обязательно","multiline_mode":false,"tooltip":"Настройка проверки заполненности дополнительного реквизита","type":{"types":["boolean"]}},"include_to_name":{"synonym":"Включать в наименование","multiline_mode":false,"tooltip":"Добавлять значение параметра в наименование продукции","type":{"types":["boolean"]}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"Реквизит подсистемы интеграции metadata.js - реализует функциональность списка опций","type":{"types":["number"],"digits":1,"fraction":0}},"caption":{"synonym":"Наименование","multiline_mode":false,"tooltip":"Краткое представление свойства, которое\nвыводится в формах редактирования его значения","mandatory":true,"type":{"types":["string"],"str_len":75}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Поясняет назначение свойства","type":{"types":["string"],"str_len":0}},"destination":{"synonym":"Набор свойств","multiline_mode":false,"tooltip":"Набор свойств, которому принадлежит уникальное свойство. Если не задан, значит свойство общее.","choice_groups_elm":"elm","type":{"types":["cat.destinations"],"is_ref":true}},"tooltip":{"synonym":"Подсказка","multiline_mode":false,"tooltip":"Показывается пользователю при редактировании свойства в форме объекта","type":{"types":["string"],"str_len":0}},"is_extra_property":{"synonym":"Это дополнительное сведение","multiline_mode":false,"tooltip":"Свойство является дополнительным сведением, а не дополнительным реквизитом","type":{"types":["boolean"]}},"include_to_description":{"synonym":"Включать в описание","multiline_mode":false,"tooltip":"Добавлять имя и значение параметра в строку описания продукции","type":{"types":["boolean"]}},"calculated":{"synonym":"Вычисляемый","multiline_mode":false,"tooltip":"Если параметр вычисляемый, здесь указываем формулу","choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"showcalc":{"synonym":"Показывать вычисляемый","multiline_mode":false,"tooltip":"Показывать параметр в списках свойств объекта ","type":{"types":["boolean"]}},"inheritance":{"synonym":"Наследование","multiline_mode":false,"tooltip":"Правило уточнения значений свойства","type":{"types":["number"],"digits":6,"fraction":0}},"captured":{"synonym":"Захвачен","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}},"editor":{"synonym":"Редактор","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"type":{"synonym":"","multiline_mode":false,"tooltip":"Типы значения, которое можно ввести при заполнении свойства.","mandatory":true,"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}}},"tabular_sections":{"applying":{"name":"Применение","synonym":"Применение","tooltip":"","fields":{"elm_type":{"synonym":"Тип элемента","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Рама","Створка","Импост","Стекло","Заполнение"]}],"choice_groups_elm":"elm","type":{"types":["enm.elm_types"],"is_ref":true}},"pos":{"synonym":"Положение/ориентация","multiline_mode":false,"tooltip":"","choice_params":[{"name":"ref","path":["Любое","Лев","Прав","Верх","Низ","Центр","Горизонтальная","Вертикальная","Наклонная"]}],"choice_groups_elm":"elm","type":{"types":["enm.orientations","enm.positions"],"is_ref":true}}}},"use":{"name":"use","synonym":"Использование","tooltip":"","fields":{"count_calc_method":{"synonym":"Расчет колич.","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["enm.count_calculating_ways"],"is_ref":true}}}},"hide":{"name":"Скрыть","synonym":"Скрыть","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["selection","owner"],"path":["ref"]}],"choice_groups_elm":"elm","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["cat.nom_groups","enm.coloring","cat.production_params","enm.opening","cat.inserts","cat.templates","cat.price_groups","cat.currencies","enm.open_directions","cat.characteristics","cat.projects","cat.individuals","cat.users","cat.delivery_areas","cat.color_price_groups","cat.elm_visualization","cat.property_values_hierarchy","cat.formulas","cat.delivery_directions","cat.property_values","boolean","cat.divisions","enm.align_types","cat.parameters_keys","cat.partners","cat.nonstandard_attributes","string","enm.sz_line_types","enm.orientations","cat.organizations","date","cat.units","number","enm.plan_detailing","cat.abonents","cat.work_center_kinds","enm.positions","cat.branches","cat.cashboxes","enm.open_types","cat.nom","cat.cnns","cat.furns","enm.vat_rates","enm.nested_object_editing_mode","cat.stores","cch.properties","cat.clrs"],"is_ref":true,"str_len":1024,"date_part":"date_time","digits":15,"fraction":3}}}}},"cachable":"ram"}},"cacc":{},"bp":{},"tsk":{},"syns_1с":["arcCCW","CH","Абонент","Абоненты","Автор","Адрес","АдресБанка","АдресДоставки","АдресСтрокой","АдресЭП","Аксессуар","Активная","Алгоритм","Арт1Стеклопакет","Арт1ТолькоВертикальный","Арт2Стеклопакет","Артикул","Атрибуты","БазоваяЕдиницаИзмерения","Банк","БанкДляРасчетов","Банки","БанковскиеСчета","БанковскиеСчетаКонтрагентов","БанковскиеСчетаОрганизаций","БанковскийСчет","БизнесПроцесс","БИКБанка","БИКБанкаДляРасчетов","Булево","Валюта","ВалютаВзаиморасчетов","ВалютаДенежныхСредств","ВалютаДокумента","ВалютаЦены","Валюты","ВариантАтрибутов","ВариантПереноса","ВариантПути","ВариантСмещения","ВариантСовместногоПрименения","ВариантУкорочения","ВариантыАтрибутовВставок","ВариантыПереносаОпераций","ВариантыСмещений","ВариантыСовместногоПримененияСкидокНаценок","ВариантыУкорочений","ВариантыУравнивания","ВводПоСтроке","ВедениеВзаиморасчетов","ВедениеВзаиморасчетовПоДоговорам","Ведомый","ВедущаяПродукция","ВедущаяФормула","Ведущие","Ведущий","ВедущийМенеджер","ВедущийЭлемент","ВерсияДанных","Вес","Вид","ВидДвижения","ВидДляСписка","ВидДоговора","Виден","ВидЗатрат","ВидНаЭскиз","ВидНоменклатуры","ВидОперации","ВидРабот","ВидРабочегоЦентра","ВидСкидкиНаценки","ВидСравнения","ВидСчета","ВидыДвиженийПриходРасход","ВидыДоговоровКонтрагентов","ВидыЗатрат","ВидыКонтактнойИнформации","ВидыНоменклатуры","ВидыОперацийИнвентаризации","ВидыПолейФормы","ВидыРабочихЦентров","ВидыТранспортныхСредств","Визуализация","ВключатьВНаименование","ВключатьВОписание","Владелец","ВладелецДополнительныхЗначений","Владельцы","ВремяИзменения","ВремяНачала","ВремяОкончания","ВремяСобытия","Всего","Вставка","Вставки","ВстроенныеФормулы","ВыборГруппИЭлементов","Выполнена","ВыпуклаяДуга","ВыравниваниеТекста","Высота","ВысотаМакс","ВысотаМин","ВысотаРучки","ВысотаРучкиМакс","ВысотаРучкиМин","ВысотаРучкиФиксирована","Глубина","Город","ГородБанка","ГородБанкаДляРасчетов","Готовность","ГрафикиДоставки","ГрафикРаботы","Группировка","ГруппыMDM","ГруппыФинансовогоУчетаНоменклатуры","ДаНет","Дата","ДатаДоставки","ДатаИзменения","ДатаНачала","ДатаОкончания","ДатаРождения","ДатаСобытия","Действие","ДействуетС","ДеловаяОбрезь","ДержатьРезервБезОплатыОграниченноеВремя","ДеятельностьПрекращена","Длина","ДлинаКода","ДлинаМакс","ДлинаМин","ДлинаНомера","ДлинаПроема","ДнейДоГотовности","ДнейОтГотовности","ДниНедели","ДоговорКонтрагента","ДоговорыКонтрагентов","Документ.Расчет","ДокументУдостоверяющийЛичность","Долгота","Доп","ДополнительныеБазы","ДополнительныеРеквизиты","ДополнительныеРеквизитыИСведения","ДополнительныеСведения","ДопускаютсяНезамкнутыеКонтуры","ДопустимаяСуммаЗадолженности","ДопустимоеЧислоДнейЗадолженности","Доступен","ЕдиницаИзмерения","ЕдиницаПоКлассификатору","ЕдиницаХраненияОстатков","ЕдиницыИзмерения","Завершен","Завершение","Заголовок","Заказ","Заказной","ЗаказПокупателя","ЗаказПоставщику","Заказы","Закрыт","Закрыть","Запасы","Заполнения","ЗаполнятьОбязательно","Запуск","Значение","ЗначениеЗаполнения","Значения","ЗначенияПолей","ЗначенияПолейАдреса","ЗначенияСвойствОбъектов","ЗначенияСвойствОбъектовИерархия","Идентификатор","ИдентификаторПользователяИБ","Идентификаторы","ИдентификаторыОбъектовМетаданных","Иерархический","ИерархияГруппИЭлементов","Изделие","ИзОбрези","ИмяПредопределенныхДанных","ИнвентаризацияДеловойОбрези","ИнвентаризацияТоваровНаСкладе","Инд","Индекс","ИндивидуальныйПредприниматель","ИНН","ИнтеграцияАбоненты","ИнтеграцияВидыСравнений","ИнтеграцияКешСсылок","ИнтеграцияНастройкиОтчетовИСписков","ИнтеграцияОтделыАбонентов","ИнтеграцияСерверы","ИнтеграцияСостоянияТранспорта","ИнтеграцияТипВыгрузки","ИнтеграцияТипКеширования","ИнтеграцияТипСвёртки","Интернационализация","Исключить","Исполнители","Исполнитель","ИспользованиеВедущих","ИспользованиеОбрези","ИсточникиЛидов","ИтогСебестоимость","Календари","КалендариGoogle","Календарь","Камеры","Касса","Кассы","КатегорииЗаказов","КатегорииПроектов","Категория","КлассификаторБанковРФ","КлассификаторЕдиницИзмерения","КлиентДилера","КлиентыДилеров","Ключ","Ключи","КлючиПараметров","КМарж","КМаржВнутр","КМаржМин","Код","КодАльфа2","КодАльфа3","КодИМНС","КодПоОКПО","КодЦветаДляСтанка","Количество","КоличествоСторон","КоличествоУчет","Комментарий","КонечныйОстаток","Конструкции","Конструкция","КонтактнаяИнформация","КонтактныеЛица","КонтактныеЛицаКонтрагентов","Контрагент","Контрагенты","КонтролироватьСуммуЗадолженности","КонтролироватьЧислоДнейЗадолженности","Координата","Координаты","КоординатыЗаполнений","КорректировкаРегистров","КоррСчет","КоррСчетБанка","КоррСчетБанкаДляРасчетов","Коэффициент","КоэффициентПотерь","КПП","Кратность","КратностьВзаиморасчетов","КрепитсяШтульп","Кривой","Курс","КурсВзаиморасчетов","КурсыВалют","ЛеваяПравая","Лид","Лиды","Листовые","Маржа","Марка","Масса","МассаМакс","МассаМин","МассаСтворкиМакс","МассаСтворкиМин","Материал","МатериалОперация","Материалы","МеждународноеСокращение","Менеджер","МестоРождения","МногострочныйРежим","МожноПоворачивать","Москитка","Москитки","МощностиРЦ","Мощность","Набор","НаборСвойств","НаборСвойствНоменклатура","НаборСвойствХарактеристика","НаборФурнитуры","НаборыДополнительныхРеквизитовИСведений","НазначениеЦветовойГруппы","НазначенияЦветовыхГрупп","Наименование","НаименованиеБанка","НаименованиеПолное","НаименованиеСокращенное","НалогообложениеНДС","Направление","НаправлениеОткрывания","НаправленияДоставки","НаправленияСортировки","НарядРЦ","НастройкиОткрывания","Наценка","НаценкаВнешн","НачальныйОстаток","Недействителен","НеполноеОткрывание","Нестандарт","Номенклатура","Номенклатура1","Номенклатура2","НоменклатурнаяГруппа","Номер","НомерВнутр","НомерЗвена","НомерКлиента","НомерКонтура","НомерОтдела","НомерСтроки","НомерСчета","НомерТелефона","НомерТелефонаБезКодов","ОбластиДоступаGoogle","Область","ОбратныйСервер","Обрезь","Объект","ОбъектДоступа","ОбъектыДоступа","Объем","ОбязательноеЗаполнение","ОграниченияСпецификации","ОГРН","ОкруглятьВБольшуюСторону","ОкруглятьКоличество","Описание","ОплатаОтПокупателяПлатежнойКартой","Организации","Организация","Ориентация","ОриентацияЭлемента","ОсновнаяВалюта","ОсновнаяСтатьяДвиженияДенежныхСредств","ОсновноаяКасса","ОсновноеКонтактноеЛицо","ОсновноеПредставлениеИмя","ОсновнойАдрес","ОсновнойБанковскийСчет","ОсновнойДоговорКонтрагента","ОсновнойМенеджерПокупателя","ОсновнойПроект","ОснЦвет","ОсьПоворота","Отбор","Ответственный","Отдел","Открывание","ОтражатьВБухгалтерскомУчете","ОтражатьВНалоговомУчете","Отступы","Пара","Параметр","Параметры","ПараметрыВыбора","ПараметрыИзделия","ПараметрыОтбора","ПараметрыПрописиНаРусском","ПараметрыФурнитуры","ПарныйРаскрой","Партия","Период","Периоды","ПериодыСмены","пзВизуализацияЭлементов","пзМаржинальныеКоэффициентыИСкидки","пзПараметрыПродукции","пзСоединения","пзФурнитура","пзЦвета","Планирование","ПланироватьДо","ПлатежноеПоручениеВходящее","ПлатежноеПоручениеИсходящее","ПлатежныйКалендарь","Плотность","ПлохойОбрезокМакс","ПлохойОбрезокМин","Площадь","ПлощадьМакс","ПлощадьМин","ПлощадьППМ","Поворачивать","Поворот","ПоДоговоруВЦелом","Подразделение","ПодразделениеПроизводства","Подразделения","Подсказка","Подчиненый","ПоЗаказам","Покупатель","Пол","ПолноеИмя","Положение","ПоложениеСтворокПоИмпостам","ПоложениеЭлемента","ПоложенияЗаголовка","Получатель","ПолФизическихЛиц","Пользователи","Пользователь","ПометкаУдаления","ПорогОкругления","Порядок","ПорядокОкругления","Поставщик","ПоставщикиСВнешнимAPI","ПоступлениеТоваровУслуг","ПоСчетам","Потребность","ПоУмолчанию","Пояснение","Предоплата","ПредопределенныеЭлементы","Предопределенный","Представление","ПредставлениеИдентификатора","ПредставлениеОбъекта","ПредставлениеСписка","Префикс","Привязки","ПривязкиВставок","ПризнакиНестандартов","Применение","ПримененияКлючейПараметров","Принудительно","Приоритет","Приоритеты","Припуск","Приход","ПриходныйКассовыйОрдер","ПриязкаКоординат","Проведен","Продукция","Проект","Проекты","Происхождение","ПромежуточныйРайон","ПромежуточныйСклад","Пропорции","Процент","ПроцентПредоплаты","ПроцентСкидкиНаценки","ПроцентСкидкиНаценкиВнутр","Прочее","Прямоугольный","ПутьSVG","Работники","Работы","РабочиеЦентры","РабочийЦентр","Разделитель","Размер","Размер_B","РазмерМакс","РазмерМин","РазмерФальца","РазмерФурнПаза","Размеры","Район","РайоныДоставки","Раскладка","Раскрой","РасположениеЭлементовУправления","Расход","РасходныйКассовыйОрдер","Расценка","Расчет","РасчетныйСчет","РасчетыСКонтрагентами","РасширенныйРежим","РасшифровкаПлатежа","РеализацияТоваровУслуг","Регион","РежимРедактированияВложенногоОбъекта","Реквизит","РеквизитДопУпорядочивания","Реквизиты","Родитель","Роли","Руководитель","РучкаНаСтороне","СвидетельствоДатаВыдачи","СвидетельствоКодОргана","СвидетельствоНаименованиеОргана","СвидетельствоСерияНомер","СВИФТБИК","СвойстваШаблонов","Свойство","Связи","СвязиПараметров","СвязиПараметровВыбора","СвязьПоТипу","Сделка","Себестоимость","Сервер","Синоним","Система","СистемыПрофилей","СистемыФурнитуры","Скидка","СкидкаВнешн","СкидкиНаценки","Склад","Склады","Скрыть","Сложный","СлоиРаскладки","Служебный","Смена","Смены","Смещение","Событие","СобытиеПланирования","Согласие","Содержание","Соедин","СоединяемыеЭлементы","Соответствие","СоответствиеЦветов","СортировкаВЛистеКомплектации","Состав","Состояние","СостояниеТранспорта","СостоянияЗаданий","СостоянияЗаказовКлиентов","Сотрудник","Сотрудники","Спецификации","Спецификация","СпецификацияЗаполнений","Список","СПокупателем","СпособПредоставления","СпособПриданияЦвета","СпособРасчетаКоличества","СпособРасчетаУгла","СпособУстановкиКурса","СпособыПредоставленияСкидокНаценок","СпособыРасчетаКоличества","СпособыРасчетаУгла","СпособыУстановкиКурсаВалюты","СпособыУстановкиСпецификации","СПоставщиком","СрокДействия","Ссылка","СтавкаНДС","СтавкиНДС","СтандартнаяВысотаРучки","СтандартныйПериод","Старт","СтатусыЗаказов","СтатьиДвиженияДенежныхСредств","СтатьиЗатрат","СтатьяДвиженияДенежныхСредств","СтатьяЗатрат","Створка","СтворкиВРазныхПлоскостях","Стоимость","Сторона","Сторона1","Сторона2","СторонаСоединения","СторонаЭлемента","СтороныСоединений","Страна","СтраныМира","СтраховойНомерПФР","стрНомер","Строка","СтрокаПодключения","СтруктурнаяЕдиница","Сумма","СуммаАвтоматическойСкидки","СуммаВзаиморасчетов","СуммаВключаетНДС","СуммаВнутр","СуммаДокумента","СуммаКонечныйОстаток","СуммаНачальныйОстаток","СуммаНДС","СуммаПриход","СуммаРасход","СуммаСНаценкой","СуммаУпр","Суффикс","СхемаДоставки","СчетУчета","ТаблицаРегистров","ТабличнаяЧасть","ТабличныеЧасти","ТекстКорреспондента","ТекстНазначения","ТекстоваяСтрока","Телефон","Телефоны","ТелефоныБанка","Тип","ТипВставки","ТипВставкиСтеклопакета","ТипДеления","ТипДенежныхСредств","ТипИсходногоДокумента","ТипНоменклатуры","ТиповойБлок","ТипОптимизации","ТипОткрывания","ТипСоединения","ТипСчета","ТипЦен","ТипЦенВнутр","ТипЦенПрайс","ТипЦенСебестоимость","ТипыВставок","ТипыВставокСтеклопакета","ТипыДеленияРаскладки","ТипыДенежныхСредств","ТипыКонтактнойИнформации","ТипыЛидов","ТипыНалогообложенияНДС","ТипыНоменклатуры","ТипыОптимизацийРаскроя","ТипыОткрывания","ТипыРазмерныхЛиний","ТипыСобытий","ТипыСоединений","ТипыСтрокВЗаказ","ТипыСчетов","ТипыЦен","ТипыЦенНоменклатуры","ТипыЭлементов","ТипЭлемента","Товары","Толщина","ТолщинаМакс","ТолщинаМин","ТолькоДляПрямыхПрофилей","ТолькоДляЦенообразования","ТочкаМаршрута","ТранспортныеСредства","УголКГоризонту","УголКГоризонтуМакс","УголКГоризонтуМин","УголМакс","УголМин","УголРеза1","УголРеза2","УголШага","УдлинениеАрки","Узел1","Узел2","Укорочение","Упаковка","Условие","Услуги","УстанавливатьСпецификацию","УстановкаЦенНоменклатуры","Уточнение","УчитыватьНДС","Фаза","ФазыПланирования","ФизическиеЛица","ФизическоеЛицо","Финиш","Формула","ФормулаВнешн","ФормулаВнутр","ФормулаПродажа","ФормулаРасчетаКурса","ФормулаУсловия","Формулы","Фурнитура","Характеристика","ХарактеристикаАксессуаров","ХарактеристикаНоменклатуры","ХарактеристикиНоменклатуры","Хлыст","Цвет","Цвет1","Цвет2","ЦветRAL","Цвета","ЦветВРисовалке","ЦветИзнутри","Цветной","ЦветоваяГруппа","ЦветоЦеновыеГруппы","ЦветСнаружи","Цена","ЦенаВключаетНДС","ЦенаВнутр","ЦеноваяГруппа","ЦеновыеГруппы","Центрировать","ЦеныНоменклатуры","Число","ЧислоДнейРезерваБезОплаты","Шаблон","Шаблоны","Шаг","Ширина","ШиринаПилы","Широта","Штуки","ШтульпБезимпСоед","Экземпляр","Элемент","Элемент1","Элемент2","Элементы","Эскиз","Этап","ЭтапОтправки","Этапы","ЭтапыОтправкиЗаказа","ЭтоАксессуар","ЭтоГруппа","ЭтоДополнительноеСведение","ЭтоНабор","ЭтоОсновнойЭлемент","ЭтоРаздвижка","ЭтоСоединение","ЭтоСтрокаЗаказа","ЭтоСтрокаНабора","ЭтоСтрокаОперации","ЭтоСтрокаСочетанияНоменклатур","ЭтоТехоперация","ЭтоУслуга","ЮрЛицо","ЮрФизЛицо","Язык","Ячейка","Ячейки"],"syns_js":["arc_ccw","changed","abonent","subscribers","author","address","bank_address","shipping_address","adresses_str","email_address","accessory","active","algorithm","art1glass","art1vert","art2glass","article","attributes","base_unit","bank","settlements_bank","banks","bank_accounts","partner_bank_accounts","organization_bank_accounts","bank_account","buisness_process","bank_bic","settlements_bank_bic","boolean","currency","settlements_currency","funds_currency","doc_currency","price_currency","currencies","attrs_option","transfer_option","path_kind","offset_option","application_joint","contraction_option","inset_attrs_options","transfer_operations_options","offset_options","application_mode_kinds","contraction_options","align_types","input_by_string","mutual_settlements","mutual_contract_settlements","slave","leading_product","leading_formula","leadings","master","leading_manager","leading_elm","data_version","heft","kind","record_kind","list_view","contract_kind","shown","cost_kind","sketch_view","nom_kind","transactions_kind","work_kind","work_center_kind","charges_discounts_kind","comparison_type","account_kind","debit_credit_kinds","contract_kinds","costs_kinds","contact_information_kinds","nom_kinds","inventory_kinds","data_field_kinds","work_center_kinds","motor_vehicle_kinds","visualization","include_to_name","include_to_description","owner","extra_values_owner","owners","change_time","begin_time","end_time","event_time","altogether","inset","inserts","predefined_formulas","choice_groups_elm","completed","arc_available","text_aligns","height","hmax","hmin","h_ruch","handle_height_max","handle_height_min","fix_ruch","depth","city","bank_city","settlements_bank_city","readiness","delivery_schedules","worker_schedule","grouping","mdm_groups","nom_groups","yes_no","date","shipping_date","change_date","start_date","expiration_date","birth_date","event_date","action","act_from","biz_cuts","check_days_without_pay","activity_ceased","len","code_length","lmax","lmin","number_doc_len","aperture_len","days_to_execution","days_from_execution","week_days","contract","contracts","Документ.итРасчет","identification_document","longitude","dop","ex_bases","extra_fields","properties","extra_properties","allow_open_cnn","allowable_debts_amount","allowable_debts_days","available","unit","qualifier_unit","storage_unit","nom_units","finished","completion","caption","invoice","made_to_order","buyers_order","purchase_order","orders","closed","close","inventories","glasses","mandatory","launch","value","fill_value","values","values_fields","address_fields","property_values","property_values_hierarchy","identifier","user_ib_uid","ids","meta_ids","hierarchical","group_hierarchy","product","from_cut","predefined_name","inventory_cuts","inventory_goods","icounter","ind","individual_entrepreneur","inn","abonents","comparison_types","integration_links_cache","scheme_settings","branches","servers","obj_delivery_states","unload_type","caching_type","reduce_type","i18n","exclude","executors","executor","use_master","use_cut","lead_src","first_cost_total","calendars","calendars_google","calendar","coffer","cashbox","cashboxes","order_categories","project_categories","category","banks_qualifier","units","client_of_dealer","dealers_clients","key","keys","parameters_keys","marginality","marginality_internal","marginality_min","id","alpha2","alpha3","imns_code","okpo","machine_tools_clr","quantity","side_count","recorded_quantity","note","final_balance","constructions","cnstr","contact_information","contact_persons","contact_persons_partners","partner","partners","check_debts_amount","check_debts_days","coordinate","coordinates","glass_coordinates","registers_correction","correspondent_account","bank_correspondent_account","settlements_bank_correspondent_account","coefficient","loss_factor","kpp","multiplicity","settlements_multiplicity","shtulp_fix_here","crooked","course","settlements_course","currency_courses","left_right","lead","leads","is_sandwich","margin","brand","weight","mmax","mmin","flap_weight_max","flap_weight_min","material","material_operation","materials","international_short","manager","birth_place","multiline_mode","can_rotate","mskt","mosquito","work_centers_performance","power","set","destination","dnom","dcharacteristic","furn_set","destinations","color_price_group_destination","color_price_group_destinations","name","bank_name","name_full","name_short","vat","direction","open_directions","delivery_directions","sort_directions","work_centers_task","open_tunes","extra_charge","extra_charge_external","initial_balance","invalid","partial_opening","nonstandard","nom","nom1","nom2","nom_group","number_doc","number_internal","chain","client_number","contour_number","number_division","row","account_number","phone_number","phone_without_codes","google_access_areas","area","back_server","cuts","obj","acl_obj","acl_objs","volume","mandatory_fields","specification_restrictions","ogrn","rounding_in_a_big_way","rounding_quantity","definition","credit_card_order","organizations","organization","orientation","orientations","main_currency","main_cash_flow_article","main_cashbox","primary_contact","main_presentation_name","main_address","main_bank_account","main_contract","buyer_main_manager","main_project","default_clr","rotation_axis","selection","responsible","branch","opening","accounting_reflect","tax_accounting_reflect","offsets","pair","param","params","choice_params","product_params","selection_params","parameters_russian_recipe","furn_params","double_cut","part","period","periods","work_shift_periodes","elm_visualization","margin_coefficients","production_params","cnns","furns","clrs","planning","plan_detailing","debit_bank_order","credit_bank_order","calendar_payments","density","wsnip_max","wsnip_min","s","smax","smin","coloration_area","rotate","rotated","by_entire_contract","department","department_manufactory","divisions","tooltip","has_owners","by_orders","is_buyer","sex","full_moniker","pos","flap_pos_by_impost","positions","label_positions","recipient","gender","users","user","_deleted","rounding_threshold","sorting","rounding_order","is_supplier","http_apis","purchase","by_invoices","demand","by_default","illustration","prepayment","predefined_elmnts","predefined","presentation","identifier_presentation","obj_presentation","list_presentation","prefix","bindings","insert_bind","nonstandard_attributes","applying","parameters_keys_applying","forcibly","priority","priorities","overmeasure","debit","debit_cash_order","bind_coordinates","posted","production","project","projects","origin","chain_area","chain_warehouse","proportions","rate","prepayment_percent","discount_percent","discount_percent_internal","others","is_rectangular","svg_path","workers","jobs","work_centers","work_center","delimiter","sz","sizeb","sz_max","sz_min","sizefaltz","sizefurn","sizes","delivery_area","delivery_areas","lay","cutting","elm_positions","credit","credit_cash_order","pricing","calc_order","current_account","invoice_payments","extended_mode","payment_details","selling","region","nested_object_editing_mode","field","sorting_field","fields","parent","roles","chief","handle_side","certificate_date_issue","certificate_authority_code","certificate_authority_name","certificate_series_number","swift","template_props","property","links","params_links","choice_links","choice_type","trans","first_cost","server","synonym","sys","sys_profile","sys_furn","discount","discount_external","charges_discounts","warehouse","stores","hide","difficult","lay_regions","ancillary","work_shift","work_shifts","offset","event","planning_event","approval","content","cnn","cnn_elmnts","conformity","clr_conformity","complete_list_sorting","composition","state","obj_delivery_state","task_states","buyers_order_states","employee","staff","specifications","specification","glass_specification","list","with_buyer","application_mode","coloring","count_calc_method","angle_calc_method","course_installation_method","application_joint_kinds","count_calculating_ways","angle_calculating_ways","course_installation_methods","specification_installation_methods","with_supplier","validity","ref","vat_rate","vat_rates","handle_height_base","standard_period","start","invoice_conditions","cash_flow_articles","cost_items","cash_flow_article","cost_item","flap","var_layers","cost","side","sd1","sd2","cnn_side","elm_side","cnn_sides","country","countries","pfr_number","number_str","string","connection_str","organizational_unit","amount","discount_amount_automatic","amount_mutual","vat_included","amount_internal","doc_amount","amount_final_balance","amount_initial_balance","vat_amount","amount_debit","amount_credit","amount_marged","amount_operation","suffix","delivery_scheme","account_accounting","registers_table","tabular_section","tabular_sections","correspondent_text","appointments_text","txt_row","phone","phone_numbers","bank_phone_numbers","type","insert_type","insert_glass_type","split_type","cash_flow_type","original_doc_type","nom_type","base_block","cutting_optimization_type","open_type","cnn_type","account_type","price_type","price_type_internal","price_type_sale","price_type_first_cost","inserts_types","inserts_glass_types","lay_split_types","cash_flow_types","contact_information_types","lead_types","vat_types","nom_types","cutting_optimization_types","open_types","sz_line_types","event_types","cnn_types","specification_order_row_types","account_types","price_types","nom_prices_types","elm_types","elm_type","goods","thickness","tmax","tmin","for_direct_profile_only","for_pricing_only","buisness_process_point","transport_means","angle_hor","ahmax","ahmin","amax","amin","alp1","alp2","step_angle","arc_elongation","node1","node2","contraction","packing","condition","services","set_specification","nom_prices_setup","specify","vat_consider","phase","planning_phases","individuals","individual_person","finish","formula","external_formula","internal_formula","sale_formula","course_calc_formula","condition_formula","formulas","furn","characteristic","accessory_characteristic","nom_characteristic","characteristics","stick","clr","clr1","clr2","ral","colors","clr_str","clr_in","colored","clr_group","color_price_groups","clr_out","price","vat_price_included","price_internal","price_group","price_groups","do_center","nom_prices","number","days_without_pay","template","templates","step","width","saw_width","latitude","is_pieces","shtulp_available","specimen","elm","elm1","elm2","elmnts","outline","stage","sending_stage","stages","order_sending_stages","is_accessory","is_folder","is_extra_property","is_set","is_main_elm","is_sliding","is_cnn","is_order_row","is_set_row","is_procedure_row","is_nom_combinations_row","is_procedure","is_service","legal_person","individual_legal","lang","cell","cells"]});

(function(){
  const {MetaEventEmitter,EnumManager,CatManager,DocManager,DataProcessorsManager,ChartOfCharacteristicManager,ChartOfAccountManager,
    InfoRegManager,AccumRegManager,BusinessProcessManager,TaskManager,CatObj,DocObj,TabularSectionRow,DataProcessorObj,
    RegisterRow,BusinessProcessObj,TaskObj} = $p.constructor.classes;

  const _define = Object.defineProperties;

$p.enm.create('accumulation_record_type');
$p.enm.create('sort_directions');
$p.enm.create('comparison_types');
$p.enm.create('label_positions');
$p.enm.create('data_field_kinds');
$p.enm.create('standard_period');
$p.enm.create('quick_access');
$p.enm.create('report_output');
$p.enm.create('path_kind');
$p.enm.create('inset_attrs_options');
$p.enm.create('transfer_operations_options');
$p.enm.create('offset_options');
$p.enm.create('application_mode_kinds');
$p.enm.create('contraction_options');
$p.enm.create('align_types');
$p.enm.create('mutual_contract_settlements');
$p.enm.create('sketch_view');
$p.enm.create('debit_credit_kinds');
$p.enm.create('contract_kinds');
$p.enm.create('inventory_kinds');
$p.enm.create('predefined_formulas');
$p.enm.create('text_aligns');
$p.enm.create('obj_delivery_states');
$p.enm.create('use_cut');
$p.enm.create('order_categories');
$p.enm.create('color_price_group_destinations');
$p.enm.create('open_directions');
$p.enm.create('rounding_quantity');
$p.enm.create('orientations');
$p.enm.create('opening');
$p.enm.create('plan_detailing');
$p.enm.create('positions');
$p.enm.create('gender');
$p.enm.create('parameters_keys_applying');
$p.enm.create('bind_coordinates');
$p.enm.create('elm_positions');
$p.enm.create('nested_object_editing_mode');
$p.enm.create('lay_regions');
$p.enm.create('buyers_order_states');
$p.enm.create('coloring');
$p.enm.create('application_joint_kinds');
$p.enm.create('count_calculating_ways');
$p.enm.create('angle_calculating_ways');
$p.enm.create('specification_installation_methods');
$p.enm.create('vat_rates');
$p.enm.create('cnn_sides');
$p.enm.create('inserts_types');
$p.enm.create('inserts_glass_types');
$p.enm.create('lay_split_types');
$p.enm.create('contact_information_types');
$p.enm.create('lead_types');
$p.enm.create('nom_types');
$p.enm.create('cutting_optimization_types');
$p.enm.create('open_types');
$p.enm.create('sz_line_types');
$p.enm.create('cnn_types');
$p.enm.create('specification_order_row_types');
$p.enm.create('elm_types');
$p.enm.create('planning_phases');
$p.enm.create('order_sending_stages');
$p.enm.create('individual_legal');
class CchPredefined_elmnts extends CatObj{

  get value() {
    const {_obj, type, _manager} = this;
    const {utils} = _manager._owner.$p;
    const res = _obj ? _obj.value : '';

    if(_obj.is_folder) {
      return '';
    }
    if(typeof res == 'object') {
      return res;
    }
    else if(type.is_ref) {
      if(type.digits && typeof res === 'number') {
        return res;
      }
      if(type.hasOwnProperty('str_len') && !utils.is_guid(res)) {
        return res;
      }
      const mgr = _manager.value_mgr(_obj, 'value', type);
      if(mgr) {
        if(utils.is_data_mgr(mgr)) {
          return mgr.get(res, false);
        }
        else {
          return utils.fetch_type(res, mgr);
        }
      }
      if(res) {
        _manager._owner.$p.record_log(['value', type, _obj]);
        return null;
      }
    }
    else if(type.date_part) {
      return utils.fix_date(_obj.value, true);
    }
    else if(type.digits) {
      return utils.fix_number(_obj.value, !type.hasOwnProperty('str_len'));
    }
    else if(type.types[0] == 'boolean') {
      return utils.fix_boolean(_obj.value);
    }
    else {
      return _obj.value || '';
    }

    return this.characteristic.clr;
  }
  set value(v) {
    const {_obj, _data, _manager} = this;
    if(_obj.value !== v) {
      _manager.emit_async('update', this, {value: _obj.value});
      _obj.value = v.valueOf();
      _data._modified = true;
    }
  }
  get definition(){return this._getter('definition')}
  set definition(v){this._setter('definition',v)}
  get synonym(){return this._getter('synonym')}
  set synonym(v){this._setter('synonym',v)}
  get list(){return this._getter('list')}
  set list(v){this._setter('list',v)}
  get zone(){return this._getter('zone')}
  set zone(v){this._setter('zone',v)}
  get predefined_name(){return this._getter('predefined_name')}
  set predefined_name(v){this._setter('predefined_name',v)}
  get parent(){return this._getter('parent')}
  set parent(v){this._setter('parent',v)}
  get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
  set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}
  get elmnts(){return this._getter_ts('elmnts')}
  set elmnts(v){this._setter_ts('elmnts',v)}}
$p.CchPredefined_elmnts = CchPredefined_elmnts;
class CchPredefined_elmntsElmntsRow extends TabularSectionRow{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
}
$p.CchPredefined_elmntsElmntsRow = CchPredefined_elmntsElmntsRow;
class CchPredefined_elmntsManager extends ChartOfCharacteristicManager {

  constructor(owner, class_name) {
    super(owner, class_name);
    Object.defineProperty(this, 'parents', {
      value: {}
    });

    const {md, doc, adapters} = this._owner.$p;

    adapters.pouch.once('pouch_doc_ram_loaded', () => {
      // загружаем предопределенные элементы
      this.job_prms();
      // рассчеты, помеченные, как шаблоны, загрузим в память заранее
      doc.calc_order.load_templates && setTimeout(doc.calc_order.load_templates.bind(doc.calc_order), 1000);
      // даём возможность завершиться другим обработчикам, подписанным на _pouch_load_data_loaded_
      setTimeout(() => md.emit('predefined_elmnts_inited'), 100);
    });
  }

  /**
   * этот метод адаптер вызывает перед загрузкой doc_ram
   */
  job_prms() {

    // создаём константы из alatable
    this.forEach((row) => this.job_prm(row));

    // дополним автовычисляемыми свойствами, если им не назначены формулы
    const {job_prm: {properties}} = this._owner.$p;
    if(properties) {
      const {calculated, width, length} = properties;
      if(width && !width.is_calculated) {
        calculated.push(width);
        width._calculated_value = {execute: (obj) => obj && obj.calc_order_row && obj.calc_order_row.width || 0};
      }
      if(length && !length.is_calculated) {
        calculated.push(length);
        length._calculated_value = {execute: (obj) => obj && obj.calc_order_row && obj.calc_order_row.len || 0};
      }
    }
  }

  /**
   * создаёт константу
   * @param row
   */
  job_prm(row) {
    const {job_prm, md, utils, enm: {inserts_glass_types: igt}, cat: {property_values_hierarchy: vh}} = this._owner.$p;
    const {parents} = this;
    const parent = job_prm[parents[row.parent.valueOf()]];
    const _mgr = row.type.is_ref && md.mgr_by_class_name(row.type.types[0]);

    if(parent) {
      if(parent.synonym === 'lists' || !row.synonym) {
        return;
      }
      if(parent.hasOwnProperty(row.synonym)) {
        delete parent[row.synonym];
      }

      if(row.list == -1) {
        parent.__define(row.synonym, {
          value: (() => {
            const res = {};
            (row.elmnts._obj || row.elmnts).forEach(({elm, value}) => {
              if(elm !== undefined) {
                res[elm.valueOf()] = _mgr ? _mgr.get(value, false, false) : value;
              }
            });
            return res;
          })(),
          configurable: true,
          enumerable: true,
          writable: true,
        });
      }
      else if(row.list) {
        if(row.synonym === 'glass_chains') {
          const value = [];
          const tmp = [];
          let name;
          for(const elm of row.elmnts) {
            if(elm.elm) {
              name = elm.elm;
            }
            if(elm.value) {
              tmp.push(igt.get(elm.value));
            }
            else {
              if(tmp.length) {
                const chain = tmp.splice(0);
                if(name) {
                  Object.defineProperty(chain, 'name', {value: utils.is_guid(name) ? vh.get(name) : name});
                  name = '';
                }
                value.push(chain);
              }
            }
          }
          parent.__define(row.synonym, {
            value,
            configurable: true,
            enumerable: true,
          });
        }
        else {
          parent.__define(row.synonym, {
            value: (row.elmnts._obj || row.elmnts).map((row) => {
              if(_mgr) {
                const value = _mgr.get(row.value, false, false);
                if(!utils.is_empty_guid(row.elm)) {
                  value._formula = row.elm;
                }
                return value;
              }
              else {
                return row.value;
              }
            }),
            configurable: true,
            enumerable: true,
            writable: true,
          });
        }
      }
      else if(row.predefined_name === 'abonent') {
        const {by_ref} = $p.cch.properties;
        row.elmnts.forEach((row) => {
          const property = by_ref[row.property];
          if(!property || !property.predefined_name) return;
          const _mgr = property.type.is_ref && md.mgr_by_class_name(property.type.types[0]);
          parent.__define(property.predefined_name, {
            value: _mgr ? _mgr.get(row.value, false, false) : row.value,
            configurable: true,
            enumerable: true,
            writable: true,
          });
        });
      }
      else {
        parent.__define(row.synonym, {
          value: _mgr ? _mgr.get(row.value, false, false) : row.value,
          configurable: true,
          enumerable: true,
          writable: true,
        });
      }
    }
    else {
      $p.record_log({
        class: 'error',
        note: `no parent for ${row.synonym}`,
      });
    }
  }

  /**
   * переопределяем load_array
   * @param aattr {Array.<Object>}
   * @param [forse] {Boolean}
   * @override
   */
  load_array(aattr, forse) {
    const {job_prm} = this._owner.$p;
    const {parents} = this;
    const elmnts = [];
    for (const row of aattr) {
      // если элемент является папкой, создаём раздел в job_prm
      if(row.is_folder && row.synonym) {
        parents[row.ref] = row.synonym;
        !job_prm[row.synonym] && job_prm.__define(row.synonym, {value: {}});
      }
      // если не задан синоним - пропускаем
      else if(row.synonym) {
        const parent = parents[row.parent];
        // если есть подходящая папка, стразу делаем константу
        if(parent && parent.synonym !== 'lists') {
          !job_prm[parents[row.parent]][row.synonym] && this.job_prm(row);
        }
        // если папки нет - сохраним элемент в alatable
        else {
          elmnts.push(row);
        }
      }
      else {
        elmnts.push(row);
      }
    }
    // метод по умолчанию
    elmnts.length && super.load_array(elmnts, forse);
  }

}
$p.cch.create('predefined_elmnts', CchPredefined_elmntsManager, false);
class CchProperties extends CatObj{
get shown(){return this._getter('shown')}
set shown(v){this._setter('shown',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get extra_values_owner(){return this._getter('extra_values_owner')}
set extra_values_owner(v){this._setter('extra_values_owner',v)}
get available(){return this._getter('available')}
set available(v){this._setter('available',v)}
get mandatory(){return this._getter('mandatory')}
set mandatory(v){this._setter('mandatory',v)}
get include_to_name(){return this._getter('include_to_name')}
set include_to_name(v){this._setter('include_to_name',v)}
get list(){return this._getter('list')}
set list(v){this._setter('list',v)}
get caption(){return this._getter('caption')}
set caption(v){this._setter('caption',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get destination(){return this._getter('destination')}
set destination(v){this._setter('destination',v)}
get tooltip(){return this._getter('tooltip')}
set tooltip(v){this._setter('tooltip',v)}
get is_extra_property(){return this._getter('is_extra_property')}
set is_extra_property(v){this._setter('is_extra_property',v)}
get include_to_description(){return this._getter('include_to_description')}
set include_to_description(v){this._setter('include_to_description',v)}
get calculated(){return this._getter('calculated')}
set calculated(v){this._setter('calculated',v)}
get showcalc(){return this._getter('showcalc')}
set showcalc(v){this._setter('showcalc',v)}
get inheritance(){return this._getter('inheritance')}
set inheritance(v){this._setter('inheritance',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}
get applying(){return this._getter_ts('applying')}
set applying(v){this._setter_ts('applying',v)}
get use(){return this._getter_ts('use')}
set use(v){this._setter_ts('use',v)}
get hide(){return this._getter_ts('hide')}
set hide(v){this._setter_ts('hide',v)}


  /**
   * Является ли значение параметра вычисляемым
   *
   * @type Boolean
   */
  get is_calculated() {
    return ($p.job_prm.properties.calculated || []).includes(this) || !this.calculated.empty();
  }

  get show_calculated() {
    return ($p.job_prm.properties.show_calculated || []).includes(this) || this.showcalc;
  }

  /**
   * Рассчитывает значение вычисляемого параметра
   * @param obj {Object}
   * @param [obj.row]
   * @param [obj.elm]
   * @param [obj.ox]
   */
  calculated_value(obj) {
    if(!this._calculated_value) {
      if(this._formula) {
        this._calculated_value = $p.cat.formulas.get(this._formula);
      }
      else if(!this.calculated.empty()) {
        this._calculated_value = this.calculated;
      }
      else {
        return;
      }
    }
    return this._calculated_value.execute(obj);
  }

  /**
   * Проверяет условие в строке отбора
   */
  check_condition({row_spec, prm_row, elm, elm2, cnstr, origin, ox, calc_order, layer, calc_order_row}) {

    if(this.empty()) {
      return true;
    }
    const {is_calculated, type} = this;
    const {utils, enm: {comparison_types, predefined_formulas}, EditorInvisible: {BuilderElement}} = $p;
    const ct = prm_row.comparison_type || comparison_types.eq;

    if(!layer) {
      if(elm instanceof BuilderElement) {
        layer = elm.layer;
      }
      else if(elm2 instanceof BuilderElement) {
        layer = elm2.layer;
      }
    }

    // для параметров алгоритма, фильтр отключаем
    if((prm_row.origin == 'algorithm') || (row_spec && row_spec.algorithm === predefined_formulas.clr_prm &&
      (ct.empty() || ct === comparison_types.eq) && type.types.includes('cat.clrs') && (!prm_row.value || prm_row.value.empty()))) {
      return true;
    }

    // значение параметра
    const val = is_calculated ? this.calculated_value({
      row: row_spec,
      cnstr: cnstr || 0,
      elm,
      elm2,
      ox,
      calc_order,
      prm_row,
      layer,
      calc_order_row,
    }) : this.extract_value(prm_row);

    let ok = false;

    // если сравнение на равенство - решаем в лоб, если вычисляемый параметр типа массив - выясняем вхождение значения в параметр
    if(ox && !Array.isArray(val) && (ct.empty() || ct === comparison_types.eq)) {
      if(is_calculated) {
        ok = val == prm_row.value;
      }
      else {
        const value = layer ? layer.extract_pvalue({param: this, cnstr, elm, origin, prm_row}) : this.extract_pvalue({ox, cnstr, elm, origin, prm_row});
        ok = value == val;
      }
    }
    // вычисляемый параметр - его значение уже рассчитано формулой (val) - сравниваем со значением в строке ограничений
    else if(is_calculated) {
      const value = this.extract_value(prm_row);
      ok = utils.check_compare(val, value, ct, comparison_types);
    }
    // параметр явно указан в табчасти параметров изделия
    else {
      const value = layer ? layer.extract_pvalue({param: this, cnstr, elm, origin, prm_row}) : this.extract_pvalue({ox, cnstr, elm, origin, prm_row});
      ok = (value !== undefined) && utils.check_compare(value, val, ct, comparison_types);
    }
    return ok;
  }

  /**
   * Извлекает значение из объекта (то, что будем сравнивать с extract_value)
   */
  extract_pvalue({ox, cnstr, elm = {}, origin, layer, prm_row}) {
    
    // для некоторых параметров, значения живут не в изделии, а в отделе абонента
    if(this.inheritance === 3) {
      return this.branch_value({project: elm.project, cnstr, ox});
    }

    let prow, cnstr0, elm0;
    const {product_params, params} = ox;
    const find_nearest = () => {
      if(cnstr && ox.constructions) {
        cnstr0 = cnstr;
        elm0 = elm;
        elm = {};
        const crow = ox.constructions.find({cnstr});
        crow && ox.constructions.find_rows({parent: crow.parent}, (row) => {
          if(row !== crow) {
            cnstr = row.cnstr;
            return false;
          }
        });
      }
    };
    if(params) {
      const {enm: {plan_detailing}, utils, CatInserts} = $p;
      let src = prm_row.origin;
      if(src === plan_detailing.algorithm) {
        src = plan_detailing.get();
      }
      if(src && !src.empty()) {
        switch (src) {
        case plan_detailing.order:
          const prow = ox.calc_order.extra_fields.find(this.ref, 'property');
          return prow && prow.value;
          
        case plan_detailing.nearest:
          find_nearest();
          break;
          
        case plan_detailing.layer_active:
          if(!layer) {
            layer = elm.layer;
          }
          if(layer && layer.furn.shtulp_kind() === 2) {
            find_nearest();
          }
          break;
          
        case plan_detailing.layer_passive:
          if(!layer) {
            layer = elm.layer;
          }
          if(layer && layer.furn.shtulp_kind() === 1) {
            find_nearest();
          }
          break;
          
        case plan_detailing.parent:
          if(cnstr && ox.constructions) {
            cnstr0 = cnstr;
            elm0 = elm;
            elm = {};
            const crow = ox.constructions.find({cnstr});
            const prow = ox.constructions.find({cnstr: crow.parent});
            if(crow) {
              cnstr = (prow && prow.parent === 0) ? 0 : crow.parent;
            }
          }
          break;
          
        case plan_detailing.product:
          if(cnstr) {
            cnstr0 = cnstr;
            elm0 = elm;
            cnstr = 0;
            elm = {};
          }
          break;
          
        case plan_detailing.elm:
        case plan_detailing.layer:
          break;
          
        default:
          throw `Источник '${src.name}' не поддержан`;
        }
      }
      const inset = (!src || src.empty()) ? ((origin instanceof CatInserts) ? origin : utils.blank.guid) : utils.blank.guid;
      const {rnum} = elm;
      if(rnum) {
        return elm[this.valueOf()];
      }
      else {
        params.find_rows({
          param: this,
          cnstr: cnstr || (elm._row ? {in: [0, -elm._row.elm]} : 0),
          inset,
        }, (row) => {
          if(!prow || row.cnstr) {
            prow = row;
          }
        });
      }
      if(!prow && (cnstr0 || elm0)) {
        params.find_rows({
          param: this,
          cnstr: cnstr0 || (elm0._row ? {in: [0, -elm0._row.elm]} : 0),
          inset,
        }, (row) => {
          if(!prow || row.cnstr) {
            prow = row;
          }
        });
      }
    }
    else if(product_params) {
      product_params.find_rows({
        elm: elm.elm || 0,
        param: this
      }, (row) => {
        prow = row;
        return false;
      });
    }
    return prow && prow.value;
  }

  /**
   * Извлекает значение из строки условия (то, с чем сравнивать extract_pvalue)
   */
  extract_value({comparison_type, txt_row, value}) {

    const {enm: {comparison_types}, md, cat} = $p;

    switch (comparison_type) {

    case comparison_types.in:
    case comparison_types.nin:

      if(value instanceof CatColor_price_groups) {
        return value.clrs();
      }
      else if(!txt_row) {
        return value;
      }
      try {
        const arr = JSON.parse(txt_row);
        const {types, is_ref} = this.type;
        if(types && is_ref && arr.length) {
          let mgr;
          for(const type of types) {
            const tmp = md.mgr_by_class_name(type);
            if(tmp && arr.some(ref => tmp.by_ref[ref])) {
              mgr = tmp;
              break;
            }
          }
          if(!mgr) {
            return arr;
          }
          else if(mgr === cat.color_price_groups) {
            const res = [];
            for(const ref of arr) {
              const cg = mgr.get(ref, false);
              if(cg) {
                res.push(...cg.clrs());
              }
            }
            return res;
          }
          return arr.map((ref) => mgr.get(ref, false)).filter(v => v && !v.empty());
        }
        return arr;
      }
      catch (err) {
        return value;
      }

    default:
      return value;
    }
  }

  /**
   * Возвращает значение параметра с приведением типов
   * @param v
   */
  fetch_type(v) {
    const {type, _manager} = this;
    const {utils} = $p;
    if(type.is_ref) {

      if(type.digits && typeof v === 'number') {
        return v;
      }

      if(type.hasOwnProperty('str_len') && !utils.is_guid(v)) {
        return v;
      }

      const mgr = _manager.value_mgr({v}, 'v', type);
      if(mgr) {
        if(utils.is_data_mgr(mgr)) {
          return mgr.get(v, false, false);
        }
        else {
          return utils.fetch_type(v, mgr);
        }
      }

      if(v) {
        return null;
      }

    }
    else if(type.date_part) {
      return utils.fix_date(v, true);
    }
    else if(type.digits) {
      return utils.fix_number(v, !type.hasOwnProperty('str_len'));
    }
    else if(type.types[0] == 'boolean') {
      return utils.fix_boolean(v);
    }
    else if(type.types[0] == 'json') {
      return typeof v === 'object' ? v : {};
    }
    return v;
  }

  /**
   * Возвращает массив связей текущего параметра
   */
  params_links(attr) {

    // первым делом, выясняем, есть ли ограничитель на текущий параметр
    if(!this.hasOwnProperty('_params_links')) {
      this._params_links = $p.cat.params_links.find_rows({slave: this});
    }

    return this._params_links.filter((link) => {
      //use_master бывает 0 - один ведущий, 1 - несколько ведущих через И, 2 - несколько ведущих через ИЛИ
      const use_master = link.use_master || 0;
      let ok = true && use_master < 2;
      //в зависимости от use_master у нас массив либо из одного, либо из нескольких ключей ведущиъ для проверки
      const arr = !use_master ? [{key: link.master}] : link.leadings;

      arr.forEach((row_key) => {
        let ok_key = true;
        // для всех записей ключа параметров сначала строим Map ИЛИ
        const or = new Map();
        for(const row of row_key.key.params) {
          if(!or.has(row.area)) {
            or.set(row.area, []);
          }
          or.get(row.area).push(row);
        }
        for(const grp of or.values()) {
          let grp_ok = true;
          for(const row of grp) {
            // выполнение условия рассчитывает объект CchProperties
            grp_ok = row.property.check_condition({
              cnstr: attr.grid ? attr.grid.selection.cnstr : 0,
              ox: attr.obj._owner ? attr.obj._owner._owner : attr.obj.ox,
              prm_row: row,
              elm: attr.obj,
              layer: attr.layer,
            });
            // если строка условия в ключе не выполняется, то дальше проверять его условия смысла нет
            if (!grp_ok) {
              break;
            }
          }
          ok_key = grp_ok;
          if(ok_key) {
            break;
          }
        }

        //Для проверки через ИЛИ логика накопительная - надо проверить все ключи до единого
        if (use_master == 2){
          ok = ok || ok_key;
        }
        //Для проверки через И достаточно найти один неподходящий ключ, чтобы остановиться и признать связь неподходящей
        else if (!ok_key){
          ok = false;
          return false;
        }
      });
      //Конечный возврат в функцию фильтрации массива связей
      return ok;
    });
  }

  /**
   * Проверяет и при необходимости перезаполняет или устанваливает умолчание value в prow
   * @param links {Array}
   * @param [prow] {Object} - Eсли задан и текущее значение недопустимо, метод попытается установить корректное
   * @param [values] {Array} - Выходной параметр, если передать его снаружы, будет наполнен доступными значениями
   * @return {boolean}
   */
  linked_values(links, prow, values = []) {
    let changed;
    // собираем все доступные значения в одном массиве
    links.forEach((link) => link.append_values(values));
    // если значение доступно в списке - спокойно уходим
    const value = prow?.value;
    if(value instanceof CatClrs && value.is_composite()) {
      const {clr_in, clr_out} = value;
      if(!prow || (values.some(({_obj}) => _obj.value == clr_in) && values.some(({_obj}) => _obj.value == clr_out))) {
        return;
      }
    }
    else {
      if(!prow || values.some(({_obj}) => _obj.value == value)) {
        return;
      }
    }
    // если есть явный default - устанавливаем
    if(values.some((row) => {
      if(row.forcibly) {
        prow.value = row._obj.value;
        return true;
      }
      if(row.by_default && (!value || value.empty?.())) {
        prow.value = row._obj.value;
        changed = true;
      }
    })) {
      return true;
    }
    // если не нашли лучшего, установим первый попавшийся
    if(changed) {
      return true;
    }
    if(values.length) {
      prow.value = values[0]._obj.value;
      return true;
    }
  }

  /**
   * Значение, уточняемое отделом абонента
   * @param [project] {Scheme}
   * @param [cnstr] {Number}
   * @param [ox] {CatCharacteristics}
   */
  branch_value({project, cnstr = 0, ox}) {
    let branch = project?.branch;
    if(!branch && ox) {
      branch = ox.calc_order?.organization?._extra?.('branch');
      if(!branch || branch.empty()) {
        branch = ox.calc_order?.manager?.branch;
      }
    }
    let brow = branch && branch.extra_fields.find({property: this});
    if(brow) {
      return brow.value;
    }
    if(ox) {
      const {blank} = $p.utils;
      brow = ox.params.find({param: this, cnstr, inset: blank.guid});
      if(!brow && cnstr) {
        brow = ox.params.find({param: this, cnstr: 0, inset: blank.guid});
      }
    }
    return brow ? brow.value : this.fetch_type();
  }

  /**
   * Дополняет отбор фильтром по параметрам выбора,
   * используется в полях ввода экранных форм
   * @param filter {Object} - дополняемый фильтр
   * @param attr {Object} - атрибуты OCombo
   */
  filter_params_links(filter, attr, links) {
    // для всех отфильтрованных связей параметров
    if(!links) {
      links = this.params_links(attr);
    }
    links.forEach((link) => {
      // если ключ найден в параметрах, добавляем фильтр
      if(!filter.ref) {
        filter.ref = {in: []};
      }
      if(filter.ref.in) {
        link.append_values([]).forEach(({_obj}) => {
          if(!filter.ref.in.includes(_obj.value)) {
            filter.ref.in.push(_obj.value);
          }
        });
      }
    });
  }}
$p.CchProperties = CchProperties;
class CchPropertiesApplyingRow extends TabularSectionRow{
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get pos(){return this._getter('pos')}
set pos(v){this._setter('pos',v)}
}
$p.CchPropertiesApplyingRow = CchPropertiesApplyingRow;
class CchPropertiesUseRow extends TabularSectionRow{
get count_calc_method(){return this._getter('count_calc_method')}
set count_calc_method(v){this._setter('count_calc_method',v)}
}
$p.CchPropertiesUseRow = CchPropertiesUseRow;
class CchPropertiesHideRow extends TabularSectionRow{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CchPropertiesHideRow = CchPropertiesHideRow;
class CchPropertiesManager extends ChartOfCharacteristicManager {

  /**
   * Проверяет заполненность обязательных полей
   *
   * @override
   * @param prms {Array}
   * @param title {String}
   * @return {Boolean}
   */
  check_mandatory(prms, title) {

    let t, row;

    // проверяем заполненность полей
    for (t in prms) {
      row = prms[t];
      if(row.param.mandatory && (!row.value || row.value.empty())) {
        $p.msg.show_msg({
          type: 'alert-error',
          text: $p.msg.bld_empty_param + row.param.presentation,
          title: title || $p.msg.bld_title
        });
        return true;
      }
    }
  }

  /**
   * Возвращает массив доступных для данного свойства значений
   *
   * @override
   * @param prop {CatObj} - планвидовхарактеристик ссылка или объект
   * @param ret_mgr {Object} - установить в этом объекте указатель на менеджера объекта
   * @return {Array}
   */
  slist(prop, ret_mgr) {

    let res = [], rt, at, pmgr, op = this.get(prop);

    if(op && op.type.is_ref) {
      const tso = $p.enm.open_directions;

      // параметры получаем из локального кеша
      for (rt in op.type.types)
        if(op.type.types[rt].indexOf('.') > -1) {
          at = op.type.types[rt].split('.');
          pmgr = $p[at[0]][at[1]];
          if(pmgr) {

            if(ret_mgr) {
              ret_mgr.mgr = pmgr;
            }

            if(pmgr === tso) {
              pmgr.get_option_list().forEach((v) => v.value && v.value != tso.folding && res.push(v));
            }
            else if(pmgr.class_name.indexOf('enm.') != -1 || !pmgr.metadata().has_owners) {
              res = pmgr.get_option_list();
            }
            else {
              pmgr.find_rows({owner: prop}, (v) => res.push({value: v.ref, text: v.presentation}));
            }
          }
        }
    }
    return res;
  }

  load_array(aattr, forse) {
    super.load_array(aattr, forse);
    const {job_prm} = this._owner.$p;
    if(!job_prm.properties) {
      job_prm.__define('properties', {value: {}});
    }
    const parent = job_prm.properties;
    for (const row of aattr) {
      if(row.predefined_name) {
        parent.__define(row.predefined_name, {
          value: this.get(row, false, false),
          configurable: true,
          enumerable: true,
          writable: true,
        });
      }
    }
  }

}
$p.cch.create('properties', CchPropertiesManager, false);
class CatParams_links extends CatObj{
get master(){return this._getter('master')}
set master(v){this._setter('master',v)}
get slave(){return this._getter('slave')}
set slave(v){this._setter('slave',v)}
get hide(){return this._getter('hide')}
set hide(v){this._setter('hide',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get use_master(){return this._getter('use_master')}
set use_master(v){this._setter('use_master',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get leadings(){return this._getter_ts('leadings')}
set leadings(v){this._setter_ts('leadings',v)}
get values(){return this._getter_ts('values')}
set values(v){this._setter_ts('values',v)}


  /**
   * Дополеняет массив разрешенными в текущей связи значениями
   * @param values {Array}
   * @param with_clr_grp {Boolean} - с учетом цветоценовых групп
   * @return {Array}
   */
  append_values(values = []) {
    this.values.forEach((row) => {
      if(row.value instanceof CatColor_price_groups) {
        for(const value of row.value.clrs()) {
          values.push({
            value,
            _obj: {value: value.valueOf()},
          });
        }
      }
      else if(row.value && row.value.is_folder) {
        row.value._manager.find_rows({parent: row.value}, (value) => {
          !value.is_folder && values.push({
            value,
            _obj: {value: value.valueOf()},
          });
        });
      }
      else {
        values.push(row);
      }
    });
    return values;
  }}
$p.CatParams_links = CatParams_links;
class CatParams_linksLeadingsRow extends TabularSectionRow{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
}
$p.CatParams_linksLeadingsRow = CatParams_linksLeadingsRow;
class CatParams_linksValuesRow extends TabularSectionRow{
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
get forcibly(){return this._getter('forcibly')}
set forcibly(v){this._setter('forcibly',v)}
}
$p.CatParams_linksValuesRow = CatParams_linksValuesRow;
$p.cat.create('params_links');
class CatChoice_params extends CatObj{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get runtime(){return this._getter('runtime')}
set runtime(v){this._setter('runtime',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get field(){return this._getter('field')}
set field(v){this._setter('field',v)}
get disabled(){return this._getter('disabled')}
set disabled(v){this._setter('disabled',v)}
get composition(){return this._getter_ts('composition')}
set composition(v){this._setter_ts('composition',v)}
}
$p.CatChoice_params = CatChoice_params;
class CatChoice_paramsCompositionRow extends TabularSectionRow{
get field(){return this._getter('field')}
set field(v){this._setter('field',v)}
}
$p.CatChoice_paramsCompositionRow = CatChoice_paramsCompositionRow;
class CatChoice_paramsManager extends CatManager {

  load_array(aattr, forse) {
    const objs = super.load_array(aattr, forse);
    const {md, utils, enm: {comparison_types}} = $p;
    // бежим по загруженным объектам
    for(const obj of objs) {
      // учитываем только те, что не runtime
      if(obj.runtime) {
        continue;
      }
      // пропускаем отключенные
      if(obj.disabled) {
        continue;
      }
      // выполняем формулу условия
      if(!obj.condition_formula.empty() && !obj.condition_formula.execute(obj)) {
        continue;
      }
      // для всех полей из состава метаданных
      obj.composition.forEach(({field}) => {
        const path = field.split('.');
        const mgr = md.mgr_by_class_name(`${path[0]}.${path[1]}`);
        if(!mgr) {
          return;
        }
        // получаем метаданные поля
        let mf = mgr.metadata(path[2]);
        if(path.length >= 4) {
          mf = mf.fields[path[3]];
        }
        if(!mf) {
          return;
        }
        if(!mf.choice_params) {
          mf.choice_params = [];
        }
        // дополняем отбор
        obj.key.params.forEach((row) => {
          const {_obj, comparison_type, property} = row;
          let v
          if(!property.empty()) {
            v = property.extract_value(row);
          }
          else if(_obj.txt_row) {
            v = _obj.txt_row.split(',');
          }
          else if(_obj.value) {
            v = _obj.value;
          }
          else {
            return;
          }
          mf.choice_params.push({
            name: obj.field || 'ref',
            path: {[comparison_type.valueOf()]: v}
          });
        });
      });
    }
    return objs;
  }
}
$p.cat.create('choice_params', CatChoice_paramsManager, false);
class CatPartner_bank_accounts extends CatObj{
get account_number(){return this._getter('account_number')}
set account_number(v){this._setter('account_number',v)}
get bank(){return this._getter('bank')}
set bank(v){this._setter('bank',v)}
get settlements_bank(){return this._getter('settlements_bank')}
set settlements_bank(v){this._setter('settlements_bank',v)}
get correspondent_text(){return this._getter('correspondent_text')}
set correspondent_text(v){this._setter('correspondent_text',v)}
get appointments_text(){return this._getter('appointments_text')}
set appointments_text(v){this._setter('appointments_text',v)}
get funds_currency(){return this._getter('funds_currency')}
set funds_currency(v){this._setter('funds_currency',v)}
get bank_bic(){return this._getter('bank_bic')}
set bank_bic(v){this._setter('bank_bic',v)}
get bank_name(){return this._getter('bank_name')}
set bank_name(v){this._setter('bank_name',v)}
get bank_correspondent_account(){return this._getter('bank_correspondent_account')}
set bank_correspondent_account(v){this._setter('bank_correspondent_account',v)}
get bank_city(){return this._getter('bank_city')}
set bank_city(v){this._setter('bank_city',v)}
get bank_address(){return this._getter('bank_address')}
set bank_address(v){this._setter('bank_address',v)}
get bank_phone_numbers(){return this._getter('bank_phone_numbers')}
set bank_phone_numbers(v){this._setter('bank_phone_numbers',v)}
get settlements_bank_bic(){return this._getter('settlements_bank_bic')}
set settlements_bank_bic(v){this._setter('settlements_bank_bic',v)}
get settlements_bank_correspondent_account(){return this._getter('settlements_bank_correspondent_account')}
set settlements_bank_correspondent_account(v){this._setter('settlements_bank_correspondent_account',v)}
get settlements_bank_city(){return this._getter('settlements_bank_city')}
set settlements_bank_city(v){this._setter('settlements_bank_city',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
}
$p.CatPartner_bank_accounts = CatPartner_bank_accounts;
$p.cat.create('partner_bank_accounts');
class CatOrganization_bank_accounts extends CatObj{
get bank(){return this._getter('bank')}
set bank(v){this._setter('bank',v)}
get bank_bic(){return this._getter('bank_bic')}
set bank_bic(v){this._setter('bank_bic',v)}
get funds_currency(){return this._getter('funds_currency')}
set funds_currency(v){this._setter('funds_currency',v)}
get account_number(){return this._getter('account_number')}
set account_number(v){this._setter('account_number',v)}
get settlements_bank(){return this._getter('settlements_bank')}
set settlements_bank(v){this._setter('settlements_bank',v)}
get settlements_bank_bic(){return this._getter('settlements_bank_bic')}
set settlements_bank_bic(v){this._setter('settlements_bank_bic',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
}
$p.CatOrganization_bank_accounts = CatOrganization_bank_accounts;
$p.cat.create('organization_bank_accounts');
class CatWork_center_kinds extends CatObj{
get applying(){return this._getter('applying')}
set applying(v){this._setter('applying',v)}
get available(){return this._getter('available')}
set available(v){this._setter('available',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
}
$p.CatWork_center_kinds = CatWork_center_kinds;
$p.cat.create('work_center_kinds');
class CatProperty_values_hierarchy extends CatObj{
get heft(){return this._getter('heft')}
set heft(v){this._setter('heft',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatProperty_values_hierarchy = CatProperty_values_hierarchy;
$p.cat.create('property_values_hierarchy');
class CatBanks_qualifier extends CatObj{
get correspondent_account(){return this._getter('correspondent_account')}
set correspondent_account(v){this._setter('correspondent_account',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get address(){return this._getter('address')}
set address(v){this._setter('address',v)}
get phone_numbers(){return this._getter('phone_numbers')}
set phone_numbers(v){this._setter('phone_numbers',v)}
get activity_ceased(){return this._getter('activity_ceased')}
set activity_ceased(v){this._setter('activity_ceased',v)}
get swift(){return this._getter('swift')}
set swift(v){this._setter('swift',v)}
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatBanks_qualifier = CatBanks_qualifier;
$p.cat.create('banks_qualifier');
class CatDestinations extends CatObj{
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get extra_properties(){return this._getter_ts('extra_properties')}
set extra_properties(v){this._setter_ts('extra_properties',v)}
}
$p.CatDestinations = CatDestinations;
class CatDestinationsExtra_fieldsRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get _deleted(){return this._getter('_deleted')}
set _deleted(v){this._setter('_deleted',v)}
}
$p.CatDestinationsExtra_fieldsRow = CatDestinationsExtra_fieldsRow;
class CatDestinationsExtra_propertiesRow extends TabularSectionRow{
get property(){return this._getter('property')}
set property(v){this._setter('property',v)}
get _deleted(){return this._getter('_deleted')}
set _deleted(v){this._setter('_deleted',v)}
}
$p.CatDestinationsExtra_propertiesRow = CatDestinationsExtra_propertiesRow;
$p.cat.create('destinations');
class CatCountries extends CatObj{
get name_full(){return this._getter('name_full')}
get alpha2(){return this._getter('alpha2')}
get alpha3(){return this._getter('alpha3')}
get predefined_name(){return this._getter('predefined_name')}
}
$p.CatCountries = CatCountries;
$p.cat.create('countries');
class CatFormulas extends CatObj{
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get leading_formula(){return this._getter('leading_formula')}
set leading_formula(v){this._setter('leading_formula',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get async(){return this._getter('async')}
set async(v){this._setter('async',v)}
get disabled(){return this._getter('disabled')}
set disabled(v){this._setter('disabled',v)}
get context(){return this._getter('context')}
set context(v){this._setter('context',v)}
get jsx(){return this._getter('jsx')}
set jsx(v){this._setter('jsx',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}


  execute(obj, attr) {

    const {_manager, _data, ref} = this;
    const {$p} = _manager._owner;
    const {ireg, msg, ui} = $p;

    // создаём функцию из текста формулы
    if(!_data._formula && this.formula){
      try{
        if(this.jsx) {
          _data._formula = new Function('$p', this.formula)($p);
        }
        else {
          if(this.async) {
            const AsyncFunction = Object.getPrototypeOf(eval('(async function(){})')).constructor;
            _data._formula = (new AsyncFunction('obj,$p,attr', this.formula)).bind(this);
          }
          else {
            _data._formula = (new Function('obj,$p,attr', this.formula)).bind(this);
          }
        }
      }
      catch(err){
        _data._formula = () => false;
        $p.record_log(err);
      }
    }

    const {_formula} = _data;

    if(this.parent == _manager.predefined('printing_plates')) {

      if(!_formula) {
        msg.show_msg({
          title: msg.bld_title,
          type: 'alert-error',
          text: `Ошибка в формуле<br /><b>${this.name}</b>`
        });
        return Promise.resolve();
      }

      // рендерим jsx в новое окно
      if(this.jsx) {
        return ui.dialogs.window({
          Component: _formula,
          title: this.name,
          //print: true,
          obj,
          attr,
        });
      }

      // получаем HTMLDivElement с отчетом
      ireg.log?.timeStart?.(ref);
      return _formula(obj, $p, attr)

      // показываем отчет в отдельном окне
        .then((doc) => {
          ireg.log?.timeEnd?.(ref);
          $p.SpreadsheetDocument && doc instanceof $p.SpreadsheetDocument && doc.print();
        })
        .catch(err => {
          ireg.log?.timeEnd?.(ref, err);
          throw err;
        });

    }
    else {
      ireg.log?.timeStart?.(ref);
      const res = _formula && _formula(obj, $p, attr);
      ireg.log?.timeEnd?.(ref);
      return res;
    }
  }

  get _template() {
    const {_data, _manager} = this;
    if(!_data._template){
      const {SpreadsheetDocument} = _manager._owner.$p;
      if(SpreadsheetDocument) {
        _data._template = new SpreadsheetDocument(this.template);
      }
    }
    return _data._template;
  }
}
$p.CatFormulas = CatFormulas;
class CatFormulasManager extends CatManager {

  constructor(owner, class_name) {
    super(owner, class_name);
    $p.adapters.pouch.once('pouch_doc_ram_start', this.load_formulas.bind(this));
  }

  load_formulas(src) {
    const {md, utils, wsql} = $p;
    const {isNode, isBrowser} = wsql.alasql.utils;
    const parents = [this.predefined('printing_plates'), this.predefined('modifiers')];
    const filtered = [];
    (src || this).forEach((v) => {
      if(!v.disabled && parents.includes(v.parent)){
        if(v.context === 1 && !isBrowser || v.context === 2 && !isNode) {
          return;
        }
        filtered.push(v);
      }
    });

    const compare = utils.sort('name');

    filtered.sort(utils.sort('sorting_field')).forEach((formula) => {
      // формируем списки печатных форм и внешних обработок
      if(formula.parent == parents[0]) {
        formula.params.find_rows({param: 'destination'}, (dest) => {
          const dmgr = md.mgr_by_class_name(dest.value);
          if(dmgr) {
            const tmp = dmgr._printing_plates ? Object.values(dmgr._printing_plates) : [];
            tmp.push(formula);
            tmp.sort(compare);
            dmgr._printing_plates = {};
            for(const elm of tmp) {
              dmgr._printing_plates[`prn_${elm.ref}`] = elm;
            }
          }
        });
      }
      else {
        // выполняем модификаторы
        try {
          const res = formula.execute();
          // еслм модификатор вернул задание кроносу - добавляем планировщик
          res && utils.cron && utils.cron(res);
        }
        catch (err) {
        }
      }
    });
  }

  // переопределяем load_array - не грузим неактивные формулы
  load_array(aattr, forse) {
    const res = super.load_array(aattr.filter((v) => !v.disabled || v.is_folder), forse);
    const modifiers = this.predefined('modifiers');
    for(const doc of res) {
      const {_data, parent} = doc;
      if(_data._formula) {
        _data._formula = null;
        if(parent === modifiers) {
          $p.record_log(`runtime modifier '${doc.name}'`);
        }
      }
      if(_data._template) {
        _data._template = null;
      }
    }
  }

}
$p.cat.create('formulas', CatFormulasManager, false);
class CatElm_visualization extends CatObj{
get svg_path(){return this._getter('svg_path')}
set svg_path(v){this._setter('svg_path',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get attributes(){return this._getter('attributes')}
set attributes(v){this._setter('attributes',v)}
get rotate(){return this._getter('rotate')}
set rotate(v){this._setter('rotate',v)}
get offset(){return this._getter('offset')}
set offset(v){this._setter('offset',v)}
get side(){return this._getter('side')}
set side(v){this._setter('side',v)}
get elm_side(){return this._getter('elm_side')}
set elm_side(v){this._setter('elm_side',v)}
get cx(){return this._getter('cx')}
set cx(v){this._setter('cx',v)}
get cy(){return this._getter('cy')}
set cy(v){this._setter('cy',v)}
get angle_hor(){return this._getter('angle_hor')}
set angle_hor(v){this._setter('angle_hor',v)}
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
get mode(){return this._getter('mode')}
set mode(v){this._setter('mode',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get sketch_view(){return this._getter_ts('sketch_view')}
set sketch_view(v){this._setter_ts('sketch_view',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}


  /**
   * Рисует визуализацию
   * @param elm {BuilderElement} элемент, к которому привязана визуализация
   * @param layer {Contour} слой, в котороый помещаем путь
   * @param offset {Number|Array.<Number>}
   * @param [offset0] {Number}
   * @param clr {CatClrs}
   */
  draw({elm, layer, offset, offset0, clr}) {
    if(!layer.isInserted()) {
      return;
    }

    try {
      const {project} = layer;
      const {CompoundPath, PointText, Path, constructor} = project._scope;

      let subpath;

      if(this.svg_path.indexOf('{"method":') == 0){

        const attr = JSON.parse(this.svg_path);

        if(['subpath_inner', 'subpath_outer', 'subpath_generatrix', 'subpath_median'].includes(attr.method)) {
          const {rays} = elm;
          if(!rays) {
            return;
          }
          if(attr.method == 'subpath_outer') {
            subpath = rays.outer.get_subpath(elm.corns(1), elm.corns(2)).equidistant(attr.offset || 10);
          }
          else if(attr.method == 'subpath_inner') {
            subpath = rays.inner.get_subpath(elm.corns(3), elm.corns(4)).equidistant(attr.offset || 10);
          }
          else if(attr.method == 'subpath_median') {
            if(elm.is_linear()) {
              subpath = new Path({
                project,
                segments: [elm.corns(1).add(elm.corns(4)).divide(2), elm.corns(2).add(elm.corns(3)).divide(2)]
              })
                .equidistant(attr.offset || 0);
            }
            else {
              const inner = rays.inner.get_subpath(elm.corns(3), elm.corns(4));
              inner.reverse();
              const outer = rays.outer.get_subpath(elm.corns(1), elm.corns(2));
              const li = inner.length / 50;
              const lo = outer.length / 50;
              subpath = new Path({project});
              for(let i = 0; i < 50; i++) {
                subpath.add(inner.getPointAt(li * i).add(outer.getPointAt(lo * i)).divide(2));
              }
              subpath.simplify(0.8);
              if(attr.offset) {
                subpath = subpath.equidistant(attr.offset);
              }
            }
          }
          else {
            if(this.mode === 3) {
              const outer = offset0 < 0;
              attr.offset -= -elm.d1 + elm.width;
              if(outer) {
                offset0 = -offset0;
                attr.offset = -(attr.offset || 0);
              }
              const b = elm.generatrix.getPointAt(offset0 || 0);
              const e = elm.generatrix.getPointAt((offset0 + offset) || elm.generatrix.length);
              subpath = elm.generatrix.get_subpath(b, e).equidistant(attr.offset || 0);
            }
            else {
              subpath = elm.generatrix.get_subpath(elm.b, elm.e).equidistant(attr.offset || 0);
            }
          }
          subpath.parent = layer._by_spec;
          subpath.strokeWidth = attr.strokeWidth || 4;
          subpath.strokeColor = attr.strokeColor || 'red';
          subpath.strokeCap = attr.strokeCap || 'round';
          if(attr.dashArray){
            subpath.dashArray = attr.dashArray
          }
        }
      }
      else if(this.svg_path){

        if(this.mode === 1) {
          const attr = JSON.parse(this.attributes || '{}');
          subpath = new PointText(Object.assign({
            project,
            layer,
            parent: layer._by_spec,
            fillColor: 'black',
            fontFamily: $p.job_prm.builder.font_family,
            fontSize: attr.fontSize || 60,
            content: this.svg_path,
          }, attr, this.origin.empty() ? null : {_visualization: true, guide: false}));
        }
        else {
          subpath = new CompoundPath(Object.assign({
            project,
            layer,
            parent: layer._by_spec,
            pathData: this.svg_path,
            strokeColor: 'black',
            fillColor: elm.constructor.clr_by_clr.call(elm, clr.empty() ? elm._row.clr : clr),
            strokeScaling: false,
            pivot: [0, 0],
            opacity: elm.opacity
          }, this.origin.empty() ? null : {_visualization: true, guide: false}));
        }

        if(elm instanceof constructor.Filling) {
          subpath.position = elm.bounds.topLeft.add(offset);
        }
        else {
          const {generatrix, rays: {inner, outer}} = elm;
          // угол касательной
          let angle_hor;
          if(elm.is_linear() || offset < 0)
            angle_hor = generatrix.getTangentAt(0).angle;
          else if(offset > generatrix.length)
            angle_hor = generatrix.getTangentAt(generatrix.length).angle;
          else
            angle_hor = generatrix.getTangentAt(offset).angle;

          if((this.rotate != -1 || elm.orientation == $p.enm.orientations.Горизонтальная) && angle_hor != this.angle_hor){
            subpath.rotation = angle_hor - this.angle_hor;
          }

          offset += generatrix.getOffsetOf(generatrix.getNearestPoint(elm.corns(1)));

          const p0 = generatrix.getPointAt(offset > generatrix.length ? generatrix.length : offset || 0);

          if(this.elm_side == -1){
            // в середине элемента
            const p1 = inner.getNearestPoint(p0);
            const p2 = outer.getNearestPoint(p0);

            subpath.position = p1.add(p2).divide(2);

          }else if(!this.elm_side){
            // изнутри
            subpath.position = inner.getNearestPoint(p0);

          }else{
            // снаружи
            subpath.position = outer.getNearestPoint(p0);
          }
        }
      }
      if(!this.origin.empty()) {
        subpath.on({
          mouseenter(event) {
            this.strokeWidth = 1.4;
            project._scope.canvas_cursor(`cursor-text-select`);
          },
          mouseleave(event) {
            this.strokeWidth = 1;
            project._scope.canvas_cursor('cursor-arrow-white');
          },
          mousedown(event) {
            event.stop();
          },
          click(event) {
            event.stop();
          },
        });
      }
    }
    catch (e) {
      console.log(e);
    }

  }}
$p.CatElm_visualization = CatElm_visualization;
class CatElm_visualizationSketch_viewRow extends TabularSectionRow{
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
}
$p.CatElm_visualizationSketch_viewRow = CatElm_visualizationSketch_viewRow;
class CatElm_visualizationParamsRow extends TabularSectionRow{
get param(){return this._getter('param')}
set param(v){this._setter('param',v)}
}
$p.CatElm_visualizationParamsRow = CatElm_visualizationParamsRow;
$p.cat.create('elm_visualization');
class CatBranches extends CatObj{
get suffix(){return this._getter('suffix')}
set suffix(v){this._setter('suffix',v)}
get lang(){return this._getter('lang')}
set lang(v){this._setter('lang',v)}
get direct(){return this._getter('direct')}
set direct(v){this._setter('direct',v)}
get use(){return this._getter('use')}
set use(v){this._setter('use',v)}
get no_mdm(){return this._getter('no_mdm')}
set no_mdm(v){this._setter('no_mdm',v)}
get no_partners(){return this._getter('no_partners')}
set no_partners(v){this._setter('no_partners',v)}
get no_divisions(){return this._getter('no_divisions')}
set no_divisions(v){this._setter('no_divisions',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get organizations(){return this._getter_ts('organizations')}
set organizations(v){this._setter_ts('organizations',v)}
get partners(){return this._getter_ts('partners')}
set partners(v){this._setter_ts('partners',v)}
get divisions(){return this._getter_ts('divisions')}
set divisions(v){this._setter_ts('divisions',v)}
get price_types(){return this._getter_ts('price_types')}
set price_types(v){this._setter_ts('price_types',v)}
get keys(){return this._getter_ts('keys')}
set keys(v){this._setter_ts('keys',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatBranches = CatBranches;
class CatBranchesOrganizationsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatBranchesOrganizationsRow = CatBranchesOrganizationsRow;
class CatBranchesPartnersRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatBranchesPartnersRow = CatBranchesPartnersRow;
class CatBranchesDivisionsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatBranchesDivisionsRow = CatBranchesDivisionsRow;
class CatBranchesPrice_typesRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
}
$p.CatBranchesPrice_typesRow = CatBranchesPrice_typesRow;
class CatBranchesKeysRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
}
$p.CatBranchesKeysRow = CatBranchesKeysRow;
class CatBranchesManager extends CatManager {

  constructor (owner, class_name) {
    super(owner, class_name);

    const {adapters: {pouch}, job_prm, enm, cat, dp} = $p;

    // после загрузки данных, надо настроить отборы в метаданных полей рисовалки
    !job_prm.is_node && pouch.once('pouch_complete_loaded', () => {
      const {current_user} = $p;

      // если отделы не загружены и полноправный пользователь...
      let next = Promise.resolve();
      if((!current_user || current_user.branch.empty()) && !/ram$/.test(this.cachable)) {
        next = this.find_rows_remote({_top: 10000})
          .then(() => this.metadata().cachable = 'ram');
      }

      if(job_prm.properties && current_user && !current_user.branch.empty() && job_prm.builder) {

        const {ПараметрВыбора} = enm.parameters_keys_applying;
        const {furn, sys, client_of_dealer_mode} = job_prm.properties;

        // накапливаем
        const branch_filter = job_prm.builder.branch_filter = {furn: [], sys: []};
        next.then(() => current_user.branch.is_new() ? current_user.branch.load() : current_user.branch)
          .then(({keys, divisions}) => {
            const add = ({acl_obj}) => {
              if(acl_obj.applying == ПараметрВыбора) {
                acl_obj.params.forEach(({property, value}) => {
                  if(property === furn) {
                    !branch_filter.furn.includes(value) && branch_filter.furn.push(value);
                  }
                  else if(property === sys) {
                    !branch_filter.sys.includes(value) && branch_filter.sys.push(value);
                  }
                });
              }
            };
            keys.forEach(add);
            divisions.forEach(({acl_obj}) => {
              acl_obj.keys.forEach(add);
              acl_obj.extra_fields.find_rows({property: client_of_dealer_mode}, ({value}) => {
                job_prm.builder.client_of_dealer_mode = value;
              });
            });
          })
          .then(() => {

            // применяем
            if(branch_filter.furn.length) {
              const mf = cat.characteristics.metadata('constructions').fields.furn;
              mf.choice_params.push({
                name: 'ref',
                path: {inh: branch_filter.furn}
              });
            }
            if(branch_filter.sys.length) {
              const mf = dp.buyers_order.metadata().fields.sys;
              mf.choice_params = [{
                name: 'ref',
                path: {inh: branch_filter.sys}
              }];
            }

          })
          .catch((err) => null);

      }
    });
  }

}
$p.cat.create('branches', CatBranchesManager, false);
class CatCurrencies extends CatObj{
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get extra_charge(){return this._getter('extra_charge')}
set extra_charge(v){this._setter('extra_charge',v)}
get main_currency(){return this._getter('main_currency')}
set main_currency(v){this._setter('main_currency',v)}
get parameters_russian_recipe(){return this._getter('parameters_russian_recipe')}
set parameters_russian_recipe(v){this._setter('parameters_russian_recipe',v)}


  /**
   * Пересчитывает сумму из валюты в валюту
   * @param amount {Number}
   * @param [date] {Date}
   * @param [to] {CatCurrencies}
   * @return {Number}
   */
  to_currency(amount, date, to) {
    if(this == to){
      return amount;
    }

    const {job_prm: {pricing}, wsql} = $p;

    if(!to || to.empty()){
      to = pricing.main_currency;
    }

    if(!date){
      date = new Date();
    }
    if(!this._manager.cource_sql){
      this._manager.cource_sql = wsql.alasql.compile('select top 1 * from `ireg_currency_courses` where `currency` = ? and `period` <= ? order by `period` desc');
    }

    let cfrom = {course: 1, multiplicity: 1}, cto = {course: 1, multiplicity: 1};
    if(this !== pricing.main_currency){
      const tmp = this._manager.cource_sql([this.ref, date]);
      if(tmp.length) {
        cfrom = tmp[0];
      }
    }
    if(to !== pricing.main_currency){
      const tmp = this._manager.cource_sql([to.ref, date]);
      if(tmp.length) {
        cto = tmp[0];
      }
    }

    return (amount * cfrom.course / cfrom.multiplicity) * cto.multiplicity / cto.course;
  }}
$p.CatCurrencies = CatCurrencies;
$p.cat.create('currencies');
class CatContact_information_kinds extends CatObj{
get mandatory_fields(){return this._getter('mandatory_fields')}
set mandatory_fields(v){this._setter('mandatory_fields',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatContact_information_kinds = CatContact_information_kinds;
$p.cat.create('contact_information_kinds');
class CatNom_kinds extends CatObj{
get nom_type(){return this._getter('nom_type')}
set nom_type(v){this._setter('nom_type',v)}
get dnom(){return this._getter('dnom')}
set dnom(v){this._setter('dnom',v)}
get dcharacteristic(){return this._getter('dcharacteristic')}
set dcharacteristic(v){this._setter('dcharacteristic',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatNom_kinds = CatNom_kinds;
$p.cat.create('nom_kinds');
class CatContracts extends CatObj{
get settlements_currency(){return this._getter('settlements_currency')}
set settlements_currency(v){this._setter('settlements_currency',v)}
get mutual_settlements(){return this._getter('mutual_settlements')}
set mutual_settlements(v){this._setter('mutual_settlements',v)}
get contract_kind(){return this._getter('contract_kind')}
set contract_kind(v){this._setter('contract_kind',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get check_days_without_pay(){return this._getter('check_days_without_pay')}
set check_days_without_pay(v){this._setter('check_days_without_pay',v)}
get allowable_debts_amount(){return this._getter('allowable_debts_amount')}
set allowable_debts_amount(v){this._setter('allowable_debts_amount',v)}
get allowable_debts_days(){return this._getter('allowable_debts_days')}
set allowable_debts_days(v){this._setter('allowable_debts_days',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get check_debts_amount(){return this._getter('check_debts_amount')}
set check_debts_amount(v){this._setter('check_debts_amount',v)}
get check_debts_days(){return this._getter('check_debts_days')}
set check_debts_days(v){this._setter('check_debts_days',v)}
get number_doc(){return this._getter('number_doc')}
set number_doc(v){this._setter('number_doc',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get main_cash_flow_article(){return this._getter('main_cash_flow_article')}
set main_cash_flow_article(v){this._setter('main_cash_flow_article',v)}
get main_project(){return this._getter('main_project')}
set main_project(v){this._setter('main_project',v)}
get accounting_reflect(){return this._getter('accounting_reflect')}
set accounting_reflect(v){this._setter('accounting_reflect',v)}
get tax_accounting_reflect(){return this._getter('tax_accounting_reflect')}
set tax_accounting_reflect(v){this._setter('tax_accounting_reflect',v)}
get prepayment_percent(){return this._getter('prepayment_percent')}
set prepayment_percent(v){this._setter('prepayment_percent',v)}
get validity(){return this._getter('validity')}
set validity(v){this._setter('validity',v)}
get vat_included(){return this._getter('vat_included')}
set vat_included(v){this._setter('vat_included',v)}
get price_type(){return this._getter('price_type')}
set price_type(v){this._setter('price_type',v)}
get vat_consider(){return this._getter('vat_consider')}
set vat_consider(v){this._setter('vat_consider',v)}
get days_without_pay(){return this._getter('days_without_pay')}
set days_without_pay(v){this._setter('days_without_pay',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatContracts = CatContracts;
$p.cat.create('contracts');
class CatNom_units extends CatObj{
get qualifier_unit(){return this._getter('qualifier_unit')}
set qualifier_unit(v){this._setter('qualifier_unit',v)}
get heft(){return this._getter('heft')}
set heft(v){this._setter('heft',v)}
get volume(){return this._getter('volume')}
set volume(v){this._setter('volume',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
get rounding_threshold(){return this._getter('rounding_threshold')}
set rounding_threshold(v){this._setter('rounding_threshold',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
}
$p.CatNom_units = CatNom_units;
$p.cat.create('nom_units');
class CatProperty_values extends CatObj{
get heft(){return this._getter('heft')}
set heft(v){this._setter('heft',v)}
get css(){return this._getter('css')}
set css(v){this._setter('css',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatProperty_values = CatProperty_values;
$p.cat.create('property_values');
class CatMeta_ids extends CatObj{
get full_moniker(){return this._getter('full_moniker')}
set full_moniker(v){this._setter('full_moniker',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatMeta_ids = CatMeta_ids;
$p.cat.create('meta_ids');
class CatCashboxes extends CatObj{
get funds_currency(){return this._getter('funds_currency')}
set funds_currency(v){this._setter('funds_currency',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get current_account(){return this._getter('current_account')}
set current_account(v){this._setter('current_account',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
}
$p.CatCashboxes = CatCashboxes;
$p.cat.create('cashboxes');
class CatUnits extends CatObj{
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get international_short(){return this._getter('international_short')}
set international_short(v){this._setter('international_short',v)}
}
$p.CatUnits = CatUnits;
$p.cat.create('units');
class CatPartners extends CatObj{
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get main_bank_account(){return this._getter('main_bank_account')}
set main_bank_account(v){this._setter('main_bank_account',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get kpp(){return this._getter('kpp')}
set kpp(v){this._setter('kpp',v)}
get ogrn(){return this._getter('ogrn')}
set ogrn(v){this._setter('ogrn',v)}
get okpo(){return this._getter('okpo')}
set okpo(v){this._setter('okpo',v)}
get individual_legal(){return this._getter('individual_legal')}
set individual_legal(v){this._setter('individual_legal',v)}
get main_contract(){return this._getter('main_contract')}
set main_contract(v){this._setter('main_contract',v)}
get identification_document(){return this._getter('identification_document')}
set identification_document(v){this._setter('identification_document',v)}
get buyer_main_manager(){return this._getter('buyer_main_manager')}
set buyer_main_manager(v){this._setter('buyer_main_manager',v)}
get is_buyer(){return this._getter('is_buyer')}
set is_buyer(v){this._setter('is_buyer',v)}
get is_supplier(){return this._getter('is_supplier')}
set is_supplier(v){this._setter('is_supplier',v)}
get primary_contact(){return this._getter('primary_contact')}
set primary_contact(v){this._setter('primary_contact',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatPartners = CatPartners;
class CatPartnersContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get email_address(){return this._getter('email_address')}
set email_address(v){this._setter('email_address',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
}
$p.CatPartnersContact_informationRow = CatPartnersContact_informationRow;
$p.cat.create('partners');
class CatNom extends CatObj{
get article(){return this._getter('article')}
set article(v){this._setter('article',v)}
get name_full(){return this._getter('name_full')}
set name_full(v){this._setter('name_full',v)}
get base_unit(){return this._getter('base_unit')}
set base_unit(v){this._setter('base_unit',v)}
get storage_unit(){return this._getter('storage_unit')}
set storage_unit(v){this._setter('storage_unit',v)}
get nom_kind(){return this._getter('nom_kind')}
set nom_kind(v){this._setter('nom_kind',v)}
get nom_group(){return this._getter('nom_group')}
set nom_group(v){this._setter('nom_group',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get price_group(){return this._getter('price_group')}
set price_group(v){this._setter('price_group',v)}
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get thickness(){return this._getter('thickness')}
set thickness(v){this._setter('thickness',v)}
get sizefurn(){return this._getter('sizefurn')}
set sizefurn(v){this._setter('sizefurn',v)}
get sizefaltz(){return this._getter('sizefaltz')}
set sizefaltz(v){this._setter('sizefaltz',v)}
get density(){return this._getter('density')}
set density(v){this._setter('density',v)}
get volume(){return this._getter('volume')}
set volume(v){this._setter('volume',v)}
get arc_elongation(){return this._getter('arc_elongation')}
set arc_elongation(v){this._setter('arc_elongation',v)}
get sizeb(){return this._getter('sizeb')}
set sizeb(v){this._setter('sizeb',v)}
get loss_factor(){return this._getter('loss_factor')}
set loss_factor(v){this._setter('loss_factor',v)}
get rounding_quantity(){return this._getter('rounding_quantity')}
set rounding_quantity(v){this._setter('rounding_quantity',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get cutting_optimization_type(){return this._getter('cutting_optimization_type')}
set cutting_optimization_type(v){this._setter('cutting_optimization_type',v)}
get saw_width(){return this._getter('saw_width')}
set saw_width(v){this._setter('saw_width',v)}
get overmeasure(){return this._getter('overmeasure')}
set overmeasure(v){this._setter('overmeasure',v)}
get double_cut(){return this._getter('double_cut')}
set double_cut(v){this._setter('double_cut',v)}
get alp1(){return this._getter('alp1')}
set alp1(v){this._setter('alp1',v)}
get wsnip_min(){return this._getter('wsnip_min')}
set wsnip_min(v){this._setter('wsnip_min',v)}
get wsnip_max(){return this._getter('wsnip_max')}
set wsnip_max(v){this._setter('wsnip_max',v)}
get packing(){return this._getter('packing')}
set packing(v){this._setter('packing',v)}
get pricing(){return this._getter('pricing')}
set pricing(v){this._setter('pricing',v)}
get visualization(){return this._getter('visualization')}
set visualization(v){this._setter('visualization',v)}
get complete_list_sorting(){return this._getter('complete_list_sorting')}
set complete_list_sorting(v){this._setter('complete_list_sorting',v)}
get is_accessory(){return this._getter('is_accessory')}
set is_accessory(v){this._setter('is_accessory',v)}
get is_procedure(){return this._getter('is_procedure')}
set is_procedure(v){this._setter('is_procedure',v)}
get is_service(){return this._getter('is_service')}
set is_service(v){this._setter('is_service',v)}
get is_pieces(){return this._getter('is_pieces')}
set is_pieces(v){this._setter('is_pieces',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get demand(){return this._getter_ts('demand')}
set demand(v){this._setter_ts('demand',v)}
get colors(){return this._getter_ts('colors')}
set colors(v){this._setter_ts('colors',v)}


  /**
   * Возвращает значение допреквизита группировка
   */
  get grouping() {
    if(!this.hasOwnProperty('_grouping')){
      const {extra_fields, _manager} = this;
      if(!_manager.hasOwnProperty('_grouping')) {
        _manager._grouping = _manager._owner.$p.cch.properties.predefined('grouping');
      }
      if(_manager._grouping) {
        const row = extra_fields.find({property: _manager._grouping});
        this._grouping = row ? row.value.name : '';
      }
      else {
        this._grouping = '';
      }
    }
    return this._grouping;
  }

  /**
   * Возвращает значение допреквизита минимальный объём
   */
  get min_volume() {
    if(!this.hasOwnProperty('_min_volume')){
      const {extra_fields, _manager} = this;
      if(!_manager.hasOwnProperty('_min_volume')) {
        _manager._min_volume = _manager._owner.$p.cch.properties.predefined('min_volume');
      }
      if(_manager._min_volume) {
        const row = extra_fields.find({property: _manager._min_volume});
        this._min_volume = row ? row.value : 0;
      }
      else {
        this._min_volume = 0;
      }
    }
    return this._min_volume;
  }

  /**
   * Представление объекта
   * @return {string}
   */
  get presentation() {
    return (this.article ? this.article + ' ' : '') + this.name;
  }
  set presentation(v) {

  }

  /**
   * Возвращает номенклатуру по ключу цветового аналога
   * @param clr
   * @return {any|CatNom}
   */
  by_clr_key(clr) {
    if(this.clr == clr){
      return this;
    }
    if(!this._clr_keys){
      this._clr_keys = new Map();
    }
    const {_clr_keys} = this;
    if(_clr_keys.has(clr)){
      return _clr_keys.get(clr);
    }
    if(_clr_keys.size){
      return this;
    }

    // получаем ссылку на ключ цветового аналога
    const {job_prm: {properties: {clr_key}}, cat} = $p;
    const clr_value = this._extra(clr_key);
    if(!clr_value){
      return this;
    }

    // находим все номенклатуры с подходящим ключем цветового аналога
    const {ref} = clr_key;
    this._manager.alatable.forEach((nom) => {
      nom.extra_fields && nom.extra_fields.some((row) =>
        row.property === ref && row.value === clr_value && _clr_keys.set(cat.clrs.get(nom.clr), cat.nom.get(nom.ref)));
    });

    // возарвщаем подходящую или себя
    if(_clr_keys.has(clr)){
      return _clr_keys.get(clr);
    }
    if(!_clr_keys.size){
      _clr_keys.set(0, 0);
    }
    return this;
  }

  /**
   * Возвращает цену номенклатуры указанного типа
   * - на дату
   * - с подбором характеристики по цвету
   * - с пересчетом из валюты в валюту
   *
   * @param attr
   * @return {Number|*}
   * @private
   */
  _price(attr) {
    const {
      job_prm: {pricing},
      cat: {
        characteristics: {by_ref: characteristics},
        color_price_groups: {by_ref: color_price_groups},
        clrs: {by_ref: clrs}
      },
      utils,
    } = this._manager._owner.$p;

    let price = 0,
      currency = pricing.main_currency,
      start_date = utils.blank.date;

    if(!attr){
      attr = {currency};
    }
    let {_price, _bprice} = this._data;
    if(attr.branch && _bprice?.has?.(attr.branch)) {
      _price = _bprice.get(attr.branch)
    }
    const {x, y, z, clr, ref, calc_order} = (attr.characteristic || {});

    if(attr.price_type){

      if(utils.is_data_obj(attr.price_type)){
        attr.price_type = attr.price_type.ref;
      }

      if(!attr.characteristic){
        attr.characteristic = utils.blank.guid;
      }
      else if(utils.is_data_obj(attr.characteristic)){
        // если передали уникальную характеристику продкции - ищем простую с тем же цветом и размерами
        // TODO: здесь было бы полезно учесть соответствие цветов??
        attr.characteristic = ref;
        if(!calc_order.empty()){
          const tmp = [];
          for(let clrx in _price) {
            const cx = characteristics[clrx];
            if(cx && cx.clr == clr) {
              // если на подходящую характеристику есть цена по нашему типу цен - запоминаем
              if(_price[clrx][attr.price_type]) {
                if(cx.x && x && cx.x - x < -10) {
                  continue;
                }
                if(cx.y && y && cx.y - y < -10) {
                  continue;
                }
                tmp.push({
                  cx,
                  rate: (cx.x && x ? Math.abs(cx.x - x) : 0) + (cx.y && y ? Math.abs(cx.y - y) : 0) + (cx.z && z && cx.z == z ? 1 : 0)
                });
              }
            }
          }
          if(tmp.length) {
            tmp.sort((a, b) => a.rate - b.rate);
            attr.characteristic = tmp[0].cx.ref;
          }
        }
      }

      if(!attr.date){
        attr.date = new Date();
      }

      // если для номенклатуры существует структура цен, ищем подходящую
      if(_price){
        if(attr.clr && attr.characteristic == utils.blank.guid) {
          let tmp = 0;
          for (let clrx in _price) {
            const cpg = color_price_groups[clrx] || clrs[clrx];
            if (cpg && cpg.contains(attr.clr, null, true)) {
              if (_price[clrx][attr.price_type]) {
                _price[clrx][attr.price_type].some((row) => {
                  if (row.date > start_date && row.date <= attr.date) {
                    const tprice = row.currency.to_currency(row.price, attr.date, attr.currency);
                    if (tprice > tmp) {
                      tmp = tprice;
                      price = row.price;
                      currency = row.currency;
                    }
                  }
                });
              }
            }
          }
        }
        if(!price && _price[attr.characteristic]){
          if(_price[attr.characteristic][attr.price_type]){
            _price[attr.characteristic][attr.price_type].some((row) => {
              if(row.date > start_date && row.date <= attr.date){
                price = row.price;
                currency = row.currency;
                return true;
              }
            });
          }
        }
        // если нет цены на характеристику, ищем по цвету
        if(!price && attr.clr){
          for(let clrx in _price){
            const cx = characteristics[clrx];
            const cpg = color_price_groups[clrx] || clrs[clrx];
            if((cx && cx.clr == attr.clr) || (cpg && cpg.contains(attr.clr, null, true))){
              if(_price[clrx][attr.price_type]){
                _price[clrx][attr.price_type].some((row) => {
                  if(row.date > start_date && row.date <= attr.date){
                    price = row.price;
                    currency = row.currency;
                    return true;
                  }
                });
                break;
              }
            }
          }
        }
      }
    }

    // если есть формула - выполняем вне зависимости от установленной цены
    if(attr.formula){

      // если нет цены на характеристику, ищем цену без характеристики
      if(!price && _price && _price[utils.blank.guid]){
        if(_price[utils.blank.guid][attr.price_type]){
          _price[utils.blank.guid][attr.price_type].some((row) => {
            if(row.date > start_date && row.date <= attr.date){
              price = row.price;
              currency = row.currency;
              return true;
            }
          });
        }
      }
      // формулу выполняем в любом случае - она может и не опираться на цены из регистра
      price = attr.formula.execute({
        nom: this,
        characteristic: characteristics[attr.characteristic.valueOf()],
        date: attr.date,
        prm: attr.prm,
        price, currency, x, y, z, clr, calc_order,
      });
    }

    // Пересчитать из валюты в валюту
    return currency.to_currency(price, attr.date, attr.currency);
  }

  /**
   * Выясняет, назначена ли данной номенклатуре хотя бы одна цена
   * @param [cx] {String} если указано, проверяет наличие цены для конкретной характеристики
   * @param [type] {String} если указано, проверяет наличие цены по этому типу
   * @return {Boolean}
   */
  has_price(cx, type) {
    const {_price} = this._data;
    const has = (prices) => Array.isArray(prices) && prices.find(({price}) => price >= 0.01);
    if(!_price) {
      return false;
    }
    if(type) {
      if(cx) {
        return Boolean(_price[cx] && has(_price[cx][type]));
      }
      for(const cx in _price) {
        if(has(_price[cx][type])) {
          return true;
        }
      }
      return false;
    }
    else {
      if(cx) {
        for(const pt in _price[cx]) {
          if(has(_price[cx][pt])) {
            return true;
          }
        }
      }
      for(const cx in _price) {
        for(const pt in _price[cx]) {
          if(has(_price[cx][pt])) {
            return true;
          }
        }
      }
    }
  }

  /**
   * Возвращает массив связей текущей номенклатуры
   */
  params_links(attr) {
    const {CchProperties} = this._manager._owner.$p;
    return CchProperties.prototype.params_links.call(this, attr);
  }

  /**
   * Проверяет и при необходимости перезаполняет или устанваливает умолчание value в prow
   */
  linked_values(links, prow, values = []) {
    const {CchProperties} = this._manager._owner.$p;
    return CchProperties.prototype.linked_values.call(this, links, prow, values);
  }

  filter_params_links(filter, attr, links) {
    const {CchProperties} = this._manager._owner.$p;
    return CchProperties.prototype.filter_params_links.call(this, filter, attr, links);
  }

  get type() {
    return {is_ref: true, types: ["cat.characteristics"]};
  }
}
$p.CatNom = CatNom;
class CatNomDemandRow extends TabularSectionRow{
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get days_from_execution(){return this._getter('days_from_execution')}
set days_from_execution(v){this._setter('days_from_execution',v)}
get days_to_execution(){return this._getter('days_to_execution')}
set days_to_execution(v){this._setter('days_to_execution',v)}
}
$p.CatNomDemandRow = CatNomDemandRow;
class CatNomColorsRow extends TabularSectionRow{
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get id(){return this._getter('id')}
set id(v){this._setter('id',v)}
get article(){return this._getter('article')}
set article(v){this._setter('article',v)}
get name(){return this._getter('name')}
set name(v){this._setter('name',v)}
get packing(){return this._getter('packing')}
set packing(v){this._setter('packing',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
}
$p.CatNomColorsRow = CatNomColorsRow;
class CatNomManager extends CatManager {

  load_array(aattr, forse) {
    // если внутри номенклатуры завёрнуты единицы - вытаскиваем
    const units = [];
    const prices = {};
    for(const row of aattr) {
      if(row.units) {
        row.units.split('\n').forEach((urow) => {
          const uattr = urow.split(',');
          units.push({
            ref: uattr[0],
            owner: row.ref,
            id: uattr[1],
            name: uattr[2],
            qualifier_unit: uattr[3],
            heft: parseFloat(uattr[4]),
            volume: parseFloat(uattr[5]),
            coefficient: parseFloat(uattr[6]),
            rounding_threshold: parseFloat(uattr[7]),
          });
        });
        delete row.units;
      }
      if(row._price) {
        prices[row.ref] = row._price;
        delete row._price;
      }
    }
    const res = super.load_array(aattr, forse);
    const {currencies, nom_units} = this._owner;
    units.length && nom_units.load_array(units, forse);

    // если внутри номенклатуры завёрнуты цены - вытаскиваем
    for(const {_data, _obj} of res) {
      const _price = prices[_obj.ref];
      if(_price) {
        _data._price = _price;
        for(const ox in _price) {
          for(const type in _price[ox]) {
            const v = _price[ox][type];
            Array.isArray(v) && v.forEach((row) => {
              row.date = new Date(row.date);
              row.currency = currencies.get(row.currency);
            });
          }
        }
      }
    }

    return res;
  }

}
$p.cat.create('nom', CatNomManager, false);
class CatOrganizations extends CatObj{
get prefix(){return this._getter('prefix')}
set prefix(v){this._setter('prefix',v)}
get individual_legal(){return this._getter('individual_legal')}
set individual_legal(v){this._setter('individual_legal',v)}
get individual_entrepreneur(){return this._getter('individual_entrepreneur')}
set individual_entrepreneur(v){this._setter('individual_entrepreneur',v)}
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get kpp(){return this._getter('kpp')}
set kpp(v){this._setter('kpp',v)}
get ogrn(){return this._getter('ogrn')}
set ogrn(v){this._setter('ogrn',v)}
get main_bank_account(){return this._getter('main_bank_account')}
set main_bank_account(v){this._setter('main_bank_account',v)}
get main_cashbox(){return this._getter('main_cashbox')}
set main_cashbox(v){this._setter('main_cashbox',v)}
get certificate_series_number(){return this._getter('certificate_series_number')}
set certificate_series_number(v){this._setter('certificate_series_number',v)}
get certificate_date_issue(){return this._getter('certificate_date_issue')}
set certificate_date_issue(v){this._setter('certificate_date_issue',v)}
get certificate_authority_name(){return this._getter('certificate_authority_name')}
set certificate_authority_name(v){this._setter('certificate_authority_name',v)}
get certificate_authority_code(){return this._getter('certificate_authority_code')}
set certificate_authority_code(v){this._setter('certificate_authority_code',v)}
get chief(){return this._getter('chief')}
set chief(v){this._setter('chief',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatOrganizations = CatOrganizations;
class CatOrganizationsContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get email_address(){return this._getter('email_address')}
set email_address(v){this._setter('email_address',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
get list_view(){return this._getter('list_view')}
set list_view(v){this._setter('list_view',v)}
get act_from(){return this._getter('act_from')}
set act_from(v){this._setter('act_from',v)}
}
$p.CatOrganizationsContact_informationRow = CatOrganizationsContact_informationRow;
$p.cat.create('organizations');
class CatInserts extends CatObj{
get article(){return this._getter('article')}
set article(v){this._setter('article',v)}
get insert_type(){return this._getter('insert_type')}
set insert_type(v){this._setter('insert_type',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get lmin(){return this._getter('lmin')}
set lmin(v){this._setter('lmin',v)}
get lmax(){return this._getter('lmax')}
set lmax(v){this._setter('lmax',v)}
get hmin(){return this._getter('hmin')}
set hmin(v){this._setter('hmin',v)}
get hmax(){return this._getter('hmax')}
set hmax(v){this._setter('hmax',v)}
get smin(){return this._getter('smin')}
set smin(v){this._setter('smin',v)}
get smax(){return this._getter('smax')}
set smax(v){this._setter('smax',v)}
get for_direct_profile_only(){return this._getter('for_direct_profile_only')}
set for_direct_profile_only(v){this._setter('for_direct_profile_only',v)}
get ahmin(){return this._getter('ahmin')}
set ahmin(v){this._setter('ahmin',v)}
get ahmax(){return this._getter('ahmax')}
set ahmax(v){this._setter('ahmax',v)}
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
get mmin(){return this._getter('mmin')}
set mmin(v){this._setter('mmin',v)}
get mmax(){return this._getter('mmax')}
set mmax(v){this._setter('mmax',v)}
get can_rotate(){return this._getter('can_rotate')}
set can_rotate(v){this._setter('can_rotate',v)}
get sizeb(){return this._getter('sizeb')}
set sizeb(v){this._setter('sizeb',v)}
get clr_group(){return this._getter('clr_group')}
set clr_group(v){this._setter('clr_group',v)}
get is_order_row(){return this._getter('is_order_row')}
set is_order_row(v){this._setter('is_order_row',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get insert_glass_type(){return this._getter('insert_glass_type')}
set insert_glass_type(v){this._setter('insert_glass_type',v)}
get available(){return this._getter('available')}
set available(v){this._setter('available',v)}
get slave(){return this._getter('slave')}
set slave(v){this._setter('slave',v)}
get is_supplier(){return this._getter('is_supplier')}
set is_supplier(v){this._setter('is_supplier',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get split_type(){return this._getter('split_type')}
set split_type(v){this._setter('split_type',v)}
get pair(){return this._getter('pair')}
set pair(v){this._setter('pair',v)}
get lay_split_types(){return this._getter('lay_split_types')}
set lay_split_types(v){this._setter('lay_split_types',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get specification(){return this._getter_ts('specification')}
set specification(v){this._setter_ts('specification',v)}
get selection_params(){return this._getter_ts('selection_params')}
set selection_params(v){this._setter_ts('selection_params',v)}
get product_params(){return this._getter_ts('product_params')}
set product_params(v){this._setter_ts('product_params',v)}
get inserts(){return this._getter_ts('inserts')}
set inserts(v){this._setter_ts('inserts',v)}
}
$p.CatInserts = CatInserts;
class CatInsertsSpecificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get algorithm(){return this._getter('algorithm')}
set algorithm(v){this._setter('algorithm',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get sz(){return this._getter('sz')}
set sz(v){this._setter('sz',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
get angle_calc_method(){return this._getter('angle_calc_method')}
set angle_calc_method(v){this._setter('angle_calc_method',v)}
get count_calc_method(){return this._getter('count_calc_method')}
set count_calc_method(v){this._setter('count_calc_method',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get lmin(){return this._getter('lmin')}
set lmin(v){this._setter('lmin',v)}
get lmax(){return this._getter('lmax')}
set lmax(v){this._setter('lmax',v)}
get ahmin(){return this._getter('ahmin')}
set ahmin(v){this._setter('ahmin',v)}
get ahmax(){return this._getter('ahmax')}
set ahmax(v){this._setter('ahmax',v)}
get smin(){return this._getter('smin')}
set smin(v){this._setter('smin',v)}
get smax(){return this._getter('smax')}
set smax(v){this._setter('smax',v)}
get rmin(){return this._getter('rmin')}
set rmin(v){this._setter('rmin',v)}
get rmax(){return this._getter('rmax')}
set rmax(v){this._setter('rmax',v)}
get for_direct_profile_only(){return this._getter('for_direct_profile_only')}
set for_direct_profile_only(v){this._setter('for_direct_profile_only',v)}
get step(){return this._getter('step')}
set step(v){this._setter('step',v)}
get step_angle(){return this._getter('step_angle')}
set step_angle(v){this._setter('step_angle',v)}
get offsets(){return this._getter('offsets')}
set offsets(v){this._setter('offsets',v)}
get do_center(){return this._getter('do_center')}
set do_center(v){this._setter('do_center',v)}
get attrs_option(){return this._getter('attrs_option')}
set attrs_option(v){this._setter('attrs_option',v)}
get is_order_row(){return this._getter('is_order_row')}
set is_order_row(v){this._setter('is_order_row',v)}
get is_main_elm(){return this._getter('is_main_elm')}
set is_main_elm(v){this._setter('is_main_elm',v)}
}
$p.CatInsertsSpecificationRow = CatInsertsSpecificationRow;
class CatInsertsInsertsRow extends TabularSectionRow{
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
}
$p.CatInsertsInsertsRow = CatInsertsInsertsRow;
$p.cat.create('inserts');
class CatParameters_keys extends CatObj{
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get applying(){return this._getter('applying')}
set applying(v){this._setter('applying',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}


  check_condition({elm, elm2, ox, cnstr, layer, calc_order_row}) {

    if(this.empty()) {
      return true;
    }
    if(!ox && elm) {
      ox = elm.ox;
    }
    if(!layer && elm) {
      layer = elm.layer;
    }
    const {calc_order} = ox;

    for(const prm_row of this.params) {
      const {property, origin} = prm_row;
      let ok;
      // заглушка для совместимости с УПзП
      if(calc_order_row && property.empty()){
        const vpartner = $p.cat.partners.get(prm_row._obj.value);
        if(vpartner && !vpartner.empty() && vpartner != calc_order.partner){
          return false;
        }
      }
      else {
        if(!property.check_condition({prm_row, elm, elm2, cnstr, origin, ox, calc_order, layer, calc_order_row})) {
          return false;
        }
      }
    }

    return true;
  }
}
$p.CatParameters_keys = CatParameters_keys;
$p.cat.create('parameters_keys');
class CatProduction_params extends CatObj{
get default_clr(){return this._getter('default_clr')}
set default_clr(v){this._setter('default_clr',v)}
get clr_group(){return this._getter('clr_group')}
set clr_group(v){this._setter('clr_group',v)}
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
get flap_pos_by_impost(){return this._getter('flap_pos_by_impost')}
set flap_pos_by_impost(v){this._setter('flap_pos_by_impost',v)}
get flap_weight_max(){return this._getter('flap_weight_max')}
set flap_weight_max(v){this._setter('flap_weight_max',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get jx(){return this._getter('jx')}
set jx(v){this._setter('jx',v)}
get e(){return this._getter('e')}
set e(v){this._setter('e',v)}
get c(){return this._getter('c')}
set c(v){this._setter('c',v)}
get g(){return this._getter('g')}
set g(v){this._setter('g',v)}
get f(){return this._getter('f')}
set f(v){this._setter('f',v)}
get check_static(){return this._getter('check_static')}
set check_static(v){this._setter('check_static',v)}
get show_flipped(){return this._getter('show_flipped')}
set show_flipped(v){this._setter('show_flipped',v)}
get glass_thickness(){return this._getter('glass_thickness')}
set glass_thickness(v){this._setter('glass_thickness',v)}
get furn_level(){return this._getter('furn_level')}
set furn_level(v){this._setter('furn_level',v)}
get base_clr(){return this._getter('base_clr')}
set base_clr(v){this._setter('base_clr',v)}
get sketch_view(){return this._getter('sketch_view')}
set sketch_view(v){this._setter('sketch_view',v)}
get outline(){return this._getter('outline')}
set outline(v){this._setter('outline',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get elmnts(){return this._getter_ts('elmnts')}
set elmnts(v){this._setter_ts('elmnts',v)}
get production(){return this._getter_ts('production')}
set production(v){this._setter_ts('production',v)}
get product_params(){return this._getter_ts('product_params')}
set product_params(v){this._setter_ts('product_params',v)}
get furn_params(){return this._getter_ts('furn_params')}
set furn_params(v){this._setter_ts('furn_params',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}
get colors(){return this._getter_ts('colors')}
set colors(v){this._setter_ts('colors',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get templates(){return this._getter_ts('templates')}
set templates(v){this._setter_ts('templates',v)}


  /**
   * возвращает доступные в данной системе элементы
   * @type {Array.<CatInserts>}
   */
  get noms() {
    const noms = [];
    for (const {nom} of this.elmnts) {
      if (nom instanceof CchPredefined_elmnts) {
        for (const {value} of nom.elmnts) {
          !noms.includes(value) && noms.push(value)
        }
      } 
      else {
        !noms.includes(nom) && noms.push(nom);
      }
    }
    return noms;
  }

  /**
   * Массив доступных в данной системе толщин заполнений
   * @typw {Array.<Number>}
   */
  get thicknesses() {
    const {_data} = this;
    if(!_data.thin) {
      const thin = new Set();
      const glasses = this.inserts($p.enm.elm_types.glasses, 'rows');
      for(const {nom} of glasses) {
        const thickness = nom.thickness();
        thickness && thin.add(nom.thickness());
      }
      _data.thin = Array.from(thin).sort((a, b) => a - b);
    }
    return _data.thin;
  }

  /**
   * Минимальная толщина заполнения
   * @type {Number}
   */
  get tmin() {
    return this.glass_thickness === 3 ? 0 : this.thicknesses[0];
  }
  set tmin(v) {
    return true;
  }

  /**
   * Максимальная толщина заполнения
   * @type {Number}
   */
  get tmax() {
    return this.glass_thickness === 3 ? Infinity : this.thicknesses[this.thicknesses.length - 1];
  }
  set tmax(v) {
    return true;
  }

  /**
   * возвращает доступные в данной системе фурнитуры
   * данные получает из справчоника СвязиПараметров, где ведущий = текущей системе и ведомый = фурнитура
   * @param ox {CatCharacteristics}
   * @param [layer] {Contour}
   * @return {Array}
   */
  furns(ox, layer) {
    const {job_prm: {properties}, cat: {furns}} = $p;
    const list = [];
    if(properties.furn) {
      const links = properties.furn.params_links({
        grid: {selection: {cnstr: layer ? layer.cnstr : 0}},
        obj: {_owner: {_owner: ox}},
        layer
      });
      if(links.length) {
        // собираем все доступные значения в одном массиве
        links.forEach((link) => link.values._obj.forEach(({value, by_default, forcibly}) => {
          const v = furns.get(value);
          v && list.push({furn: v, by_default, forcibly});
        }));
      }
    }
    return list;
  }

  /**
   * Доступна ли вставка в данной системе в качестве elm_type
   * @param nom {CatInserts}
   * @param elm_type {EnmElmTypes|Array.<EnmElmTypes>}
   * @return {boolean}
   */
  is_elm_type(nom, elm_type) {
    const inserts = this.inserts(elm_type, 'rows').map((e) => e.nom);
    return inserts.includes(nom);
  }

  /**
   * Возвращает доступные в данной системе элементы (вставки)
   * @param elm_types {EnmElmTypes|Array.<EnmElmTypes>} - допустимые типы элементов
   * @param [rows] {String} - возвращать вставки или строки табчасти "Элементы"
   * @param [elm] {BuilderElement} - указатель на элемент или проект, чтобы отфильтровать по ключам
   * @return {Array.<CatInserts>}
   */
  inserts(elm_types, rows, elm){
    const noms = [];
    const {elm_types: types} = $p.enm;
    if(!elm_types) {
      elm_types = types.rama_impost;
    }
    else if(typeof elm_types == 'string') {
      elm_types = types[elm_types];
    }
    else if(!Array.isArray(elm_types)) {
      elm_types = [elm_types];
    }

    for(const row of this.elmnts) {
      const {key, nom, elm_type, pos, by_default} = row;
      if(!nom.empty() && elm_types.includes(elm_type) &&
          (rows === 'rows' || !noms.some((e) => nom == e.nom)) &&
          (!elm || key.check_condition({elm}))) {
        if(nom instanceof CchPredefined_elmnts) {
          for(const {value} of nom.elmnts) {
            noms.push({
              nom: value,
              elm_type,
              pos,
              by_default,
            });
          }
        }
        else {
          noms.push(row);
        }
      }
    }

    if(rows === 'rows') {
      return noms;
    }

    noms.sort((a, b) => {
      if(a.by_default && !b.by_default) {
        return -1;
      }
      else if(!a.by_default && b.by_default) {
        return 1;
      }
      else {
        if(a.nom.name < b.nom.name) {
          return -1;
        }
        else if(a.nom.name > b.nom.name) {
          return 1;
        }
        else {
          return 0;
        }
      }
    });

    return noms.map((e) => e.nom);
  }

  /**
   * возвращает доступные в данной системе заполнения (вставки)
   * @return {Array.<CatInserts>}
   */
  glasses({elm, layer}) {
    return this.inserts($p.enm.elm_types.glasses, false, elm);
  }

  /**
   * @param ox {CatCharacteristics} - объект характеристики, табчасть которого надо перезаполнить
   * @param cnstr {Number} - номер конструкции. Если 0 - перезаполняем параметры изделия, иначе - фурнитуры
   * @param [force] {Boolean} - перезаполнять принудительно
   * @param [project] {Scheme} - текущий проект
   * @param [defaults] {TabularSection} - внешние умоляания
   */
  refill_prm(ox, cnstr = 0, force, project, defaults) {

    const prm_ts = !cnstr ? this.product_params : this.furn_params;
    const adel = [];
    const {enm, job_prm: {properties}, utils, EditorInvisible: {Contour}} = $p;
    const auto_align = ox.calc_order.obj_delivery_state == enm.obj_delivery_states.Шаблон && properties.auto_align;
    const {params} = ox;
    const layer = project instanceof Contour ?  project : project && project.getItem({class: Contour, cnstr: cnstr || 1});

    function add_prm(proto) {
      let row;
      let {param, value} = proto;

      if(cnstr) {

      }

      params.find_rows({cnstr, param}, (_row) => {
        row = _row;
        return false;
      });

      const drow = defaults && defaults.find({param});
      if(drow) {
        value = drow.value;
      }
      else if(param === properties.branch) {
        value = ox.calc_order.organization._extra(param);
        if(!value || value.empty()) {
          value = ox.calc_order.manager.branch;
        }
        if(value.empty()) {
          value._manager.find_rows({parent: utils.blank.guid}, (branch) => {
            value = branch;
            return false;
          });
        }
      }

      // если не найден параметр изделия - добавляем. если нет параметра фурнитуры - пропускаем
      if(!row){
        if(cnstr){
          return;
        }
        row = params.add({param, cnstr, value});
      }

      const links = param.params_links({grid: {selection: {cnstr}}, obj: row, layer});
      const hide = proto.hide || links.some((link) => link.hide);
      if(row.hide != hide){
        row.hide = hide;
      }

      if(proto.forcibly || drow || force === 1){

        if(param.inheritance === 3) {
          // пытаемся получить свойство из отдела абонента
          const bvalue = param.branch_value({project, cnstr, ox});
          if(bvalue !== undefined) {
            row.value = bvalue;
            return;
          }
        }

        if(value !== undefined) {
          row.value = value;
        }
      }
    }

    // если в характеристике есть лишние параметры - удаляем
    if(!cnstr){
      params.find_rows({cnstr: cnstr}, (row) => {
        const {param} = row;
        if(param !== auto_align && !prm_ts.find({param})){
          adel.push(row);
        }
      });
      adel.forEach((row) => params.del(row));
    }

    // бежим по параметрам. при необходимости, добавляем или перезаполняем и устанавливаем признак hide
    prm_ts.forEach(add_prm);

    // для шаблонов, добавляем параметр автоуравнивание
    !cnstr && auto_align && add_prm({param: auto_align, value: '', hide: false});

    // устанавливаем систему и номенклатуру продукции
    if(!cnstr){
      ox.sys = this;
      ox.owner = ox.prod_nom;

      if(project instanceof Contour) {
        return;
      }

      // если текущая фурнитура недоступна для данной системы - меняем
      // одновременно, перезаполним параметры фурнитуры
      ox.constructions.forEach((row) => {
        if(!row.furn.empty()) {
          let changed = force;
          const layer = project && project.getItem({class: Contour, cnstr: row.cnstr});
          // если для системы через связи параметров ограничен список фурнитуры...
          const furns = this.furns(ox, layer);
          const shtulp_kind = row.furn.shtulp_kind();
          if(furns.length) {
            if(furns.some((frow) => {
              if(frow.forcibly) {
                row.furn = frow.furn;
                return changed = true;
              }
            })) {
              ;
            }
            else if(furns.some((frow) => row.furn === frow.furn)) {
              ;
            }
            else if(shtulp_kind && furns.some((frow) => {
              if(frow.by_default && frow.furn.shtulp_kind() === shtulp_kind) {
                row.furn = frow.furn;
                return changed = true;
              }
            })) {
              ;
            }
            else if(shtulp_kind && furns.some((frow) => {
              if(frow.furn.shtulp_kind() === shtulp_kind) {
                row.furn = frow.furn;
                return changed = true;
              }
            })) {
              ;
            }
            else if(furns.some((frow) => {
              if(frow.by_default) {
                row.furn = frow.furn;
                return changed = true;
              }
            })) {
              ;
            }
            else {
              row.furn = furns[0].furn;
              changed = true;
            }
          }

          if(changed) {
            if(!project && typeof window !== 'undefined' && window.paper) {
              project = window.paper.project;
            }
            const contour = project && project.getItem({cnstr: row.cnstr});
            if(contour) {
              row.furn.refill_prm(contour, force === 1);
              contour.notify(contour, 'furn_changed');
            }
            else {
              ox.sys.refill_prm(ox, row.cnstr, force, project);
            }
          }
        }
      });
    }
  }

  prm_defaults(param, cnstr) {
    const ts = param instanceof CatNom ? this.params : (cnstr ? this.furn_params : this.product_params);
    return ts.find({param});
  }

  graph_restrictions(spoint, clr) {
    const {formula} = this;
    const checks = {};
    if(!formula.empty()) {
      const fragment = formula.execute()[clr ? 'clr' : 'white'];
      for(const key in fragment) {
        checks[key] = fragment[key].contains(spoint);
      }
    }
    return checks;
  }
}
$p.CatProduction_params = CatProduction_params;
class CatProduction_paramsElmntsRow extends TabularSectionRow{
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get pos(){return this._getter('pos')}
set pos(v){this._setter('pos',v)}
}
$p.CatProduction_paramsElmntsRow = CatProduction_paramsElmntsRow;
class CatProduction_paramsProductionRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get param(){return this._getter('param')}
set param(v){this._setter('param',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CatProduction_paramsProductionRow = CatProduction_paramsProductionRow;
class CatProduction_paramsParamsRow extends TabularSectionRow{
get param(){return this._getter('param')}
set param(v){this._setter('param',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
get hide(){return this._getter('hide')}
set hide(v){this._setter('hide',v)}
get forcibly(){return this._getter('forcibly')}
set forcibly(v){this._setter('forcibly',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
}
$p.CatProduction_paramsParamsRow = CatProduction_paramsParamsRow;
class CatProduction_paramsColorsRow extends TabularSectionRow{
get base_clr(){return this._getter('base_clr')}
set base_clr(v){this._setter('base_clr',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
}
$p.CatProduction_paramsColorsRow = CatProduction_paramsColorsRow;
class CatProduction_paramsTemplatesRow extends TabularSectionRow{
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
}
$p.CatProduction_paramsTemplatesRow = CatProduction_paramsTemplatesRow;
class CatProduction_paramsManager extends CatManager {

  /**
   * возвращает массив доступных для данного свойства значений
   * @param prop {CatObj} - планвидовхарактеристик ссылка или объект
   * @param is_furn {boolean} - интересуют свойства фурнитуры или объекта
   * @return {Array}
   */
  slist(prop, is_furn){
    let res = [], rt, at, pmgr, op = this.get(prop);

    if(op && op.type.is_ref){
      const tso = $p.enm.open_directions;
      // параметры получаем из локального кеша
      for(rt in op.type.types)
        if(op.type.types[rt].indexOf(".") > -1){
          at = op.type.types[rt].split(".");
          pmgr = $p[at[0]][at[1]];
          if(pmgr){
            if(pmgr === tso) {
              pmgr.forEach((v) => {
                v !== tso.folding && res.push({value: v.ref, text: v.synonym});
              });
            }
            else
              pmgr.find_rows({owner: prop}, (v) => {
                res.push({value: v.ref, text: v.presentation});
              });
          }
        }
    }
    return res;
  }
}
$p.cat.create('production_params', CatProduction_paramsManager, false);
class CatDelivery_areas extends CatObj{
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get latitude(){return this._getter('latitude')}
set latitude(v){this._setter('latitude',v)}
get longitude(){return this._getter('longitude')}
set longitude(v){this._setter('longitude',v)}
get delivery_area(){return this._getter('delivery_area')}
set delivery_area(v){this._setter('delivery_area',v)}
get rstore(){return this._getter('rstore')}
set rstore(v){this._setter('rstore',v)}
get coordinates(){return this._getter_ts('coordinates')}
set coordinates(v){this._setter_ts('coordinates',v)}
}
$p.CatDelivery_areas = CatDelivery_areas;
class CatDelivery_areasCoordinatesRow extends TabularSectionRow{
get latitude(){return this._getter('latitude')}
set latitude(v){this._setter('latitude',v)}
get longitude(){return this._getter('longitude')}
set longitude(v){this._setter('longitude',v)}
}
$p.CatDelivery_areasCoordinatesRow = CatDelivery_areasCoordinatesRow;
$p.cat.create('delivery_areas');
class CatCnns extends CatObj{
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
get amin(){return this._getter('amin')}
set amin(v){this._setter('amin',v)}
get amax(){return this._getter('amax')}
set amax(v){this._setter('amax',v)}
get sd1(){return this._getter('sd1')}
set sd1(v){this._setter('sd1',v)}
get sz(){return this._getter('sz')}
set sz(v){this._setter('sz',v)}
get cnn_type(){return this._getter('cnn_type')}
set cnn_type(v){this._setter('cnn_type',v)}
get ahmin(){return this._getter('ahmin')}
set ahmin(v){this._setter('ahmin',v)}
get ahmax(){return this._getter('ahmax')}
set ahmax(v){this._setter('ahmax',v)}
get lmin(){return this._getter('lmin')}
set lmin(v){this._setter('lmin',v)}
get lmax(){return this._getter('lmax')}
set lmax(v){this._setter('lmax',v)}
get tmin(){return this._getter('tmin')}
set tmin(v){this._setter('tmin',v)}
get tmax(){return this._getter('tmax')}
set tmax(v){this._setter('tmax',v)}
get var_layers(){return this._getter('var_layers')}
set var_layers(v){this._setter('var_layers',v)}
get for_direct_profile_only(){return this._getter('for_direct_profile_only')}
set for_direct_profile_only(v){this._setter('for_direct_profile_only',v)}
get art1vert(){return this._getter('art1vert')}
set art1vert(v){this._setter('art1vert',v)}
get art1glass(){return this._getter('art1glass')}
set art1glass(v){this._setter('art1glass',v)}
get art2glass(){return this._getter('art2glass')}
set art2glass(v){this._setter('art2glass',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get applying(){return this._getter('applying')}
set applying(v){this._setter('applying',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get specification(){return this._getter_ts('specification')}
set specification(v){this._setter_ts('specification',v)}
get cnn_elmnts(){return this._getter_ts('cnn_elmnts')}
set cnn_elmnts(v){this._setter_ts('cnn_elmnts',v)}
get selection_params(){return this._getter_ts('selection_params')}
set selection_params(v){this._setter_ts('selection_params',v)}
get sizes(){return this._getter_ts('sizes')}
set sizes(v){this._setter_ts('sizes',v)}
get priorities(){return this._getter_ts('priorities')}
set priorities(v){this._setter_ts('priorities',v)}


  /**
   * Возвращает основную строку спецификации соединения между элементами
   */
  main_row(elm) {

    let ares, nom = elm.nom;
    const {enm, job_prm, ProductsBuilding: {check_params}} = $p;
    const {specification, cnn_elmnts, selection_params, cnn_type} = this;

    // если тип соединения угловой, то арт-1-2 определяем по ориентации элемента
    if(enm.cnn_types.acn.a.includes(cnn_type)){
      let art12 = elm.orientation == enm.orientations.vert ? job_prm.nom.art1 : job_prm.nom.art2;
      ares = specification.find_rows({nom: art12});
    }
    // в прочих случаях, принадлежность к арт-1-2 определяем по табчасти СоединяемыеЭлементы
    if((!ares || !ares.length) && cnn_elmnts.find_rows({nom1: nom}).length){
      ares = specification.find_rows({nom: job_prm.nom.art1});
    }
    if((!ares || !ares.length) && cnn_elmnts.find_rows({nom2: nom}).length){
      ares = specification.find_rows({nom: job_prm.nom.art2});
    }
    if((!ares || !ares.length)) {
      ares = specification.find_rows({nom});
    }

    if(ares && ares.length) {
      const ox = elm.prm_ox || elm.ox;
      for(const {_row} of ares) {
        if(check_params({
          params: selection_params,
          ox,
          elm,
          row_spec: _row,
        })) {
          return _row;
        }
      }
      return ares[0]._row;
    }

  }

  /**
   * Проверяет, есть ли nom в колонке nom2 соединяемых элементов
   */
  check_nom2(nom) {
    const ref = nom.valueOf();
    return this.cnn_elmnts._obj.some((row) => row.nom == ref);
  }

  /**
   * Проверяет применимость для xx и t
   */
  stop_applying(cnn_point) {
    const {applying, cnn_type, _manager} = this;
    const {cnn_types} = _manager._owner.$p.enm;
    let stop = applying && (cnn_type === cnn_types.t || cnn_type === cnn_types.xx);
    if(stop) {
      // 0 - Везде
      // 1 - Только стык
      // 2 - Только T
      // 3 - Только угол
      if(applying === 1 && !cnn_point.is_ll) {
        ;
      }
      else if(applying === 2 && cnn_point.is_ll) {
        ;
      }
      else {
        stop = false;
      }
    }
    return stop;
  }

  /**
   * Параметрический размер соединения
   */
  size(elm, elm2) {
    let {sz, sizes} = this;
    const {ox, layer} = elm;
    for(const prm_row of sizes) {
      if(prm_row.param.check_condition({
          row_spec: {},
          prm_row,
          cnstr: prm_row.origin == 'layer' ? layer.cnstr : 0,
          elm,
          elm2,
          layer,
          ox,
        }) &&
        prm_row.key.check_condition({
          elm,
          elm2,
          ox,
          cnstr: prm_row.origin == 'layer' ? layer.cnstr : 0,
          layer,
        })) {
        sz = prm_row.elm;
        break;
      }
    }
    return sz;
  }

  /**
   * Выясняет, зависит ли размер соединения от текущего параметра
   * @param param {CchProperties}
   * @return {Boolean}
   */
  is_depend_of(param) {
    for(const row of this.sizes) {
      if(row.param === param || (row.param.empty() && !row.key.empty())) {
        return true;
      }
    }
  }

  /**
   * Укорочение для конкретной номенклатуры из спецификации
   */
  nom_size({nom, elm, elm2, len_angl, ox}) {
    let sz = 0;
    this.filtered_spec({elm, elm2, len_angl, ox, correct: true}).some((row) => {
      const {nom: rnom} = row;
      if(rnom === nom) {
        sz = row.sz;
        return true;
      }
      else if(rnom instanceof CatInserts) {
        if(rnom.specification.find({nom})) {
          sz = row.sz;
          return true;
        }
      }
    });
    return sz;
  }

  /**
   * ПолучитьСпецификациюСоединенияСФильтром
   * @param {BuilderElement} elm
   * @param {Object} len_angl
   * @param {Object} ox
   * @param {Boolean} [correct]
   */
  filtered_spec({elm, elm2, len_angl, ox, correct = false}) {
    const res = [];

    const {
      job_prm: {nom: {art1, art2}},
      enm: {specification_installation_methods, cnn_types},
      ProductsBuilding: {check_params},
    } = $p;

    const {САртикулом1, САртикулом2} = specification_installation_methods;
    const {ii, xx, acn, t} = cnn_types;
    const {cnn_type, specification, selection_params} = this;

    specification.forEach((row) => {
      const {nom, quantity, for_direct_profile_only: direct_only, amin, amax, alp2, set_specification} = row;
      // при формировании спецификации, отбрасываем корректировочные строки и наоборот, при корректировке - обычные
      if(!quantity && !correct || quantity && correct) {
        return;
      }
      if(!nom || nom.empty() || nom == art1 || nom == art2) {
        return;
      }

      // только для прямых или только для кривых профилей
      if((direct_only > 0 && !elm.is_linear()) || (direct_only < 0 && elm.is_linear())) {
        return;
      }

      //TODO: реализовать фильтрацию
      if(cnn_type == ii) {
        const angle_hor = len_angl.hasOwnProperty('angle_hor') ? len_angl.angle_hor : elm.angle_hor;
        if(amin > angle_hor || amax < angle_hor || row.sz_min > len_angl.len || row.sz_max < len_angl.len) {
          return;
        }
      }
      else {
        let {angle} = len_angl;
        if(!alp2 && angle > 180) {
          angle = 360 - angle;
        }
        if(amin < 0 && amax < 0) {
          if(-amin <= angle && -amax >= angle) {
            return;
          }
        }
        else {
          if(amin > angle || amax < angle) {
            return;
          }
        }
      }

      // "устанавливать с" проверяем только для соединений профиля
      if((set_specification == САртикулом1 && len_angl.art2) || (set_specification == САртикулом2 && len_angl.art1)) {
        return;
      }
      // для угловых, разрешаем art2 только явно для art2
      if(!correct && len_angl.art2 && acn.a.includes(cnn_type) && !acn.xsl.includes(cnn_type) && set_specification != САртикулом2) {
        return;
      }

      // проверяем параметры изделия и добавляем, если проходит по ограничениям
      if(correct || check_params({params: selection_params, row_spec: row, elm, elm2, ox})) {
        res.push(row);
      }

    });

    return res;
  }}
$p.CatCnns = CatCnns;
class CatCnnsSpecificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get algorithm(){return this._getter('algorithm')}
set algorithm(v){this._setter('algorithm',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
get sz(){return this._getter('sz')}
set sz(v){this._setter('sz',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get sz_min(){return this._getter('sz_min')}
set sz_min(v){this._setter('sz_min',v)}
get sz_max(){return this._getter('sz_max')}
set sz_max(v){this._setter('sz_max',v)}
get amin(){return this._getter('amin')}
set amin(v){this._setter('amin',v)}
get amax(){return this._getter('amax')}
set amax(v){this._setter('amax',v)}
get set_specification(){return this._getter('set_specification')}
set set_specification(v){this._setter('set_specification',v)}
get for_direct_profile_only(){return this._getter('for_direct_profile_only')}
set for_direct_profile_only(v){this._setter('for_direct_profile_only',v)}
get alp2(){return this._getter('alp2')}
set alp2(v){this._setter('alp2',v)}
get angle_calc_method(){return this._getter('angle_calc_method')}
set angle_calc_method(v){this._setter('angle_calc_method',v)}
get contour_number(){return this._getter('contour_number')}
set contour_number(v){this._setter('contour_number',v)}
get is_order_row(){return this._getter('is_order_row')}
set is_order_row(v){this._setter('is_order_row',v)}
}
$p.CatCnnsSpecificationRow = CatCnnsSpecificationRow;
class CatCnnsCnn_elmntsRow extends TabularSectionRow{
get nom1(){return this._getter('nom1')}
set nom1(v){this._setter('nom1',v)}
get clr1(){return this._getter('clr1')}
set clr1(v){this._setter('clr1',v)}
get nom2(){return this._getter('nom2')}
set nom2(v){this._setter('nom2',v)}
get clr2(){return this._getter('clr2')}
set clr2(v){this._setter('clr2',v)}
get is_nom_combinations_row(){return this._getter('is_nom_combinations_row')}
set is_nom_combinations_row(v){this._setter('is_nom_combinations_row',v)}
}
$p.CatCnnsCnn_elmntsRow = CatCnnsCnn_elmntsRow;
class CatCnnsPrioritiesRow extends TabularSectionRow{
get sys(){return this._getter('sys')}
set sys(v){this._setter('sys',v)}
get orientation(){return this._getter('orientation')}
set orientation(v){this._setter('orientation',v)}
get priority(){return this._getter('priority')}
set priority(v){this._setter('priority',v)}
}
$p.CatCnnsPrioritiesRow = CatCnnsPrioritiesRow;
class CatCnnsManager extends CatManager {

  constructor(owner, class_name) {
    super(owner, class_name);
    this._nomcache = {};
  }

  sort_cnns(elm1, elm2) {

    const {Editor: {ProfileItem, BuilderElement}, enm: {cnn_types: {t, xx}, cnn_sides}} = $p;
    const sides = [cnn_sides.inner, cnn_sides.outer];
    const orientation = elm1 instanceof ProfileItem && elm1.orientation;
    const sys = elm1 instanceof BuilderElement ? elm1.layer.sys : (elm2 instanceof BuilderElement && elm2.layer.sys);
    const priority = (cnn) => {
      let finded;
      if(sys && orientation) {
        const {priorities} = cnn;
        priorities.forEach((row) => {
          if((row.orientation.empty() || row.orientation == orientation) && (row.sys.empty() || row.sys == sys)) {
            if(!row.orientation.empty() && !row.sys.empty()) {
              finded = row;
              return false;
            }
            if(!finded || finded.sys.empty()) {
              finded = row;
            }
            else if(finded.orientation.empty() && !row.orientation.empty()) {
              finded = row;
            }
          }
        });
      }
      return finded ? finded.priority : cnn.priority;
    };

    return function sort_cnns(a, b) {

      // первым делом, учитываем приоритет (большой всплывает вверх)
      if (priority(a) > priority(b)) {
        return -1;
      }
      if (priority(a) < priority(b)) {
        return 1;
      }

      // далее, отдаём предпочтение соединениям, для которых задана сторона
      if(sides.includes(a.sd1) && !sides.includes(b.sd1)){
        return -1;
      }
      if(sides.includes(b.sd1) && !sides.includes(a.sd1)){
        return 1;
      }

      // соединения с одинаковым приоритетом и стороной сортируем по типу - опускаем вниз крест и Т
      if(a.cnn_type === xx && b.cnn_type !== xx){
        return 1;
      }
      if(b.cnn_type === xx && a.cnn_type !== xx){
        return -1;
      }
      if(a.cnn_type === t && b.cnn_type !== t){
        return 1;
      }
      if(b.cnn_type === t && a.cnn_type !== t){
        return -1;
      }

      // в последнюю очередь, сортируем по имени
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    }
  }

  /**
   * Возвращает массив соединений, доступный для сочетания номенклатур.
   * Для соединений с заполнениями учитывается толщина. Контроль остальных геометрических особенностей выполняется на стороне рисовалки
   * @param elm1 {BuilderElement|CatNom}
   * @param [elm2] {BuilderElement|CatNom}
   * @param [cnn_types] {EnumObj|Array.<EnumObj>}
   * @param [ign_side] {Boolean}
   * @param [is_outer] {Boolean}
   * @param [cnn_point] {CnnPoint}
   * @return {Array}
   */
  nom_cnn(elm1, elm2, cnn_types, ign_side, is_outer, cnn_point) {

    const {
      Editor: {ProfileItem, BuilderElement, Filling},
      enm: {orientations: {vert /*, hor, incline */}, cnn_types: {acn, ad, ii}, cnn_sides},
      cat: {nom}, utils} = $p;

    // если оба элемента - профили, определяем сторону
    const side = is_outer ? cnn_sides.outer :
      (!ign_side && elm1 instanceof ProfileItem && elm2 instanceof ProfileItem && elm2.cnn_side(elm1));

    let onom2, a1, a2, thickness1, thickness2, is_i = false, art1glass = false, art2glass = false;

    if(!elm2 || (utils.is_data_obj(elm2) && elm2.empty())){
      is_i = true;
      onom2 = elm2 = nom.get();
    }
    else{
      if(elm2 instanceof BuilderElement){
        onom2 = elm2.nom;
      }
      else if(utils.is_data_obj(elm2)){
        onom2 = elm2;
      }
      else{
        onom2 = nom.get(elm2);
      }
    }

    const {ref: ref1} = elm1; // ref у BuilderElement равен ref номенклатуры или ref вставки
    const {ref: ref2} = onom2;

    if(!is_i){
      if(elm1 instanceof Filling){
        art1glass = true;
        thickness1 = elm1.thickness;
      }
      else if(elm2 instanceof Filling){
        art2glass = true;
        thickness2 = elm2.thickness;
      }
    }

    if(!this._nomcache[ref1]){
      this._nomcache[ref1] = {};
    }
    a1 = this._nomcache[ref1];
    if(!a1[ref2]){
      a2 = (a1[ref2] = []);
      // для всех элементов справочника соединения
      this.forEach((cnn) => {
        // если в строках соединяемых элементов есть наша - добавляем
        let is_nom1 = art1glass ? (cnn.art1glass && thickness1 >= cnn.tmin && thickness1 <= cnn.tmax && cnn.cnn_type == ii) : false,
          is_nom2 = art2glass ? (cnn.art2glass && thickness2 >= cnn.tmin && thickness2 <= cnn.tmax) : false;

        cnn.cnn_elmnts.forEach((row) => {
          if(is_nom1 && is_nom2){
            return false;
          }
          if(!is_nom1) {
            is_nom1 = row.nom1 == ref1 && (row.nom2.empty() || row.nom2 == onom2);
          }
          if(!is_nom2) {
            is_nom2 = row.nom2 == onom2 && (row.nom1.empty() || row.nom1 == ref1);
          }
        });
        if(is_nom1 && is_nom2){
          a2.push(cnn);
        }
      });
    }

    if(cnn_types){
      const types = Array.isArray(cnn_types) ? cnn_types : (acn.a.indexOf(cnn_types) != -1 ? acn.a : [cnn_types]);
      const res = a1[ref2]
        .filter((cnn) => {
          if(types.includes(cnn.cnn_type)){
            if(cnn.amin && cnn.amax && cnn_point) {
              let angle = elm1.angle_at(cnn_point.node);
              if(angle > 180) {
                angle = 360 - angle;
              }
              if(cnn.amin < 0 && cnn.amax < 0) {
                if(-cnn.amin <= angle && -cnn.amax >= angle) {
                  return false;
                }
              }
              else {
                if(cnn.amin > angle || cnn.amax < angle) {
                  return false;
                }
              }
            }
            if(cnn_point && cnn.stop_applying(cnn_point)) {
              return false;
            }
            if(!side){
              return true;
            }
            if(cnn.sd1 == cnn_sides.inner){
              return side == cnn_sides.inner;
            }
            else if(cnn.sd1 == cnn_sides.outer){
              return side == cnn_sides.outer;
            }
            else{
              return true;
            }
          }
        });

      // если не нашлось подходящих и это угловое соединение и второй элемент вертикальный - меняем местами эл 1-2 при поиске
      if(!res.length && elm1 instanceof ProfileItem && elm2 instanceof ProfileItem &&
        cnn_types.includes(ad) && elm1.orientation != vert && elm2.orientation == vert ){
        return this.nom_cnn(elm2, elm1, cnn_types);
      }

      return res.sort(this.sort_cnns(elm1, elm2));
    }

    return a1[ref2];
  }

  /**
   * Возвращает соединение между элементами
   * @param elm1 {BuilderElement}
   * @param elm2 {BuilderElement}
   * @param [cnn_types] {Array}
   * @param [curr_cnn] {CatCnns}
   * @param [ign_side] {Boolean}
   * @param [is_outer] {Boolean}
   * @param [cnn_point] {CnnPoint}
   */
  elm_cnn(elm1, elm2, cnn_types, curr_cnn, ign_side, is_outer, cnn_point){

    const {cnn_types: {acn, t, xx}, cnn_sides} = $p.enm;

    // если установленное ранее соединение проходит по типу и стороне, нового не ищем
    if(curr_cnn && cnn_types && cnn_types.includes(curr_cnn.cnn_type) && (cnn_types !== acn.ii)){

      // TODO: проверить геометрию
      if(!curr_cnn.stop_applying(cnn_point) && ign_side !== 0) {
        if(!ign_side && curr_cnn.sd1 == cnn_sides.inner){
          if(typeof is_outer == 'boolean'){
            if(!is_outer){
              return curr_cnn;
            }
          }
          else{
            if(elm2.cnn_side(elm1) == cnn_sides.inner){
              return curr_cnn;
            }
          }
        }
        else if(!ign_side && curr_cnn.sd1 == cnn_sides.outer){
          if(is_outer || elm2.cnn_side(elm1) == cnn_sides.outer)
            return curr_cnn;
        }
        else{
          return curr_cnn;
        }
      }
    }

    const cnns = this.nom_cnn(elm1, elm2, cnn_types, ign_side, is_outer, cnn_point);

    // сортируем по непустой стороне и приоритету
    if(cnns.length){
      return curr_cnn && cnns.includes(curr_cnn) ? curr_cnn : cnns[0];
    }
    // TODO: возможно, надо вернуть соединение с пустотой
    else{

    }
  }

  /**
   * Возвращает временное соединение по паре номенклатур и типу
   * @param nom1 {CatNom}
   * @param nom2 {CatNom}
   * @param [cnn_type]
   * @return {CatCnns}
   */
  by_nom(nom1, nom2, cnn_type = 'ad') {
    if(typeof cnn_type === 'string') {
      cnn_type = $p.enm.cnn_types[cnn_type]; 
    }
    
    if(!this._by_cnn_type) {
      this._by_cnn_type = new Map();
    }
    if(!this._by_cnn_type.has(cnn_type)) {
      this._by_cnn_type.set(cnn_type, new Map());
    }
    const root = this._by_cnn_type.get(cnn_type)
    if(!root.has(nom1)) {
      root.set(nom1, new Map());
    }
    if(!root.get(nom1).has(nom2)) {
      const tmp = this.create(false, false, true);
      tmp.cnn_type = cnn_type;
      tmp.cnn_elmnts.add({nom1, nom2});
      tmp._set_loaded(tmp.ref);
      root.get(nom1).set(nom2, tmp);
    }
    return root.get(nom1).get(nom2);
  }

}
$p.cat.create('cnns', CatCnnsManager, false);
class CatFurns extends CatObj{
get flap_weight_max(){return this._getter('flap_weight_max')}
set flap_weight_max(v){this._setter('flap_weight_max',v)}
get left_right(){return this._getter('left_right')}
set left_right(v){this._setter('left_right',v)}
get is_set(){return this._getter('is_set')}
set is_set(v){this._setter('is_set',v)}
get is_sliding(){return this._getter('is_sliding')}
set is_sliding(v){this._setter('is_sliding',v)}
get furn_set(){return this._getter('furn_set')}
set furn_set(v){this._setter('furn_set',v)}
get side_count(){return this._getter('side_count')}
set side_count(v){this._setter('side_count',v)}
get clr_group(){return this._getter('clr_group')}
set clr_group(v){this._setter('clr_group',v)}
get handle_side(){return this._getter('handle_side')}
set handle_side(v){this._setter('handle_side',v)}
get open_type(){return this._getter('open_type')}
set open_type(v){this._setter('open_type',v)}
get name_short(){return this._getter('name_short')}
set name_short(v){this._setter('name_short',v)}
get applying(){return this._getter('applying')}
set applying(v){this._setter('applying',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get open_tunes(){return this._getter_ts('open_tunes')}
set open_tunes(v){this._setter_ts('open_tunes',v)}
get specification(){return this._getter_ts('specification')}
set specification(v){this._setter_ts('specification',v)}
get selection_params(){return this._getter_ts('selection_params')}
set selection_params(v){this._setter_ts('selection_params',v)}
get specification_restrictions(){return this._getter_ts('specification_restrictions')}
set specification_restrictions(v){this._setter_ts('specification_restrictions',v)}
}
$p.CatFurns = CatFurns;
class CatFurnsOpen_tunesRow extends TabularSectionRow{
get side(){return this._getter('side')}
set side(v){this._setter('side',v)}
get lmin(){return this._getter('lmin')}
set lmin(v){this._setter('lmin',v)}
get lmax(){return this._getter('lmax')}
set lmax(v){this._setter('lmax',v)}
get amin(){return this._getter('amin')}
set amin(v){this._setter('amin',v)}
get amax(){return this._getter('amax')}
set amax(v){this._setter('amax',v)}
get arc_available(){return this._getter('arc_available')}
set arc_available(v){this._setter('arc_available',v)}
get shtulp_available(){return this._getter('shtulp_available')}
set shtulp_available(v){this._setter('shtulp_available',v)}
get shtulp_fix_here(){return this._getter('shtulp_fix_here')}
set shtulp_fix_here(v){this._setter('shtulp_fix_here',v)}
get rotation_axis(){return this._getter('rotation_axis')}
set rotation_axis(v){this._setter('rotation_axis',v)}
get partial_opening(){return this._getter('partial_opening')}
set partial_opening(v){this._setter('partial_opening',v)}
get outline(){return this._getter('outline')}
set outline(v){this._setter('outline',v)}
}
$p.CatFurnsOpen_tunesRow = CatFurnsOpen_tunesRow;
class CatFurnsSpecificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get algorithm(){return this._getter('algorithm')}
set algorithm(v){this._setter('algorithm',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get handle_height_base(){return this._getter('handle_height_base')}
set handle_height_base(v){this._setter('handle_height_base',v)}
get fix_ruch(){return this._getter('fix_ruch')}
set fix_ruch(v){this._setter('fix_ruch',v)}
get handle_height_min(){return this._getter('handle_height_min')}
set handle_height_min(v){this._setter('handle_height_min',v)}
get handle_height_max(){return this._getter('handle_height_max')}
set handle_height_max(v){this._setter('handle_height_max',v)}
get contraction(){return this._getter('contraction')}
set contraction(v){this._setter('contraction',v)}
get contraction_option(){return this._getter('contraction_option')}
set contraction_option(v){this._setter('contraction_option',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
get flap_weight_min(){return this._getter('flap_weight_min')}
set flap_weight_min(v){this._setter('flap_weight_min',v)}
get flap_weight_max(){return this._getter('flap_weight_max')}
set flap_weight_max(v){this._setter('flap_weight_max',v)}
get side(){return this._getter('side')}
set side(v){this._setter('side',v)}
get cnn_side(){return this._getter('cnn_side')}
set cnn_side(v){this._setter('cnn_side',v)}
get offset_option(){return this._getter('offset_option')}
set offset_option(v){this._setter('offset_option',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get transfer_option(){return this._getter('transfer_option')}
set transfer_option(v){this._setter('transfer_option',v)}
get overmeasure(){return this._getter('overmeasure')}
set overmeasure(v){this._setter('overmeasure',v)}
get is_set_row(){return this._getter('is_set_row')}
set is_set_row(v){this._setter('is_set_row',v)}
get is_procedure_row(){return this._getter('is_procedure_row')}
set is_procedure_row(v){this._setter('is_procedure_row',v)}
get is_order_row(){return this._getter('is_order_row')}
set is_order_row(v){this._setter('is_order_row',v)}
}
$p.CatFurnsSpecificationRow = CatFurnsSpecificationRow;
class CatFurnsSpecification_restrictionsRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
get side(){return this._getter('side')}
set side(v){this._setter('side',v)}
get lmin(){return this._getter('lmin')}
set lmin(v){this._setter('lmin',v)}
get lmax(){return this._getter('lmax')}
set lmax(v){this._setter('lmax',v)}
get amin(){return this._getter('amin')}
set amin(v){this._setter('amin',v)}
get amax(){return this._getter('amax')}
set amax(v){this._setter('amax',v)}
get for_direct_profile_only(){return this._getter('for_direct_profile_only')}
set for_direct_profile_only(v){this._setter('for_direct_profile_only',v)}
}
$p.CatFurnsSpecification_restrictionsRow = CatFurnsSpecification_restrictionsRow;
$p.cat.create('furns');
class CatClrs extends CatObj{
get ral(){return this._getter('ral')}
set ral(v){this._setter('ral',v)}
get machine_tools_clr(){return this._getter('machine_tools_clr')}
set machine_tools_clr(v){this._setter('machine_tools_clr',v)}
get clr_str(){return this._getter('clr_str')}
set clr_str(v){this._setter('clr_str',v)}
get clr_out(){return this._getter('clr_out')}
set clr_out(v){this._setter('clr_out',v)}
get clr_in(){return this._getter('clr_in')}
set clr_in(v){this._setter('clr_in',v)}
get grouping(){return this._getter('grouping')}
set grouping(v){this._setter('grouping',v)}
get area_src(){return this._getter('area_src')}
set area_src(v){this._setter('area_src',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}


  /**
   * Возвращает инверсный по отношению к текущему
   * @returns {CatClrs}
   */
  inverted() {
    return this._manager.inverted(this);
  }

  /**
   * Признак составного
   * @returns {boolean}
   */
  is_composite() {
    const {clr_in, clr_out} = this;
    return clr_in != clr_out && !(clr_in.empty() || clr_out.empty());
  }

  /**
   * Рассчитывает реквизит grouping
   * @param values {Array}
   */
  set_grouping(values) {
    const {clr_in, clr_out, _manager} = this;
    const white = _manager.predefined('Белый');
    const grp_in = clr_in === white ? 'Белый' : clr_in.grouping.name.split(' ')[0];
    const grp_out = clr_out === white ? 'Белый' : clr_out.grouping.name.split(' ')[0];
    if(!grp_in || grp_in === 'Нет' || !grp_out || grp_out === 'Нет') {
      this.grouping = values.find((v) => v.name === 'Нет');
    }
    else {
      this.grouping = values.find((v) => v.name.startsWith(grp_in) && v.name.endsWith(grp_out));
    }
  }

  /**
   * Возвращает стороны, на которых цвет
   * @return {Object}
   */
  get sides() {
    const res = {is_in: false, is_out: false};
    if(!this.empty() && !this.predefined_name){
      const {clr_in, clr_out} = this;
      if(clr_in.empty() && clr_out.empty()){
        res.is_in = res.is_out = true;
      }
      else{
        if(!clr_in.empty() && !clr_in.predefined_name){
          res.is_in = true;
        }
        if(!clr_out.empty() && !clr_out.predefined_name){
          res.is_out = true;
        }
      }
    }
    return res;
  }

  /**
   * Аналог метода `contains()` цветоценовых групп
   * @param clr {CatClrs}
   * @param [fake]
   * @param [any] {Boolean}
   * @return {Boolean}
   */
  contains(clr, fake, any) {
    if(clr === this) {
      return true;
    }
    else if (clr.is_composite() && any) {
      return clr.clr_in === this || clr.clr_out === this;
    }
    return  false;
  }
}
$p.CatClrs = CatClrs;
class CatClrsManager extends CatManager {

  /**
   * Получает цвет с учётом длинных гвидов
   * при необходимости, создаёт составной на лету
   */
  getter(ref) {
    if(ref && ref.length === 72) {
      const clr_in = ref.substr(0, 36);
      const clr_out = ref.substr(36);
      let in_out = this.get(ref);
      if(in_out.is_new()) {
        Object.assign(in_out._obj, {clr_in, clr_out, parent: $p.job_prm.builder.composite_clr_folder.valueOf()});
        in_out._obj.name = `${in_out.clr_in.name} \\ ${in_out.clr_out.name}`;
        in_out._set_loaded(ref);
      }
      return in_out;
    }
    return this.get(ref);
  }

  /**
   * Ссылка составного цвета
   *
   * @param curr {('clr_in'|'clr_out')}
   * @param other {CatClrs}
   * @param v {CatClrs|String}
   * @return {String}
   */
  composite_ref(curr, other, v) {
    let clr = this.get(v);
    if(clr.empty()) {
      clr = this.predefined('БезЦвета');
    }
    else if(!clr[curr].empty()) {
      clr = clr[curr];
    }
    if(other.empty()) {
      other = this.predefined('БезЦвета');
    }
    if(clr.valueOf() === other.valueOf()) {
      return clr.valueOf();
    }
    return curr === 'clr_in' ? clr.valueOf() + other.valueOf() : other.valueOf() + clr.valueOf();
  }

  /**
   * Ищет по цветам снаружи-изнутри
   * @return {CatClrs}
   */
  by_in_out({clr_in, clr_out}) {
    const {wsql, utils: {blank}} = $p;
    // скомпилированный запрос
    if(!this._by_in_out) {
      this._by_in_out = wsql.alasql.compile('select top 1 ref from ? where clr_in = ? and clr_out = ? and (not ref = ?)');
    }
    // ищем в справочнике цветов
    const ares = this._by_in_out([this.alatable, clr_in.valueOf(), clr_out.valueOf(), blank.guid]);
    return this.get(ares[0]);
  }

  clr_prm({row_base, row_spec, elm, origin, ox}) {
    const {enm: {predefined_formulas: {clr_prm}, comparison_types: ct}} = $p;
    if(row_base?.algorithm === clr_prm && elm?.elm > 0) {
      let param;
      if(row_base._or) {
        for(const grp of row_base._or.values()) {
          for(const prow of grp) {
            if(prow.origin == "algorithm") {
              param = prow.param;
              break;
            }
            if(param) {
              break;
            }
          }
        }
      }
      if(!param && origin) {
        const ctypes = [ct.get(), ct.eq];
        origin.selection_params.find_rows({elm: row_base.elm}, (prow) => {
          if(ctypes.includes(prow.comparison_type) && prow.param.type.types.includes('cat.clrs') && (!prow.value || prow.value.empty())) {
            param = prow.param;
          }
        });
      }
      if(param) {
        row_spec.clr = (ox || elm.ox).extract_value({cnstr: [0, -elm.elm], param});
      }
    }
    return row_spec.clr;
  }

  /**
   * Возвращает цвет по предопределенному цвету при формировании спецификации
   * @param clr {CatClrs} - цвет исходной строки соединения, фурнитуры или вставки
   * @param clr_elm {CatClrs} - цвет элемента
   * @param clr_sch {CatClrs} - цвет изделия
   * @param [elm] {BuilderElement} - элемент рисовалки
   * @param [spec] {TabularSection} - табчасть спецификации для поиска ведущих
   * @param [row] {TabularSectionRow} - строка спецификации, где есть `nom`
   * @return {CatClrs}
   */
  by_predefined(clr, clr_elm, clr_sch, elm, spec, row) {
    const {predefined_name} = clr;
    const flipped = elm?.layer?.flipped;
    const {clr_by_main_row} = $p.job_prm.builder;
    if(predefined_name) {
      switch (predefined_name) {
      case 'КакЭлемент':
        if(clr_by_main_row && elm?._attr?.row_spec) {
          clr_elm = elm?._attr?.row_spec.clr;
        }
        return flipped ? this.inverted(clr_elm) :  clr_elm;

      case 'КакИзделие':
        return clr_sch;

      case 'КакЭлементСнаружи':
        if(clr_by_main_row && elm?._attr?.row_spec) {
          clr_elm = elm?._attr?.row_spec.clr;
        }
        return flipped ? this.by_predefined({predefined_name: 'КакЭлементИзнутри'}, clr_elm) :
          clr_elm.clr_out.empty() ? clr_elm : clr_elm.clr_out;

      case 'КакЭлементИзнутри':
        if(clr_by_main_row && elm?._attr?.row_spec) {
          clr_elm = elm?._attr?.row_spec.clr;
        }
        return flipped ?
          this.by_predefined({predefined_name: 'КакЭлементСнаружи'}, clr_elm) :
          clr_elm.clr_in.empty() ? clr_elm : clr_elm.clr_in;

      case 'БезЦветаИзнутри':
        if(clr_by_main_row && elm?._attr?.row_spec) {
          clr_elm = elm?._attr?.row_spec.clr;
        }
        clr_elm = this.getter(`${this.predefined('БезЦвета').ref}${
          (clr_elm.clr_out.empty() ? clr_elm : clr_elm.clr_out).ref}`);
        return flipped ? this.inverted(clr_elm) : clr_elm;

      case 'БезЦветаСнаружи':
        if(clr_by_main_row && elm?._attr?.row_spec) {
          clr_elm = elm?._attr?.row_spec.clr;
        }
        clr_elm = this.getter(`${
          (clr_elm.clr_in.empty() ? clr_elm : clr_elm.clr_in).ref}${this.predefined('БезЦвета').ref}`);
        return flipped ? this.inverted(clr_elm) : clr_elm;

      case 'КакИзделиеСнаружи':
        return flipped ? this.by_predefined({predefined_name: 'КакИзделиеИзнутри'}, clr_elm, clr_sch) :
          clr_sch.clr_out.empty() ? clr_sch : clr_sch.clr_out;

      case 'КакИзделиеИзнутри':
        return flipped ? this.by_predefined({predefined_name: 'КакИзделиеСнаружи'}, clr_elm, clr_sch) :
          clr_sch.clr_in.empty() ? clr_sch : clr_sch.clr_in;

      case 'КакЭлементИнверсный':
        if(clr_by_main_row && elm?._attr?.row_spec) {
          clr_elm = elm?._attr?.row_spec.clr;
        }
        return flipped ? clr_elm : this.inverted(clr_elm);

      case 'КакИзделиеИнверсный':
        return this.inverted(clr_sch);

      case 'БезЦвета':
        return this.get();
      case 'Белый':
      case 'Прозрачный':
        return clr;
      case 'КакВоВставке':
        if(!elm){
          return clr_elm;
        }
        const {inset} = elm;
        const main_rows = inset.main_rows(elm);
        if(main_rows.length) {
          const row_base = main_rows[0];
          const row_spec = {clr: this.by_predefined(row_base.clr, clr_elm, clr_sch, elm, spec)};
          this.clr_prm({row_base, row_spec, elm, origin: inset});
          return row_spec.clr;
        }
        return clr_elm;
      case 'КакНом':
        const nom = row ? row.nom : (elm && elm.nom);
        return nom ? nom.clr : (clr.empty() ? clr_elm : clr);
      case 'КакВедущий':
      case 'КакВедущийИзнутри':
      case 'КакВедущийСнаружи':
      case 'КакВедущийИнверсный':
        const sub_clr = this.predefined(predefined_name.replace('КакВедущий', 'КакЭлемент'));
        const t_parent = elm && elm.t_parent();
        if(!elm || elm === t_parent){
          return this.by_predefined(sub_clr,  clr_elm);
        }
        let finded;
        spec && spec.find_rows({elm: t_parent.elm, nom: t_parent.nom}, (row) => {
          finded = this.by_predefined(sub_clr,  row.clr);
          return false;
        });
        return finded || clr_elm;

      default :
        return clr_elm;
      }
    }
    else if (clr instanceof $p.CatColor_price_groups) {
      const tmp = clr.clr.empty() ? clr_elm : this.by_predefined(clr.clr, clr_elm, clr_sch, elm, spec, row);
      for(const row of clr.clr_conformity) {
        if(row.clr1.contains(tmp)) {
          return row.clr2;
        }
      }
      return tmp;
    }
    else if (clr instanceof $p.CatFormulas) {

    }
    return clr.empty() ? (flipped ? this.inverted(clr_elm) :  clr_elm) : clr;
  }

  /**
   * Инверсный цвет  
   * Возвращает элемент, цвета которого изнутри и снаружи перевёрнуты местами
   * @param clr {CatClrs} - исходный цвет
   */
  inverted(clr){
    if(!clr.is_composite()) {
      return clr;
    }
    const {clr_in, clr_out} = clr;
    return this.getter(`${clr_out.valueOf()}${clr_in.valueOf()}`);
  }

  /**
   * Возвращает предопределенный цвет НеВключатьВСпецификацию
   */
  ignored() {
    return this.predefined('НеВключатьВСпецификацию');
  }

  /**
   * Скрывает составные цвета в отборе
   * @param mf {Object} метаданные поля
   * @param [clr_group] {CatColor_price_groups} цветогруппа
   * @param [side] {EmnCnnSides} сторона цвета
   */
  hide_composite(mf, clr_group, side) {
    const choice_param = mf.choice_params && mf.choice_params.find(({name}) => name === 'parent');
    const {composite_clr_folder: ccf} = $p.job_prm.builder;
    if(typeof side === 'string') {
      side = $p.enm.cnn_sides[side];
    }
    if(choice_param && choice_param.path.not) {
      choice_param.path = {nin: [choice_param.path.not, ccf]};
    }
    else if(choice_param && choice_param.path.nin && !choice_param.path.nin.find(v => v === ccf)) {
      choice_param.path.nin.push(ccf);
    }
    else {
      if(!mf.choice_params) {
        mf.choice_params = [{
          name: 'parent',
          path: {not: ccf},
        }];
      }
    }
    if(clr_group && side) {
      const srows = clr_group.exclude.find_rows({side}).map(({_row}) => _row.clr);
      const choice_param = srows.length && mf.choice_params.find(({name}) => name === 'ref');
      if(choice_param) {
        const {path} = choice_param;
        if(path.in) {
          delete choice_param.path;
          choice_param.path = {in: path.in.filter((o) => !srows.includes(o))};
        }
      }
    }
  }

  /**
   * Дополняет связи параметров выбора отбором, исключающим служебные цвета
   * @param mf {Object} - описание метаданных поля
   * @param sys {Object} - объект, у которого можно спросить связи
   * @param [project] {Scheme} - текущий проект
   */
  selection_exclude_service(mf, sys, project) {
    if(mf.choice_params) {
      mf.choice_params.length = 0;
    }
    else {
      mf.choice_params = [];
    }

    const {job_prm, cat: {clrs}, CatClrs, CatColor_price_groups, DpBuyers_order, Editor} = $p;
    
    if(!project && sys instanceof Editor.BuilderElement) {
      project = sys.project;
    }

    mf.choice_params.push({
      name: 'parent',
      path: {not: clrs.predefined('СЛУЖЕБНЫЕ')}
    });

    if(sys) {

      // связи параметров для цвета изделия
      const {clr_product} = job_prm.properties;
      const filter = {}
      if(clr_product && sys instanceof DpBuyers_order) {
        const links = clr_product.params_links({obj: {project, _owner: {_owner: sys.characteristic}}});
        // проверим вхождение значения в доступные и при необходимости изменим
        if(links.length) {
          clr_product.filter_params_links(filter, null, links);
          filter.ref && mf.choice_params.push({
            name: 'ref',
            path: filter.ref,
          });
        }
      }

      // фильтр доступных цветов системы или вставки
      let clr_group = clrs.find_group(sys);

      mf.choice_params.push({
        name: 'ref',
        get path() {
          if(clr_group.empty() || (!clr_group.clr_conformity.count() && clr_group.condition_formula.empty())) {
            return {not: ''};
          }
          return {in: clr_group.clrs()};
        }
      });

      // подмешиваем признак сокрытия составных
      if(clr_group.hide_composite) {
        mf.hide_composite = true;
      }
      else if(mf.hide_composite) {
        mf.hide_composite = false;
      }

      // если разрешен единственный цвет, установим ro
      if(!clr_group.empty() && clr_group.clrs().length === 1) {
        mf.single_value = clr_group.clrs()[0];
      }
      else if(filter.ref?.in && filter.ref.in?.length === 1) {
        mf.single_value = filter.ref.in[0];
      }
      else if(mf.single_value) {
        delete mf.single_value;
      }
      return clr_group;
    }
  }

  /**
   * ищет цветогруппу для sys неопределенного типа
   * @param sys
   * @return {CatColor_price_groups}
   */
  find_group(sys) {
    const {BuilderElement, Filling} = $p.EditorInvisible;
    let clr_group;
    if(sys instanceof BuilderElement) {
      clr_group = sys.inset.clr_group;
      if(clr_group.empty() && !(sys instanceof Filling)) {
        clr_group = sys.project._dp.sys.clr_group;
      }
    }
    else if(sys.hasOwnProperty('sys') && sys.profile && sys.profile.inset) {
      const sclr_group = sys.sys.clr_group;
      const iclr_group = sys.profile.inset.clr_group;
      clr_group = iclr_group.empty() ? sclr_group : iclr_group;
    }
    else if(sys.sys && sys.sys.clr_group) {
      clr_group = sys.sys.clr_group;
    }
    else {
      clr_group = sys.clr_group;
    }
    return clr_group;
  }

}
$p.cat.create('clrs', CatClrsManager, false);
class CatColor_price_groups extends CatObj{
get color_price_group_destination(){return this._getter('color_price_group_destination')}
set color_price_group_destination(v){this._setter('color_price_group_destination',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get mode(){return this._getter('mode')}
set mode(v){this._setter('mode',v)}
get hide_composite(){return this._getter('hide_composite')}
set hide_composite(v){this._setter('hide_composite',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get price_groups(){return this._getter_ts('price_groups')}
set price_groups(v){this._setter_ts('price_groups',v)}
get clr_conformity(){return this._getter_ts('clr_conformity')}
set clr_conformity(v){this._setter_ts('clr_conformity',v)}
get exclude(){return this._getter_ts('exclude')}
set exclude(v){this._setter_ts('exclude',v)}


  /**
   * Рассчитывает и устанавливает при необходимости в obj цвет по умолчанию
   * @param [obj] - если указано, в поле clr этого объекта будет установлен цвет
   * @return CatClrs
   */
  default_clr(obj = {}) {

    // а надо ли устанавливать? если не задано ограничение, выходим
    const available = this.clrs();

    // бежим по строкам ограничения цветов
    if(available.length && !this.contains(obj.clr, available)) {
      // подставляем первый разрешенный
      obj.clr = available[0];
    }

    return obj.clr;
  }

  /**
   * Извлекает доступные цвета
   * @param [side] {EmnCnnSides}
   * @return {Array.<CatClrs>}
   */
  clrs(side) {
    const {_manager: {_owner}, _data, condition_formula: formula, mode, clr_conformity} = this;
    const {cat} = _owner.$p;
    if(!_data.clrs) {
      const clrs = new Set();

      clr_conformity.forEach(({clr1}) => {
        if(clr1 instanceof CatClrs) {
          if(clr1.is_folder) {
            clr1._children().forEach((clr) => clrs.add(clr));
          }
          else {
            clrs.add(clr1);
          }
        }
        else if(clr1 instanceof CatColor_price_groups) {
          for(const clr of clr1.clrs()) {
            clrs.add(clr);
          }
        }
      });

      // уточним по формуле условия
      if(!formula.empty()) {
        const attr = {clrs};
        if(!mode) {
          _data.clrs = Array.from(clrs).filter((clr) => formula.execute(clr, attr));
        }
        else {
          cat.clrs.forEach((clr) => {
            if(clr.parent.predefined_name || clrs.has(clr)) {
              return;
            }
            if(formula.execute(clr, attr)) {
              clrs.add(clr);
            }
          })
        }
      }

      if(!_data.clrs) {
        _data.clrs = Array.from(clrs);
      }
    }
    const srows = this.exclude.find_rows({side});
    return srows.length ? _data.clrs.filter((clr) => {
      for(const {clr: eclr} of srows) {
        if((eclr === clr) || (eclr instanceof CatColor_price_groups && eclr.contains(clr))) {
          return false;
        }
      }
      return true;
    }) : _data.clrs;
  }

  /**
   * Проверяет, подходит ли цвет данной группе
   * @param clr {CatClrs} - цвет, который проверяем
   * @param [clrs] {Array} - массив clrs, если не задан, рассчитываем
   * @param [any] {Boolean} - признак для составных - учитывать обе стороны или любую
   * @returns {boolean}
   */
  contains(clr, clrs, any) {
    if(this.empty() && !clrs) {
      return true;
    }
    if(!clrs) {
      clrs = this.clrs();
    }
    if(!clrs.length) {
      return true;
    }
    return clr.is_composite() ? (
      any ? 
        (clrs.includes(clr.clr_in) || clrs.includes(clr.clr_out)) :
        clrs.includes(clr.clr_in) && clrs.includes(clr.clr_out)
    ) : clrs.includes(clr);
  }}
$p.CatColor_price_groups = CatColor_price_groups;
class CatColor_price_groupsPrice_groupsRow extends TabularSectionRow{
get price_group(){return this._getter('price_group')}
set price_group(v){this._setter('price_group',v)}
}
$p.CatColor_price_groupsPrice_groupsRow = CatColor_price_groupsPrice_groupsRow;
class CatColor_price_groupsClr_conformityRow extends TabularSectionRow{
get clr1(){return this._getter('clr1')}
set clr1(v){this._setter('clr1',v)}
get clr2(){return this._getter('clr2')}
set clr2(v){this._setter('clr2',v)}
}
$p.CatColor_price_groupsClr_conformityRow = CatColor_price_groupsClr_conformityRow;
class CatColor_price_groupsExcludeRow extends TabularSectionRow{
get side(){return this._getter('side')}
set side(v){this._setter('side',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
}
$p.CatColor_price_groupsExcludeRow = CatColor_price_groupsExcludeRow;
$p.cat.create('color_price_groups');
class CatDivisions extends CatObj{
get main_project(){return this._getter('main_project')}
set main_project(v){this._setter('main_project',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get keys(){return this._getter_ts('keys')}
set keys(v){this._setter_ts('keys',v)}
}
$p.CatDivisions = CatDivisions;
class CatDivisionsKeysRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
}
$p.CatDivisionsKeysRow = CatDivisionsKeysRow;
$p.cat.create('divisions');
class CatUsers extends CatObj{
get invalid(){return this._getter('invalid')}
set invalid(v){this._setter('invalid',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get individual_person(){return this._getter('individual_person')}
set individual_person(v){this._setter('individual_person',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get ancillary(){return this._getter('ancillary')}
set ancillary(v){this._setter('ancillary',v)}
get user_ib_uid(){return this._getter('user_ib_uid')}
set user_ib_uid(v){this._setter('user_ib_uid',v)}
get id(){return this._getter('id')}
set id(v){this._setter('id',v)}
get latin(){return this._getter('latin')}
set latin(v){this._setter('latin',v)}
get prefix(){return this._getter('prefix')}
set prefix(v){this._setter('prefix',v)}
get branch(){return this._getter('branch')}
set branch(v){this._setter('branch',v)}
get push_only(){return this._getter('push_only')}
set push_only(v){this._setter('push_only',v)}
get roles(){return this._getter('roles')}
set roles(v){this._setter('roles',v)}
get ips(){return this._getter('ips')}
set ips(v){this._setter('ips',v)}
get suffix(){return this._getter('suffix')}
set suffix(v){this._setter('suffix',v)}
get direct(){return this._getter('direct')}
set direct(v){this._setter('direct',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
get acl_objs(){return this._getter_ts('acl_objs')}
set acl_objs(v){this._setter_ts('acl_objs',v)}
get ids(){return this._getter_ts('ids')}
set ids(v){this._setter_ts('ids',v)}
get subscribers(){return this._getter_ts('subscribers')}
set subscribers(v){this._setter_ts('subscribers',v)}
}
$p.CatUsers = CatUsers;
class CatUsersContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get email_address(){return this._getter('email_address')}
set email_address(v){this._setter('email_address',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
get list_view(){return this._getter('list_view')}
set list_view(v){this._setter('list_view',v)}
}
$p.CatUsersContact_informationRow = CatUsersContact_informationRow;
class CatUsersAcl_objsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get by_default(){return this._getter('by_default')}
set by_default(v){this._setter('by_default',v)}
}
$p.CatUsersAcl_objsRow = CatUsersAcl_objsRow;
class CatUsersIdsRow extends TabularSectionRow{
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get server(){return this._getter('server')}
set server(v){this._setter('server',v)}
}
$p.CatUsersIdsRow = CatUsersIdsRow;
class CatUsersSubscribersRow extends TabularSectionRow{
get abonent(){return this._getter('abonent')}
set abonent(v){this._setter('abonent',v)}
get branch(){return this._getter('branch')}
set branch(v){this._setter('branch',v)}
get roles(){return this._getter('roles')}
set roles(v){this._setter('roles',v)}
}
$p.CatUsersSubscribersRow = CatUsersSubscribersRow;
class CatUsersManager extends CatManager {

  // после загрузки пользователей, морозим объект, чтобы его невозможно было изменить из интерфейса
  load_array(aattr, forse) {
    const res = [];
    for (let aobj of aattr) {
      let obj = this.by_ref[aobj.ref];
      if(obj && !obj.is_new()) {
        continue;
      }
      if(!aobj.acl_objs) {
        aobj.acl_objs = [];
      }
      const {acl} = aobj;
      delete aobj.acl;
      if(obj) {
        obj._mixin(aobj);
      }
      else {
        obj = new $p.CatUsers(aobj, this, true);
      }

      const {_obj} = obj;
      if(_obj && !_obj._acl) {
        _obj._acl = acl;
        obj._set_loaded();
        Object.freeze(obj);
        Object.freeze(_obj);
        for (let j in _obj) {
          if(typeof _obj[j] == 'object') {
            Object.freeze(_obj[j]);
            for (let k in _obj[j]) {
              typeof _obj[j][k] == 'object' && Object.freeze(_obj[j][k]);
            }
          }
        }
        res.push(obj);
      }
    }
    return res;
  }

  // пользователей не выгружаем
  unload_obj() {	}

}
$p.cat.create('users', CatUsersManager, false);
class CatProjects extends CatObj{
get finished(){return this._getter('finished')}
set finished(v){this._setter('finished',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get category(){return this._getter('category')}
set category(v){this._setter('category',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get stages(){return this._getter_ts('stages')}
set stages(v){this._setter_ts('stages',v)}
get acl_objs(){return this._getter_ts('acl_objs')}
set acl_objs(v){this._setter_ts('acl_objs',v)}
}
$p.CatProjects = CatProjects;
class CatProjectsStagesRow extends TabularSectionRow{
get stage(){return this._getter('stage')}
set stage(v){this._setter('stage',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
}
$p.CatProjectsStagesRow = CatProjectsStagesRow;
class CatProjectsAcl_objsRow extends TabularSectionRow{
get acl_obj(){return this._getter('acl_obj')}
set acl_obj(v){this._setter('acl_obj',v)}
}
$p.CatProjectsAcl_objsRow = CatProjectsAcl_objsRow;
$p.cat.create('projects');
class CatStores extends CatObj{
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get assembly_days(){return this._getter('assembly_days')}
set assembly_days(v){this._setter('assembly_days',v)}
get address(){return this._getter('address')}
set address(v){this._setter('address',v)}
get latitude(){return this._getter('latitude')}
set latitude(v){this._setter('latitude',v)}
get longitude(){return this._getter('longitude')}
set longitude(v){this._setter('longitude',v)}
get delivery_area(){return this._getter('delivery_area')}
set delivery_area(v){this._setter('delivery_area',v)}
get address_fields(){return this._getter('address_fields')}
set address_fields(v){this._setter('address_fields',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.CatStores = CatStores;
$p.cat.create('stores');
class CatCash_flow_articles extends CatObj{
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatCash_flow_articles = CatCash_flow_articles;
$p.cat.create('cash_flow_articles');
class CatNom_prices_types extends CatObj{
get price_currency(){return this._getter('price_currency')}
set price_currency(v){this._setter('price_currency',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
get vat_price_included(){return this._getter('vat_price_included')}
set vat_price_included(v){this._setter('vat_price_included',v)}
get rounding_order(){return this._getter('rounding_order')}
set rounding_order(v){this._setter('rounding_order',v)}
get rounding_in_a_big_way(){return this._getter('rounding_in_a_big_way')}
set rounding_in_a_big_way(v){this._setter('rounding_in_a_big_way',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
}
$p.CatNom_prices_types = CatNom_prices_types;
$p.cat.create('nom_prices_types');
class CatIndividuals extends CatObj{
get birth_date(){return this._getter('birth_date')}
set birth_date(v){this._setter('birth_date',v)}
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get imns_code(){return this._getter('imns_code')}
set imns_code(v){this._setter('imns_code',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get pfr_number(){return this._getter('pfr_number')}
set pfr_number(v){this._setter('pfr_number',v)}
get sex(){return this._getter('sex')}
set sex(v){this._setter('sex',v)}
get birth_place(){return this._getter('birth_place')}
set birth_place(v){this._setter('birth_place',v)}
get Фамилия(){return this._getter('Фамилия')}
set Фамилия(v){this._setter('Фамилия',v)}
get Имя(){return this._getter('Имя')}
set Имя(v){this._setter('Имя',v)}
get Отчество(){return this._getter('Отчество')}
set Отчество(v){this._setter('Отчество',v)}
get ФамилияРП(){return this._getter('ФамилияРП')}
set ФамилияРП(v){this._setter('ФамилияРП',v)}
get ИмяРП(){return this._getter('ИмяРП')}
set ИмяРП(v){this._setter('ИмяРП',v)}
get ОтчествоРП(){return this._getter('ОтчествоРП')}
set ОтчествоРП(v){this._setter('ОтчествоРП',v)}
get ОснованиеРП(){return this._getter('ОснованиеРП')}
set ОснованиеРП(v){this._setter('ОснованиеРП',v)}
get ДолжностьРП(){return this._getter('ДолжностьРП')}
set ДолжностьРП(v){this._setter('ДолжностьРП',v)}
get Должность(){return this._getter('Должность')}
set Должность(v){this._setter('Должность',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
}
$p.CatIndividuals = CatIndividuals;
class CatIndividualsContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get email_address(){return this._getter('email_address')}
set email_address(v){this._setter('email_address',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
get list_view(){return this._getter('list_view')}
set list_view(v){this._setter('list_view',v)}
}
$p.CatIndividualsContact_informationRow = CatIndividualsContact_informationRow;
$p.cat.create('individuals');
class CatCharacteristics extends CatObj{
get x(){return this._getter('x')}
set x(v){this._setter('x',v)}
get y(){return this._getter('y')}
set y(v){this._setter('y',v)}
get z(){return this._getter('z')}
set z(v){this._setter('z',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get weight(){return this._getter('weight')}
set weight(v){this._setter('weight',v)}
get calc_order(){return this._getter('calc_order')}
set calc_order(v){this._setter('calc_order',v)}
get product(){return this._getter('product')}
set product(v){this._setter('product',v)}
get leading_product(){return this._getter('leading_product')}
set leading_product(v){this._setter('leading_product',v)}
get leading_elm(){return this._getter('leading_elm')}
set leading_elm(v){this._setter('leading_elm',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get base_block(){return this._getter('base_block')}
set base_block(v){this._setter('base_block',v)}
get sys(){return this._getter('sys')}
set sys(v){this._setter('sys',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get obj_delivery_state(){return this._getter('obj_delivery_state')}
set obj_delivery_state(v){this._setter('obj_delivery_state',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get builder_props(){return this._getter('builder_props')}
set builder_props(v){this._setter('builder_props',v)}
get svg(){return this._getter('svg')}
set svg(v){this._setter('svg',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get owner(){return this._getter('owner')}
set owner(v){this._setter('owner',v)}
get constructions(){return this._getter_ts('constructions')}
set constructions(v){this._setter_ts('constructions',v)}
get coordinates(){return this._getter_ts('coordinates')}
set coordinates(v){this._setter_ts('coordinates',v)}
get inserts(){return this._getter_ts('inserts')}
set inserts(v){this._setter_ts('inserts',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}
get cnn_elmnts(){return this._getter_ts('cnn_elmnts')}
set cnn_elmnts(v){this._setter_ts('cnn_elmnts',v)}
get glass_specification(){return this._getter_ts('glass_specification')}
set glass_specification(v){this._setter_ts('glass_specification',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get glasses(){return this._getter_ts('glasses')}
set glasses(v){this._setter_ts('glasses',v)}
get specification(){return this._getter_ts('specification')}
set specification(v){this._setter_ts('specification',v)}
get dop(){return this._getter_ts('dop')}
set dop(v){this._setter_ts('dop',v)}
get demand(){return this._getter_ts('demand')}
set demand(v){this._setter_ts('demand',v)}


  /**
   * @param attr
   * @returns {CatCharacteristics|boolean}
   * перед записью надо пересчитать наименование и рассчитать итоги
   */
  before_save(attr) {

    // уточняем номенклатуру системы
    const {prod_nom, calc_order, _data} = this;

    // контроль прав на запись характеристики
    if(!attr.force && calc_order.is_read_only) {
      _data._err = {
        title: 'Права доступа',
        type: 'alert-error',
        text: `Запрещено изменять заказ в статусе ${calc_order.obj_delivery_state}`
      };
      return false;
    }

    // для шаблонов, ссылка на типовой блок не нужна
    if(calc_order.obj_delivery_state == 'Шаблон' && !this.base_block.empty()) {
      this.base_block = '';
    }

    // пересчитываем наименование
    const name = this.prod_name();
    if(name) {
      this.name = name;
    }

    // дублируем контрагента для целей RLS
    this.partner = calc_order.partner;

    return this;

  }

  // шаблоны читаем из ram
  load(attr = {}) {
    if(this.obj_delivery_state == 'Шаблон') {
      attr.db = this._manager.adapter.db({cachable: 'ram'});
    }
    return super.load(attr);
  }

  // шаблоны сохраняем в базу ram
  save(post, operational, attachments, attr = {}) {
    if(this.obj_delivery_state == 'Шаблон') {
      attr.db = this._manager.adapter.db({cachable: 'ram'});
    }
    return super.save(post, operational, attachments, attr);
  }

  // при удалении строки вставок, удаляем параметры и соединения
  del_row(row) {
    if(row instanceof $p.CatCharacteristicsInsertsRow) {
      const {cnstr, inset, region, _owner} = row;
      const {params, cnn_elmnts} = _owner._owner;
      if(!inset.empty()) {
        params.del({cnstr, inset});
      }
      if(region) {
        params.del({cnstr, region});
        cnn_elmnts.clear(({elm1, node1}) => {
          return elm1 === -cnstr && node1.endsWith(region.toString());
        });
      }
    }
  }

  // при добавлении строки вставок, устанавливаем ряд
  add_row(row, attr) {
    if(row instanceof $p.CatCharacteristicsInsertsRow) {
      if(attr.inset && !attr.region) {
        attr.region = $p.cat.inserts.get(attr.inset).region;
      }
    }
  }

  /**
   * Добавляет параметры вставки, пересчитывает признак hide
   * @param inset
   * @param cnstr
   * @param [blank_inset]
   * @param [region]
   */
  add_inset_params(inset, cnstr, blank_inset, region) {
    const ts_params = this.params;
    const params = new Set();
    const filter = region ? {cnstr, region} : {cnstr, inset: blank_inset || inset};

    ts_params.find_rows(filter, ({param}) => params.add(param));

    const {product_params} = inset;
    inset.used_params().forEach((param) => {
      if((!param.is_calculated || param.show_calculated) && !params.has(param)) {
        const def = product_params.find({param});
        ts_params.add(region ? {cnstr, region, param, value: (def && def.value) || ""} :
          {cnstr, inset: blank_inset || inset, param, value: (def && def.value) || ""});
        params.add(param);
      }
    });

    ts_params.find_rows(filter, (row) => {
      const links = row.param.params_links({grid: {selection: {cnstr}}, obj: row});
      row.hide = links.some((link) => link.hide);
    });
  }

  /**
   * Рассчитывает наименование продукции
   */
  prod_name(short) {
    const {calc_order_row, calc_order, leading_product, sys, clr, origin} = this;
    let name = '';
    if(calc_order_row) {

      if(calc_order.number_internal) {
        name = calc_order.number_internal.trim();
      }
      else {
        // убираем нули из середины номера
        let num0 = calc_order.number_doc, part = '';
        for (let i = 0; i < num0.length; i++) {
          if(isNaN(parseInt(num0[i]))) {
            name += num0[i];
          }
          else {
            break;
          }
        }
        for (let i = num0.length - 1; i > 0; i--) {
          if(isNaN(parseInt(num0[i]))) {
            break;
          }
          part = num0[i] + part;
        }
        name += parseInt(part || 0).toFixed(0);
      }

      name += '/' + calc_order_row.row.pad();

      // для подчиненных, номер строки родителя
      if(!leading_product.empty() && !leading_product.calc_order.empty()) {
        const {calc_order_row} = leading_product;
        name += ':' + (calc_order_row ? calc_order_row.row.pad() : '0');
      }

      // добавляем название системы или вставки
      if(!sys.empty()) {
        name += '/' + sys.name;
      }
      else if(origin && !origin.empty()) {
        name += '/' + (origin instanceof $p.DocPurchase_order ? this.note : (origin.name || origin.number_doc));
      }

      if(!short) {

        // добавляем название цвета
        if(!clr.empty()) {
          name += '/' + this.clr.name;
        }

        // добавляем размеры
        if(this.x && this.y) {
          name += '/' + this.x.toFixed(0) + 'x' + this.y.toFixed(0);
        }
        else if(this.x) {
          name += '/' + this.x.toFixed(0);
        }
        else if(this.y) {
          name += '/' + this.y.toFixed(0);
        }

        if(this.z) {
          if(this.x || this.y) {
            name += 'x' + this.z.toFixed(0);
          }
          else {
            name += '/' + this.z.toFixed(0);
          }
        }

        if(this.s) {
          name += '/S:' + this.s.toFixed(3);
        }

        // подмешиваем значения параметров
        let sprm = '';
        this.params.find_rows({cnstr: 0}, ({param, value}) => {
          if(param.include_to_name && sprm.indexOf(String(value)) == -1) {
            sprm && (sprm += ';');
            sprm += String(value);
          }
        });
        if(sprm) {
          name += '|' + sprm;
        }
      }
    }
    return name;
  }

  /**
   * Открывает форму происхождения строки спецификации
   */
  open_origin(row_id) {
    try {
      let {origin} = this.specification.get(row_id);
      if(typeof origin == 'number') {
        origin = this.cnn_elmnts.get(origin - 1).cnn;
      }
      if(!origin || origin.is_new()) {
        return $p.msg.show_msg({
          type: 'alert-warning',
          text: `Пустая ссылка на настройки в строке №${row_id + 1}`,
          title: o.presentation
        });
      }
      origin.form_obj();
    }
    catch (err) {
      $p.record_log(err);
    }
  }

  /**
   * Ищет характеристику в озу, в indexeddb не лезет, если нет в озу - создаёт
   * @param elm {Number} - номер элемента или контура
   * @param [origin] {CatInserts} - порождающая вставка
   * @param [modify] {Boolean} - если false - не изменяем - только поиск
   * @param [_order_rows] {Array} - если указано и есть в массиве - не перезаполняем
   * @return {CatCharacteristics}
   */
  find_create_cx(elm, origin, modify, _order_rows) {
    const {_manager, calc_order, params, inserts} = this;
    const {job_prm, utils, cat} = $p;
    if(!origin) {
      origin = cat.inserts.get();
    }
    let cx;
    _manager.find_rows({leading_product: this, leading_elm: elm, origin}, (obj) => {
      if(!obj._deleted) {
        cx = obj;
        return false;
      }
    });
    if(!cx) {
      cx = cat.characteristics.create({
        calc_order,
        leading_product: this,
        leading_elm: elm,
        origin
      }, false, true)._set_loaded();
    }
    if(_order_rows) {
      if(_order_rows.includes(cx)) {
        return cx;
      }
      _order_rows.push(cx);
      cx.specification.clear();
      if(!cx.calc_order_row) {
        calc_order.production.add({characteristic: cx});
      }
    }

    if(modify !== false) {
      // переносим в cx параметры
      cx.params.clear();
      if(elm > 0 || !utils.is_empty_guid(origin.valueOf())) {
        const {length, width} = job_prm.properties;
        params.find_rows({cnstr: -elm, inset: origin}, (row) => {
          if(row.param != length && row.param != width) {
            cx.params.add({param: row.param, value: row.value});
          }
        });
      }
      else {
        params.find_rows({cnstr: 0, inset: origin}, (row) => cx.params.add(row));
      }

      if(elm > 0 || !utils.is_empty_guid(origin.valueOf())) {
        // переносим в cx цвет
        inserts.find_rows({cnstr: -elm, inset: origin}, (row) => {
          cx.clr = row.clr;
        });
        cx.name = cx.prod_name();
      }
      else if(utils.is_empty_guid(origin.valueOf())) {
        // если это продукция слоя, переносим в cx всё, что можно
        cx.constructions.clear();
        cx.inserts.clear();
        cx.coordinates.clear();
        cx.glasses.clear();
        cx.cnn_elmnts.clear();
        cx.cpy_recursive(this, -elm);
      }

    }
    return cx;
  }

  /**
   * Копирует табчасти структуры изделия, начиная со слоя cnstr
   * @param src {CatCharacteristics}
   * @param cnstr {Number}
   */
  cpy_recursive(src, cnstr) {
    const {params, inserts, coordinates, cnn_elmnts, glasses} = this;
    this.constructions.add(src.constructions.find({cnstr}));
    src.params.find_rows({cnstr}, (row) => params.add(row));
    src.inserts.find_rows({cnstr}, (row) => inserts.add(row));
    src.coordinates.find_rows({cnstr}, (row) => {
      coordinates.add(row);
      for(const srow of src.cnn_elmnts) {
        if(srow.elm1 === row.elm || srow.elm2 === row.elm) {
          cnn_elmnts.add(srow);
        }
      }
      const grow = src.glasses.find({elm: row.elm});
      grow && this.glasses.add(grow);
    });

    src.constructions.find_rows({parent: cnstr}, (row) => this.cpy_recursive(src, row.cnstr));
  }

  /**
   * Возврвщает строку заказа, которой принадлежит продукция
   */
  get calc_order_row() {
    return this.calc_order.production.find({characteristic: this});
  }

  /**
   * Возвращает номенклатуру продукции по системе
   */
  get prod_nom() {
    const {sys, params, calc_order, calc_order_row} = this;
    if(!sys.empty()) {

      let setted;

      if(sys.production.count() === 1) {
        this.owner = sys.production.get(0).nom;
      }
      else {
        for(const row of sys.production) {
          if(row.param && !row.param.empty()) {
            if(row.param.check_condition({prm_row: row, ox: this, calc_order})) {
              setted = true;
              this.owner = row.nom;
              break;
            }
          }
        }
        if(!setted) {
          for(const row of sys.production) {
            if(!row.param || row.param.empty()) {
              setted = true;
              this.owner = row.nom;
              break;
            }
          }
        }
        if(!setted) {
          const prow = sys.production.get(0);
          if(prow) {
            this.owner = prow.nom;
          }
        }
      }
    }

    if(calc_order_row && !this.owner.empty() && calc_order_row.nom !== this.owner) {
      calc_order_row.nom = this.owner;
    }

    return this.owner;
  }

  /**
   * Дополнительные свойства изделия для рисовалки
   */
  get builder_props() {
    const defaults = this.constructor.builder_props_defaults;
    const props = {};
    let tmp;
    try {
      tmp = typeof this._obj.builder_props === 'object' ? this._obj.builder_props : JSON.parse(this._obj.builder_props || '{}');
    }
    catch(e) {
      tmp = props;
    }
    for(const prop in defaults){
      if(tmp.hasOwnProperty(prop)) {
        props[prop] = typeof tmp[prop] === 'number' ? tmp[prop] : !!tmp[prop];
      }
      else {
        props[prop] = defaults[prop];
      }
    }
    return props;
  }
  set builder_props(v) {
    if(this.empty()) {
      return;
    }
    let _modified;
    const {_obj, _data} = this;
    const name = 'builder_props';
    const symplify = () => {
      if(typeof v === 'string') {
        v = JSON.parse(v);
      }
      const props = this.builder_props;
      for(const prop in v){
        if(prop < 'a') {
          continue;
        }
        if(props[prop] !== v[prop]) {
          props[prop] = v[prop];
          _modified = true;
        }
      }
      return props;
    };

    if(_data && _data._loading) {
      if(v.length > 200) {
        v = JSON.stringify(symplify());
      }
      _obj[name] = v;
      return;
    }

    if(!_obj[name] || typeof _obj[name] !== 'string'){
      _obj[name] = JSON.stringify(this.constructor.builder_props_defaults);
      _modified = true;
    }

    const props = symplify();
    if(_modified) {
      _obj[name] = JSON.stringify(props);
      this.__notify(name);
    }
  }

  /**
   * Выполняет замену системы, цвета и фурниутры
   * если текущее изделие помечено в обработке
   * @param engine {Scheme|CatInserts} - экземпляр рисовалки или вставки (соответственно, для изделий построителя и параметрика)
   * @param dp {DpBuyers_order} - экземпляр обработки в реквизитах и табчастях которой, правила перезаполнения
   * @return {Scheme|CatInserts}
   */
  apply_props(engine, dp) {
    // если в dp взведён флаг, выполняем подмену
    if(dp && dp.production.find({use: true, characteristic: this})) {
      const {Scheme, Filling, Contour} = $p.EditorInvisible;
      if(engine instanceof Scheme) {
        const {length} = engine._ch;
        // цвет
        if(dp.use_clr && engine._dp.clr !== dp.clr) {
          engine._dp.clr = dp.clr;
          engine._dp_listener(engine._dp, {clr: true});
        }
        // система
        if(dp.use_sys) {
          engine.set_sys(dp.sys);
        }
        // вставки заполнений
        if(dp.use_inset) {
          engine.set_glasses(dp.inset);
        }
        // подмена фурнитуры
        for(const contour of engine.getItems({class: Contour})) {
          const {furn} = contour;
          if(!furn.empty()) {
            dp.sys_furn.find_rows({elm1: furn}, ({elm2}) => {
              if(!elm2.empty() && elm2 !== furn) {
                contour.furn = elm2;
              }
            });
          }
        }
        if(engine._ch.length > length) {
          engine.redraw();
        }
      }
      // подмена параметров - одинаково для рисовалки и параметрика
      dp.product_params.forEach(({param, value, _ch}) => {
        _ch && this.params.find_rows({param}, (row) => {
          row.value = value;
        });
      });
    }
    return engine;
  }

  /**
   * Пересчитывает изделие по тем же правилам, что и визуальная рисовалка
   * @param attr {Object} - параметры пересчёта
   * @param [editor] {EditorInvisible}
   * @param [restore] {Scheme}
   */
  recalc(attr = {}, editor, restore) {

    // сначала, получаем объект заказа и продукции заказа в озу, т.к. пересчет изделия может приводить к пересчету соседних продукций

    // загружаем изделие в редактор
    const remove = !editor;
    if(remove) {
      editor = new $p.EditorInvisible();
    }
    const project = editor.create_scheme();
    return project.load(this, true)
      .then(() => {
        // выполняем пересчет
        return project.save_coordinates(Object.assign({save: true, svg: false}, attr));
      })
      .then(() => {
        project.ox = '';
        return remove ? editor.unload() : project.unload();
      })
      .then(() => {
        restore?.activate();
        return this;
      })
      .catch((err) => {
        restore?.activate();
        throw err;
      });
  }

  /**
   * Рисует изделие или фрагмент изделия в Buffer в соответствии с параметрами attr
   * @param attr
   * @param editor
   */
  draw(attr = {}, editor) {
    const {utils, cch, cat, EditorInvisible} = $p;
    const link = {imgs: {}};

    if(attr.res instanceof Map) {
      attr.res.set(this, link);
    }
    else {
      if(!attr.res) {
        attr.res = {};
      }
      attr.res[utils.snake_ref(this.ref)] = link;
    }
    const {format, keep_editor} = attr;
    
    // загружаем изделие в редактор
    const remove = !editor;
    if(remove) {
      editor = new EditorInvisible();
    }
    const project = editor.create_scheme();

    // если это москитка, полный проект можно не грузить
    if(this.origin?.insert_type?.is?.('mosquito')) {
      const {origin, leading_product, x, y} = this;
      const ox = this._manager.create(false, false, true);
      ox._set_loaded(ox.ref);
      
      // находим импосты и рамки
      let {sz, nom, imposts} = origin.mosquito_props();
      if(!nom) {
        return Promise.resolve(attr.res);
      }
      const irama = cat.inserts.by_nom(nom);
      const lcnn = cat.cnns.by_nom(nom, nom);
      const iimpost = imposts && cat.inserts.by_nom(imposts.nom);
      const tcnn = imposts && cat.cnns.by_nom(imposts.nom, nom, 't');

      return project.load(ox, true)
        .then(() => {
          project._attr._hide_errors = true;
          const layer = EditorInvisible.Contour.create({project, parent: null});
          // рисуем рамы
          const segm = [
            [[x, 0], [0, 0]],
            [[0, 0], [0, -y]],
            [[0, -y], [x, -y]],
            [[x, -y], [x, 0]],
          ];
          for(const segments of segm) {
            new EditorInvisible.Profile({
              generatrix: new editor.Path({segments}),
              proto: {
                inset: irama,
                clr: this.clr,
              },
            });  
          }
          // рисуем импосты
          const {bounds} = layer;
          if(imposts) {
            const add_impost = (y) => {
              new EditorInvisible.Profile({
                generatrix: new editor.Path({
                  segments: [[0, y], [x, y]]
                }),
                proto: {
                  inset: iimpost,
                  clr: this.clr,
                },
              });
            };
            cat.inserts.traverse_steps({
              imposts,
              bounds,
              add_impost, 
              ox: this,
              cnstr: 0, 
              origin: utils.blank.guid,
            });
          }
          layer.redraw();
          layer.l_dimensions.redraw(true);
          for(const gl of layer.fillings) {
            gl.visible = false;
          }

          // добавляем текст
          const {elm_font_size, font_family} = editor.consts;
          new editor.PointText({
            parent: layer,
            fillColor: 'black',
            fontFamily: font_family,
            fontSize: elm_font_size * 1.2,
            guide: true,
            content: this.origin.presentation,
            point: bounds.bottomLeft.add([nom.width * 1.2, -nom.width * 1.2]),
          });
          
          project.zoom_fit();
          if(Array.isArray(format) ? format.includes('png') : format === 'png') {
            project.view.update();
            link.imgs[`l0`] = project.view.element.toDataURL('image/png').substr(22);
          }
          if(Array.isArray(format) ? format.includes('svg') : (format === 'svg' || !format)) {
            link.imgs[`s0`] = project.get_svg(attr);
          }
        })
        .catch(() => null)
        .then(() => {
          project.ox = '';
          ox.unload();
          return keep_editor ? null : (remove ? editor.unload() : project.unload());
        })
        .then(() => attr.res);
      
    }
    return project.load(this, attr.builder_props || true)
      .then(() => {
        const {_obj: {glasses, constructions, coordinates}} = this;
        // формируем эскиз(ы) в соответствии с attr
        if(attr.elm) {
          const elmnts = Array.isArray(attr.elm) ? attr.elm : [attr.elm];
          for(const elm of elmnts) {
            const item = project.draw_fragment({elm});
            const num = elm > 0 ? `g${elm}` : `l${elm}`;
            if(format === 'png') {
              link.imgs[num] = project.view.element.toDataURL('image/png').substr(22);
            }
            else {
              link.imgs[num] = project.get_svg(attr);
            }
            if(item){
              item.visible = false;
            }
          }
        }
        else if(attr.glasses) {
          link.glasses = glasses.map((glass) => Object.assign({}, glass));
          link.glasses.forEach((row) => {
            const glass = project.draw_fragment({elm: row.elm});
            // подтянем формулу стеклопакета
            if(format === 'png') {
              link.imgs[`g${row.elm}`] = project.view.element.toDataURL('image/png').substr(22);
            }
            else {
              link.imgs[`g${row.elm}`] = project.get_svg(attr);
            }
            if(glass){
              row.formula_long = glass.formula(true);
              glass.visible = false;
            }
          });
        }
        else {
          if(format === 'png') {
            link.imgs[`l0`] = project.view.element.toDataURL('image/png').substr(22);
          }
          else {
            link.imgs[`l0`] = project.get_svg(attr);
          }
          if(attr.glasses !== false) {
            constructions.forEach(({cnstr}) => {
              project.draw_fragment({elm: -cnstr});
              if(format === 'png') {
                link.imgs[`l${cnstr}`] = project.view.element.toDataURL('image/png').substr(22);
              }
              else {
                link.imgs[`l${cnstr}`] = project.get_svg(attr);
              }
            });
          }
        }
      })
      .then(() => {
        project.ox = '';
        return keep_editor ? null : (remove ? editor.unload() : project.unload());
      })
      .then(() => attr.res);
  }

  /**
   * Значение параметра для текущего слоя или вставки
   * @param cnstr
   * @param inset
   * @param param
   * @return {*}
   */
  extract_value({cnstr, inset, param}) {
    const {utils: {blank}, CatNom, cat} = $p;
    const is_nom = param instanceof CatNom;
    inset = inset ? inset.valueOf() : blank.guid;
    param = param ? param.valueOf() : blank.guid;
    if(!Array.isArray(cnstr)) {
      cnstr = [cnstr];
    }
    const row = this.params._obj.find((row) =>
      cnstr.includes(row.cnstr) && (!row.inset && inset === blank.guid || row.inset === inset) && row.param === param);
    return is_nom ? cat.characteristics.get(row && row.value) : row && row.value;
  }

  /**
   * Рассчитывает массу фрагмента изделия
   * @param [elmno] {Number|undefined} - номер элемента (с полюсом) или слоя (с минусом)
   * @return {Number}
   */
  elm_weight(elmno) {
    const {coordinates, specification} = this;
    const map = new Map();
    let weight = 0;
    specification.forEach(({elm, nom, totqty}) => {
      // отбрасываем лишние строки
      if(elmno !== undefined && elm !== elmno) {
        if(elmno < 0 && elm > 0) {
          if(!map.get(elm)) {
            const crow = coordinates.find({elm});
            map.set(elm, crow ? -crow.cnstr : Infinity);
          }
          if(map.get(elm) !== elmno) return;
        }
        else {
          return;
        }
      }
      weight += nom.density * totqty;
    });
    // элементы внутри слоя могут быть вынесены в отдельные строки заказа
    if(elmno < 0) {
      const contour = {cnstr: -elmno};
      coordinates.find_rows(contour, ({elm, inset}) => {
        if(inset.is_order_row_prod({ox: this, elm: {elm}, contour})) {
          const cx = this.find_create_cx(elm, $p.utils.blank.guid, false);
          weight += cx.elm_weight();
        }
      });
    }
    return weight;
  }

  /**
   * Выясняет, есть ли в спецификации номенклатура из константы cname
   * @param cname {String}
   * @return {Boolean}
   */
  has_nom(cname) {
    let noms = $p.job_prm.nom[cname];
    let res = false;
    if(noms) {
      if(!Array.isArray(noms)) {
        noms = [noms];
      }
      for(const {nom} of this.specification) {
        if(noms.some((curr) => curr === nom || curr.is_folder && nom._hierarchy(curr))) {
          res = true;
          break;
        }
      }
    }
    return res;
  }

  /**
   * Формирует строку индекса слоя cnstr
   * @param cnstr {Number}
   * @return {String}
   */
  hierarchyName(cnstr) {
    const {constructions} = this;
    // строка табчасти конструкций
    const row = constructions.find({cnstr});
    if(!row) {
      return '';
    }
    // найдём все слои нашего уровня
    const rows = constructions.find_rows({parent: row.parent})
      .map((row) => row._row)
      .sort($p.utils.sort('cnstr'));
    let index = (rows.indexOf(row) + 1).toFixed();
    if(row.parent) {
      index = `${this.hierarchyName(row.parent)}.${index}`;
    }
    return index;
  }

  /**
   * Настройки отображения в рисовалке по умолчанию
   * @type {Object}
   * @static
   */
  static builder_props_defaults = {
    auto_lines: true,
    custom_lines: true,
    cnns: true,
    visualization: true,
    txts: true,
    rounding: 0,
    mosquito: true,
    jalousie: true,
    grid: 50,
    carcass: false,
    mirror: false,
    articles: 0,
  };}
$p.CatCharacteristics = CatCharacteristics;
class CatCharacteristicsConstructionsRow extends TabularSectionRow{
get cnstr(){return this._getter('cnstr')}
set cnstr(v){this._setter('cnstr',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get x(){return this._getter('x')}
set x(v){this._setter('x',v)}
get y(){return this._getter('y')}
set y(v){this._setter('y',v)}
get z(){return this._getter('z')}
set z(v){this._setter('z',v)}
get w(){return this._getter('w')}
set w(v){this._setter('w',v)}
get h(){return this._getter('h')}
set h(v){this._setter('h',v)}
get furn(){return this._getter('furn')}
set furn(v){this._setter('furn',v)}
get direction(){return this._getter('direction')}
set direction(v){this._setter('direction',v)}
get h_ruch(){return this._getter('h_ruch')}
set h_ruch(v){this._setter('h_ruch',v)}
get fix_ruch(){return this._getter('fix_ruch')}
set fix_ruch(v){this._setter('fix_ruch',v)}
get is_rectangular(){return this._getter('is_rectangular')}
set is_rectangular(v){this._setter('is_rectangular',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get flipped(){return this._getter('flipped')}
set flipped(v){this._setter('flipped',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatCharacteristicsConstructionsRow = CatCharacteristicsConstructionsRow;
class CatCharacteristicsCoordinatesRow extends TabularSectionRow{
get cnstr(){return this._getter('cnstr')}
set cnstr(v){this._setter('cnstr',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get path_data(){return this._getter('path_data')}
set path_data(v){this._setter('path_data',v)}
get x1(){return this._getter('x1')}
set x1(v){this._setter('x1',v)}
get y1(){return this._getter('y1')}
set y1(v){this._setter('y1',v)}
get x2(){return this._getter('x2')}
set x2(v){this._setter('x2',v)}
get y2(){return this._getter('y2')}
set y2(v){this._setter('y2',v)}
get r(){return this._getter('r')}
set r(v){this._setter('r',v)}
get arc_ccw(){return this._getter('arc_ccw')}
set arc_ccw(v){this._setter('arc_ccw',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get angle_hor(){return this._getter('angle_hor')}
set angle_hor(v){this._setter('angle_hor',v)}
get alp1(){return this._getter('alp1')}
set alp1(v){this._setter('alp1',v)}
get alp2(){return this._getter('alp2')}
set alp2(v){this._setter('alp2',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get pos(){return this._getter('pos')}
set pos(v){this._setter('pos',v)}
get orientation(){return this._getter('orientation')}
set orientation(v){this._setter('orientation',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get offset(){return this._getter('offset')}
set offset(v){this._setter('offset',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatCharacteristicsCoordinatesRow = CatCharacteristicsCoordinatesRow;
class CatCharacteristicsInsertsRow extends TabularSectionRow{
get cnstr(){return this._getter('cnstr')}
set cnstr(v){this._setter('cnstr',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatCharacteristicsInsertsRow = CatCharacteristicsInsertsRow;
class CatCharacteristicsCnn_elmntsRow extends TabularSectionRow{
get elm1(){return this._getter('elm1')}
set elm1(v){this._setter('elm1',v)}
get node1(){return this._getter('node1')}
set node1(v){this._setter('node1',v)}
get elm2(){return this._getter('elm2')}
set elm2(v){this._setter('elm2',v)}
get node2(){return this._getter('node2')}
set node2(v){this._setter('node2',v)}
get cnn(){return this._getter('cnn')}
set cnn(v){this._setter('cnn',v)}
get aperture_len(){return this._getter('aperture_len')}
set aperture_len(v){this._setter('aperture_len',v)}
}
$p.CatCharacteristicsCnn_elmntsRow = CatCharacteristicsCnn_elmntsRow;
class CatCharacteristicsGlass_specificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatCharacteristicsGlass_specificationRow = CatCharacteristicsGlass_specificationRow;
class CatCharacteristicsGlassesRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get height(){return this._getter('height')}
set height(v){this._setter('height',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get is_rectangular(){return this._getter('is_rectangular')}
set is_rectangular(v){this._setter('is_rectangular',v)}
get is_sandwich(){return this._getter('is_sandwich')}
set is_sandwich(v){this._setter('is_sandwich',v)}
get thickness(){return this._getter('thickness')}
set thickness(v){this._setter('thickness',v)}
get coffer(){return this._getter('coffer')}
set coffer(v){this._setter('coffer',v)}
}
$p.CatCharacteristicsGlassesRow = CatCharacteristicsGlassesRow;
class CatCharacteristicsSpecificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get alp1(){return this._getter('alp1')}
set alp1(v){this._setter('alp1',v)}
get alp2(){return this._getter('alp2')}
set alp2(v){this._setter('alp2',v)}
get totqty(){return this._getter('totqty')}
set totqty(v){this._setter('totqty',v)}
get totqty1(){return this._getter('totqty1')}
set totqty1(v){this._setter('totqty1',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get amount_marged(){return this._getter('amount_marged')}
set amount_marged(v){this._setter('amount_marged',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get specify(){return this._getter('specify')}
set specify(v){this._setter('specify',v)}
get changed(){return this._getter('changed')}
set changed(v){this._setter('changed',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatCharacteristicsSpecificationRow = CatCharacteristicsSpecificationRow;
class CatCharacteristicsDopRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get coordinate(){return this._getter('coordinate')}
set coordinate(v){this._setter('coordinate',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatCharacteristicsDopRow = CatCharacteristicsDopRow;
class CatCharacteristicsDemandRow extends TabularSectionRow{
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get days_from_execution(){return this._getter('days_from_execution')}
set days_from_execution(v){this._setter('days_from_execution',v)}
get days_to_execution(){return this._getter('days_to_execution')}
set days_to_execution(v){this._setter('days_to_execution',v)}
}
$p.CatCharacteristicsDemandRow = CatCharacteristicsDemandRow;
$p.cat.create('characteristics');
class CatPrice_groups extends CatObj{
get definition(){return this._getter('definition')}
set definition(v){this._setter('definition',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
}
$p.CatPrice_groups = CatPrice_groups;
$p.cat.create('price_groups');
class CatStages extends CatObj{
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get grouping(){return this._getter('grouping')}
set grouping(v){this._setter('grouping',v)}
}
$p.CatStages = CatStages;
$p.cat.create('stages');
class CatProject_categories extends CatObj{
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get stages(){return this._getter_ts('stages')}
set stages(v){this._setter_ts('stages',v)}
}
$p.CatProject_categories = CatProject_categories;
class CatProject_categoriesStagesRow extends TabularSectionRow{
get stage(){return this._getter('stage')}
set stage(v){this._setter('stage',v)}
get grouping(){return this._getter('grouping')}
set grouping(v){this._setter('grouping',v)}
}
$p.CatProject_categoriesStagesRow = CatProject_categoriesStagesRow;
$p.cat.create('project_categories');
class CatCharges_discounts extends CatObj{
get price_type(){return this._getter('price_type')}
set price_type(v){this._setter('price_type',v)}
get sorting_field(){return this._getter('sorting_field')}
set sorting_field(v){this._setter('sorting_field',v)}
get application_joint(){return this._getter('application_joint')}
set application_joint(v){this._setter('application_joint',v)}
get application_mode(){return this._getter('application_mode')}
set application_mode(v){this._setter('application_mode',v)}
get predefined_name(){return this._getter('predefined_name')}
set predefined_name(v){this._setter('predefined_name',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get periods(){return this._getter_ts('periods')}
set periods(v){this._setter_ts('periods',v)}
get keys(){return this._getter_ts('keys')}
set keys(v){this._setter_ts('keys',v)}
get price_groups(){return this._getter_ts('price_groups')}
set price_groups(v){this._setter_ts('price_groups',v)}
}
$p.CatCharges_discounts = CatCharges_discounts;
class CatCharges_discountsPeriodsRow extends TabularSectionRow{
get start_date(){return this._getter('start_date')}
set start_date(v){this._setter('start_date',v)}
get expiration_date(){return this._getter('expiration_date')}
set expiration_date(v){this._setter('expiration_date',v)}
}
$p.CatCharges_discountsPeriodsRow = CatCharges_discountsPeriodsRow;
class CatCharges_discountsKeysRow extends TabularSectionRow{
get condition(){return this._getter('condition')}
set condition(v){this._setter('condition',v)}
}
$p.CatCharges_discountsKeysRow = CatCharges_discountsKeysRow;
class CatCharges_discountsPrice_groupsRow extends TabularSectionRow{
get price_group(){return this._getter('price_group')}
set price_group(v){this._setter('price_group',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.CatCharges_discountsPrice_groupsRow = CatCharges_discountsPrice_groupsRow;
$p.cat.create('charges_discounts');
class CatNom_groups extends CatObj{
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
}
$p.CatNom_groups = CatNom_groups;
$p.cat.create('nom_groups');
class CatAbonents extends CatObj{
get no_mdm(){return this._getter('no_mdm')}
set no_mdm(v){this._setter('no_mdm',v)}
get servers(){return this._getter_ts('servers')}
set servers(v){this._setter_ts('servers',v)}
}
$p.CatAbonents = CatAbonents;
class CatAbonentsServersRow extends TabularSectionRow{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get name(){return this._getter('name')}
set name(v){this._setter('name',v)}
get proxy(){return this._getter('proxy')}
set proxy(v){this._setter('proxy',v)}
}
$p.CatAbonentsServersRow = CatAbonentsServersRow;
class CatAbonentsManager extends CatManager {

  get current() {
    const {session_zone, zone} = $p.job_prm;
    return this.by_id(session_zone || zone);
  }
}
$p.cat.create('abonents', CatAbonentsManager, false);
class CatInsert_bind extends CatObj{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get production(){return this._getter_ts('production')}
set production(v){this._setter_ts('production',v)}
get inserts(){return this._getter_ts('inserts')}
set inserts(v){this._setter_ts('inserts',v)}
}
$p.CatInsert_bind = CatInsert_bind;
class CatInsert_bindProductionRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
}
$p.CatInsert_bindProductionRow = CatInsert_bindProductionRow;
class CatInsert_bindInsertsRow extends TabularSectionRow{
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
}
$p.CatInsert_bindInsertsRow = CatInsert_bindInsertsRow;
class CatInsert_bindManager extends CatManager {

  /**
   * Возвращает массив допвставок с привязками к изделию или слою
   * @param ox {CatCharacteristics}
   * @param [order] {Boolean}
   * @return {Array}
   */
  insets(ox, order = false) {
    const {sys, owner} = ox;
    const res = [];
    const {enm, cat} = $p;
    const {inserts_types: {Заказ}, elm_types: {flap}} = enm;
    for (const {production, inserts, key} of this) {
      if(!key.check_condition({ox})) {
        continue;
      }
      for (const {nom} of production) {
        if(!nom || nom.empty() || (sys && sys._hierarchy(nom)) || (owner && owner._hierarchy(nom))) {
          for (const {inset, elm_type} of inserts) {
            if(!res.some((irow) => irow.inset == inset && irow.elm_type == elm_type)) {
              if((!order && inset.insert_type !== Заказ) || (order && inset.insert_type === Заказ)) {
                res.push({inset, elm_type});
              }
            }
          }
        }
        // створки виртуальных слоёв
        else {
          for(const {dop} of ox.constructions) {
            if(dop.sys && cat.production_params.get(dop.sys)._hierarchy(nom)) {
              inserts.find_rows({elm_type: flap}, ({inset, elm_type}) => {
                if(!res.some((irow) => irow.inset == inset && irow.elm_type == elm_type)) {
                  res.push({inset, elm_type});
                }
              });
            }
          }
        }
      }
    }
    return res;
  }

  /**
   * Вклад привязок вставок в основную спецификацию
   * @param ox {CatCharacteristics}
   * @param scheme {Scheme}
   * @param spec {TabularSection}
   */
  deposit({ox, scheme, spec}) {

    const {enm: {elm_types}, EditorInvisible: {ContourVirtual}} = $p;

    for (const {inset, elm_type} of this.insets(ox)) {

      const elm = {
        _row: {},
        elm: 0,
        get perimeter() {
          return scheme ? scheme.perimeter : [];
        },
        clr: ox.clr,
        project: scheme,
      };
      const len_angl = {
        angle: 0,
        alp1: 0,
        alp2: 0,
        len: 0,
        cnstr: 0,
        origin: inset,
      };

      const deposit_flap = (layer) => {
        if(!(layer instanceof ContourVirtual)) {
          elm.layer = layer;
          len_angl.cnstr = layer.cnstr;
          inset.calculate_spec({elm, len_angl, ox, spec});
        }
        for (const contour of layer.contours) {
          deposit_flap(contour);
        }
      };

      // рассчитаем спецификацию вставки
      switch (elm_type) {
      case elm_types.flap:
        if(scheme) {
          for (const {contours} of scheme.contours) {
            contours.forEach(deposit_flap);
          }
        }
        break;

      case elm_types.rama:
        if(scheme) {
          for (const contour of scheme.contours) {
            elm.layer = contour;
            len_angl.cnstr = contour.cnstr;
            inset.calculate_spec({elm, len_angl, ox, spec});
          }
        }
        break;

      case elm_types.glass:
        // только для составных пакетов
        if(scheme) {
          for (const elm of scheme.glasses) {
            ox.glass_specification.find_rows({elm: elm.elm}, (row) => {
              if(row.inset.insert_glass_type === inset.insert_glass_type) {
                inset.calculate_spec({elm, row, layer: elm.layer, ox, spec});
              }
            });
          }
        }
        break;

      case elm_types.sandwich:
        // в данном случае, sandwich - любое заполнение, не только непрозрачное
        if(scheme) {
          for (const elm of scheme.glasses) {
            inset.calculate_spec({elm, layer: elm.layer, ox, spec});
          }
        }
        break;

      default:
        inset.calculate_spec({elm, len_angl, ox, spec});
      }
    }
  }
}
$p.cat.create('insert_bind', CatInsert_bindManager, false);
class CatTemplates extends CatObj{
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get captured(){return this._getter('captured')}
set captured(v){this._setter('captured',v)}
get editor(){return this._getter('editor')}
set editor(v){this._setter('editor',v)}
get templates(){return this._getter_ts('templates')}
set templates(v){this._setter_ts('templates',v)}
}
$p.CatTemplates = CatTemplates;
class CatTemplatesTemplatesRow extends TabularSectionRow{
get template(){return this._getter('template')}
set template(v){this._setter('template',v)}
get xmin(){return this._getter('xmin')}
set xmin(v){this._setter('xmin',v)}
get xmax(){return this._getter('xmax')}
set xmax(v){this._setter('xmax',v)}
get ymin(){return this._getter('ymin')}
set ymin(v){this._setter('ymin',v)}
get ymax(){return this._getter('ymax')}
set ymax(v){this._setter('ymax',v)}
get sys(){return this._getter('sys')}
set sys(v){this._setter('sys',v)}
get furn(){return this._getter('furn')}
set furn(v){this._setter('furn',v)}
get filling(){return this._getter('filling')}
set filling(v){this._setter('filling',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get props(){return this._getter('props')}
set props(v){this._setter('props',v)}
get grouping(){return this._getter('grouping')}
set grouping(v){this._setter('grouping',v)}
}
$p.CatTemplatesTemplatesRow = CatTemplatesTemplatesRow;
$p.cat.create('templates');
class CatWork_centers extends CatObj{
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get parent(){return this._getter('parent')}
set parent(v){this._setter('parent',v)}
get work_center_kinds(){return this._getter_ts('work_center_kinds')}
set work_center_kinds(v){this._setter_ts('work_center_kinds',v)}
}
$p.CatWork_centers = CatWork_centers;
class CatWork_centersWork_center_kindsRow extends TabularSectionRow{
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
}
$p.CatWork_centersWork_center_kindsRow = CatWork_centersWork_center_kindsRow;
$p.cat.create('work_centers');
class CatNonstandard_attributes extends CatObj{
get crooked(){return this._getter('crooked')}
set crooked(v){this._setter('crooked',v)}
get colored(){return this._getter('colored')}
set colored(v){this._setter('colored',v)}
get lay(){return this._getter('lay')}
set lay(v){this._setter('lay',v)}
get made_to_order(){return this._getter('made_to_order')}
set made_to_order(v){this._setter('made_to_order',v)}
get packing(){return this._getter('packing')}
set packing(v){this._setter('packing',v)}
}
$p.CatNonstandard_attributes = CatNonstandard_attributes;
$p.cat.create('nonstandard_attributes');
class CatDelivery_directions extends CatObj{
get composition(){return this._getter_ts('composition')}
set composition(v){this._setter_ts('composition',v)}
get coordinates(){return this._getter_ts('coordinates')}
set coordinates(v){this._setter_ts('coordinates',v)}
}
$p.CatDelivery_directions = CatDelivery_directions;
class CatDelivery_directionsCompositionRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
}
$p.CatDelivery_directionsCompositionRow = CatDelivery_directionsCompositionRow;
class CatDelivery_directionsCoordinatesRow extends TabularSectionRow{
get latitude(){return this._getter('latitude')}
set latitude(v){this._setter('latitude',v)}
get longitude(){return this._getter('longitude')}
set longitude(v){this._setter('longitude',v)}
}
$p.CatDelivery_directionsCoordinatesRow = CatDelivery_directionsCoordinatesRow;
$p.cat.create('delivery_directions');
class CatHttp_apis extends CatObj{
get nom(){return this._getter_ts('nom')}
set nom(v){this._setter_ts('nom',v)}
get params(){return this._getter_ts('params')}
set params(v){this._setter_ts('params',v)}

  prm(identifier) {
    const {_data} = this;
    const key = `prm_${identifier}`;
    if(!_data[key]) {
      const prow = this.params.find({identifier});
      if(prow) {
        let {type, values, name} = prow;
        if(values) {
          try {
            values = JSON.parse(values);
          }
          catch (e) {}
        }
        _data[key] = {type, values, name};
        if(type === 'enum' && values && values.length) {
          _data[key].subtype = typeof values[0];
        }
      }
      else {
        _data[key] = {};
      }
    }
    return _data[key];
  }}
$p.CatHttp_apis = CatHttp_apis;
class CatHttp_apisNomRow extends TabularSectionRow{
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get name(){return this._getter('name')}
set name(v){this._setter('name',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get params(){return this._getter('params')}
set params(v){this._setter('params',v)}
}
$p.CatHttp_apisNomRow = CatHttp_apisNomRow;
class CatHttp_apisParamsRow extends TabularSectionRow{
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get name(){return this._getter('name')}
set name(v){this._setter('name',v)}
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get values(){return this._getter('values')}
set values(v){this._setter('values',v)}
}
$p.CatHttp_apisParamsRow = CatHttp_apisParamsRow;
$p.cat.create('http_apis');
class CatLead_src extends CatObj{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
}
$p.CatLead_src = CatLead_src;
$p.cat.create('lead_src');
class CatLeads extends CatObj{
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
}
$p.CatLeads = CatLeads;
$p.cat.create('leads');
class DocPurchase extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get warehouse(){return this._getter('warehouse')}
set warehouse(v){this._setter('warehouse',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get goods(){return this._getter_ts('goods')}
set goods(v){this._setter_ts('goods',v)}
get services(){return this._getter_ts('services')}
set services(v){this._setter_ts('services',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocPurchase = DocPurchase;
class DocPurchaseGoodsRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get unit(){return this._getter('unit')}
set unit(v){this._setter('unit',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
}
$p.DocPurchaseGoodsRow = DocPurchaseGoodsRow;
class DocPurchaseServicesRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get content(){return this._getter('content')}
set content(v){this._setter('content',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get nom_group(){return this._getter('nom_group')}
set nom_group(v){this._setter('nom_group',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get cost_item(){return this._getter('cost_item')}
set cost_item(v){this._setter('cost_item',v)}
get project(){return this._getter('project')}
set project(v){this._setter('project',v)}
get buyers_order(){return this._getter('buyers_order')}
set buyers_order(v){this._setter('buyers_order',v)}
}
$p.DocPurchaseServicesRow = DocPurchaseServicesRow;
$p.doc.create('purchase');
class DocInventory_cuts extends DocObj{
get transactions_kind(){return this._getter('transactions_kind')}
set transactions_kind(v){this._setter('transactions_kind',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get work_center(){return this._getter('work_center')}
set work_center(v){this._setter('work_center',v)}
get materials(){return this._getter_ts('materials')}
set materials(v){this._setter_ts('materials',v)}
}
$p.DocInventory_cuts = DocInventory_cuts;
class DocInventory_cutsMaterialsRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
get cell(){return this._getter('cell')}
set cell(v){this._setter('cell',v)}
get recorded_quantity(){return this._getter('recorded_quantity')}
set recorded_quantity(v){this._setter('recorded_quantity',v)}
}
$p.DocInventory_cutsMaterialsRow = DocInventory_cutsMaterialsRow;
$p.doc.create('inventory_cuts');
class DocInventory_goods extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get warehouse(){return this._getter('warehouse')}
set warehouse(v){this._setter('warehouse',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get goods(){return this._getter_ts('goods')}
set goods(v){this._setter_ts('goods',v)}
}
$p.DocInventory_goods = DocInventory_goods;
class DocInventory_goodsGoodsRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get recorded_quantity(){return this._getter('recorded_quantity')}
set recorded_quantity(v){this._setter('recorded_quantity',v)}
get unit(){return this._getter('unit')}
set unit(v){this._setter('unit',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
}
$p.DocInventory_goodsGoodsRow = DocInventory_goodsGoodsRow;
$p.doc.create('inventory_goods');
class DocWork_centers_task extends DocObj{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get recipient(){return this._getter('recipient')}
set recipient(v){this._setter('recipient',v)}
get biz_cuts(){return this._getter('biz_cuts')}
set biz_cuts(v){this._setter('biz_cuts',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get planning(){return this._getter_ts('planning')}
set planning(v){this._setter_ts('planning',v)}
get demand(){return this._getter_ts('demand')}
set demand(v){this._setter_ts('demand',v)}
get cuts(){return this._getter_ts('cuts')}
set cuts(v){this._setter_ts('cuts',v)}
get cutting(){return this._getter_ts('cutting')}
set cutting(v){this._setter_ts('cutting',v)}
}
$p.DocWork_centers_task = DocWork_centers_task;
class DocWork_centers_taskPlanningRow extends TabularSectionRow{
get obj(){return this._getter('obj')}
set obj(v){this._setter('obj',v)}
get specimen(){return this._getter('specimen')}
set specimen(v){this._setter('specimen',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get power(){return this._getter('power')}
set power(v){this._setter('power',v)}
}
$p.DocWork_centers_taskPlanningRow = DocWork_centers_taskPlanningRow;
class DocWork_centers_taskDemandRow extends TabularSectionRow{
get production(){return this._getter('production')}
set production(v){this._setter('production',v)}
get specimen(){return this._getter('specimen')}
set specimen(v){this._setter('specimen',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get final_balance(){return this._getter('final_balance')}
set final_balance(v){this._setter('final_balance',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get from_cut(){return this._getter('from_cut')}
set from_cut(v){this._setter('from_cut',v)}
get close(){return this._getter('close')}
set close(v){this._setter('close',v)}
}
$p.DocWork_centers_taskDemandRow = DocWork_centers_taskDemandRow;
class DocWork_centers_taskCutsRow extends TabularSectionRow{
get record_kind(){return this._getter('record_kind')}
set record_kind(v){this._setter('record_kind',v)}
get stick(){return this._getter('stick')}
set stick(v){this._setter('stick',v)}
get pair(){return this._getter('pair')}
set pair(v){this._setter('pair',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get x(){return this._getter('x')}
set x(v){this._setter('x',v)}
get y(){return this._getter('y')}
set y(v){this._setter('y',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get cell(){return this._getter('cell')}
set cell(v){this._setter('cell',v)}
}
$p.DocWork_centers_taskCutsRow = DocWork_centers_taskCutsRow;
class DocWork_centers_taskCuttingRow extends TabularSectionRow{
get production(){return this._getter('production')}
set production(v){this._setter('production',v)}
get specimen(){return this._getter('specimen')}
set specimen(v){this._setter('specimen',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get stick(){return this._getter('stick')}
set stick(v){this._setter('stick',v)}
get pair(){return this._getter('pair')}
set pair(v){this._setter('pair',v)}
get orientation(){return this._getter('orientation')}
set orientation(v){this._setter('orientation',v)}
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get alp1(){return this._getter('alp1')}
set alp1(v){this._setter('alp1',v)}
get alp2(){return this._getter('alp2')}
set alp2(v){this._setter('alp2',v)}
get cell(){return this._getter('cell')}
set cell(v){this._setter('cell',v)}
get part(){return this._getter('part')}
set part(v){this._setter('part',v)}
get x(){return this._getter('x')}
set x(v){this._setter('x',v)}
get y(){return this._getter('y')}
set y(v){this._setter('y',v)}
get rotated(){return this._getter('rotated')}
set rotated(v){this._setter('rotated',v)}
get nonstandard(){return this._getter('nonstandard')}
set nonstandard(v){this._setter('nonstandard',v)}
}
$p.DocWork_centers_taskCuttingRow = DocWork_centers_taskCuttingRow;
$p.doc.create('work_centers_task');
class DocCalc_order extends DocObj{
get number_internal(){return this._getter('number_internal')}
set number_internal(v){this._setter('number_internal',v)}
get project(){return this._getter('project')}
set project(v){this._setter('project',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get client_of_dealer(){return this._getter('client_of_dealer')}
set client_of_dealer(v){this._setter('client_of_dealer',v)}
get contract(){return this._getter('contract')}
set contract(v){this._setter('contract',v)}
get bank_account(){return this._getter('bank_account')}
set bank_account(v){this._setter('bank_account',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get manager(){return this._getter('manager')}
set manager(v){this._setter('manager',v)}
get leading_manager(){return this._getter('leading_manager')}
set leading_manager(v){this._setter('leading_manager',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get warehouse(){return this._getter('warehouse')}
set warehouse(v){this._setter('warehouse',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get amount_operation(){return this._getter('amount_operation')}
set amount_operation(v){this._setter('amount_operation',v)}
get amount_internal(){return this._getter('amount_internal')}
set amount_internal(v){this._setter('amount_internal',v)}
get accessory_characteristic(){return this._getter('accessory_characteristic')}
set accessory_characteristic(v){this._setter('accessory_characteristic',v)}
get sys_profile(){return this._getter('sys_profile')}
set sys_profile(v){this._setter('sys_profile',v)}
get sys_furn(){return this._getter('sys_furn')}
set sys_furn(v){this._setter('sys_furn',v)}
get phone(){return this._getter('phone')}
set phone(v){this._setter('phone',v)}
get delivery_area(){return this._getter('delivery_area')}
set delivery_area(v){this._setter('delivery_area',v)}
get shipping_address(){return this._getter('shipping_address')}
set shipping_address(v){this._setter('shipping_address',v)}
get coordinates(){return this._getter('coordinates')}
set coordinates(v){this._setter('coordinates',v)}
get address_fields(){return this._getter('address_fields')}
set address_fields(v){this._setter('address_fields',v)}
get difficult(){return this._getter('difficult')}
set difficult(v){this._setter('difficult',v)}
get vat_consider(){return this._getter('vat_consider')}
set vat_consider(v){this._setter('vat_consider',v)}
get vat_included(){return this._getter('vat_included')}
set vat_included(v){this._setter('vat_included',v)}
get settlements_course(){return this._getter('settlements_course')}
set settlements_course(v){this._setter('settlements_course',v)}
get settlements_multiplicity(){return this._getter('settlements_multiplicity')}
set settlements_multiplicity(v){this._setter('settlements_multiplicity',v)}
get extra_charge_external(){return this._getter('extra_charge_external')}
set extra_charge_external(v){this._setter('extra_charge_external',v)}
get obj_delivery_state(){return this._getter('obj_delivery_state')}
set obj_delivery_state(v){this._setter('obj_delivery_state',v)}
get category(){return this._getter('category')}
set category(v){this._setter('category',v)}
get sending_stage(){return this._getter('sending_stage')}
set sending_stage(v){this._setter('sending_stage',v)}
get approval(){return this._getter('approval')}
set approval(v){this._setter('approval',v)}
get lead(){return this._getter('lead')}
set lead(v){this._setter('lead',v)}
get production(){return this._getter_ts('production')}
set production(v){this._setter_ts('production',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
get contact_information(){return this._getter_ts('contact_information')}
set contact_information(v){this._setter_ts('contact_information',v)}
get planning(){return this._getter_ts('planning')}
set planning(v){this._setter_ts('planning',v)}
get orders(){return this._getter_ts('orders')}
set orders(v){this._setter_ts('orders',v)}
}
$p.DocCalc_order = DocCalc_order;
class DocCalc_orderProductionRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get unit(){return this._getter('unit')}
set unit(v){this._setter('unit',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get first_cost(){return this._getter('first_cost')}
set first_cost(v){this._setter('first_cost',v)}
get marginality(){return this._getter('marginality')}
set marginality(v){this._setter('marginality',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
get discount(){return this._getter('discount')}
set discount(v){this._setter('discount',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get margin(){return this._getter('margin')}
set margin(v){this._setter('margin',v)}
get discount_percent_internal(){return this._getter('discount_percent_internal')}
set discount_percent_internal(v){this._setter('discount_percent_internal',v)}
get extra_charge_external(){return this._getter('extra_charge_external')}
set extra_charge_external(v){this._setter('extra_charge_external',v)}
get price_internal(){return this._getter('price_internal')}
set price_internal(v){this._setter('price_internal',v)}
get amount_internal(){return this._getter('amount_internal')}
set amount_internal(v){this._setter('amount_internal',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get ordn(){return this._getter('ordn')}
set ordn(v){this._setter('ordn',v)}
get changed(){return this._getter('changed')}
set changed(v){this._setter('changed',v)}
}
$p.DocCalc_orderProductionRow = DocCalc_orderProductionRow;
class DocCalc_orderContact_informationRow extends TabularSectionRow{
get type(){return this._getter('type')}
set type(v){this._setter('type',v)}
get kind(){return this._getter('kind')}
set kind(v){this._setter('kind',v)}
get presentation(){return this._getter('presentation')}
set presentation(v){this._setter('presentation',v)}
get values_fields(){return this._getter('values_fields')}
set values_fields(v){this._setter('values_fields',v)}
get country(){return this._getter('country')}
set country(v){this._setter('country',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get city(){return this._getter('city')}
set city(v){this._setter('city',v)}
get email_address(){return this._getter('email_address')}
set email_address(v){this._setter('email_address',v)}
get phone_number(){return this._getter('phone_number')}
set phone_number(v){this._setter('phone_number',v)}
get phone_without_codes(){return this._getter('phone_without_codes')}
set phone_without_codes(v){this._setter('phone_without_codes',v)}
}
$p.DocCalc_orderContact_informationRow = DocCalc_orderContact_informationRow;
class DocCalc_orderPlanningRow extends TabularSectionRow{
get phase(){return this._getter('phase')}
set phase(v){this._setter('phase',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get obj(){return this._getter('obj')}
set obj(v){this._setter('obj',v)}
get specimen(){return this._getter('specimen')}
set specimen(v){this._setter('specimen',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get power(){return this._getter('power')}
set power(v){this._setter('power',v)}
}
$p.DocCalc_orderPlanningRow = DocCalc_orderPlanningRow;
class DocCalc_orderOrdersRow extends TabularSectionRow{
get is_supplier(){return this._getter('is_supplier')}
set is_supplier(v){this._setter('is_supplier',v)}
get invoice(){return this._getter('invoice')}
set invoice(v){this._setter('invoice',v)}
}
$p.DocCalc_orderOrdersRow = DocCalc_orderOrdersRow;
class DocCalc_orderManager extends DocManager {

  constructor(owner, class_name) {
    super(owner, class_name);
    const {input_by_string} = this.metadata();
    if(!input_by_string.includes('client_of_dealer')) {
      input_by_string.push('client_of_dealer');
    }
    if(!input_by_string.includes('shipping_address')) {
      input_by_string.push('shipping_address');
    }
  }

  direct_load(force) {
    if(this._direct_loaded && !force) {
      return Promise.resolve();
    }

    const {adapters: {pouch}, utils: {moment}, ui} = this._owner.$p;
    const selector = force && force.selector ?
      force.selector :
      {
        startkey: [this.class_name, ...moment().add(1, 'month').format('YYYY-MM-DD').split('-').map(Number)],
        endkey: [this.class_name, ...moment().subtract(4, 'month').format('YYYY-MM-DD').split('-').map(Number)],
        descending: true,
        include_docs: true,
        limit: 3000,
      };

    return pouch.db(this).query('doc/by_date', selector)
      .then(({rows}) => rows.map(({doc}) => {
        doc.ref = doc._id.split('|')[1];
        delete doc._id;
        return doc;
      }))
      .then((docs) => this.load_array(docs))
      .then(() => this._direct_loaded = true)
      .catch((err) => {
        ui ? ui.dialogs.snack({message: `Чтение списка заказов: ${err.message}`}) : console.err(err);
      });
  }

  /**
   * Копирует заказ, возвращает промис с новым заказом
   * @param src {Object}
   * @param src.clone {Boolean} - если указано, создаётся копия объекта, иначе - новый объект с аналогичными свойствами
   * @return {Promise<DocCalc_order>}
   */
  async clone(src) {
    const {utils, cat} = this._owner.$p;
    if(utils.is_guid(src)) {
      src = await this.get(src, 'promise');
    }
    if(src.load_linked_refs) {
      await src.load_linked_refs();
    }
    // создаём заказ
    const {clone, refill_props} = src;
    const {organization, partner, contract, _rev, ...others} = (src._obj || src);
    const tmp = {date: new Date(), organization, partner, contract};
    if(clone) {
      utils._mixin(tmp, (src._obj || src));
      delete tmp.clone;
      delete tmp.refill_props;
    }
    const dst = await this.create(tmp, !clone);
    dst._modified = true;
    if(!clone) {
      utils._mixin(dst._obj, others, null,
        'ref,date,number_doc,posted,_deleted,number_internal,production,planning,manager,obj_delivery_state'.split(','));
      dst.extra_fields.load((src._obj || src).extra_fields);
    }

    // заполняем продукцию и сохраненные эскизы
    const map = new Map();

    // создаём характеристики и заполняем данными исходного заказа
    const src_ref = src.ref;
    src.production.forEach((row) => {
      const prow = Object.assign({}, row._obj || row);
      if(row.characteristic.calc_order == src_ref) {
        const tmp = {calc_order: dst.ref};
        const _obj = row.characteristic._obj || row.characteristic;
        if(clone) {
          utils._mixin(tmp, _obj, null, ['calc_order', 'class_name']);
        }
        else {
          utils._mixin(tmp, _obj, null, 'ref,name,calc_order,timestamp,_rev,specification,class_name'.split(','), true);
        }
        const cx = cat.characteristics.create(tmp, false, true);
        prow.characteristic = cx.ref;

        if(cx.coordinates.count() && refill_props) {
          cx._data.refill_props = true;
        }
        map.set(row.characteristic.ref, cx);
      }
      dst.production.add(prow);
    });

    // обновляем leading_product
    dst.production.forEach((row) => {
      if(row.ordn) {
        const cx = map.get(row.ordn.ref);
        if(cx) {
          row.ordn = row.characteristic.leading_product = cx;
        }
      }
    });

    // пересчитываем
    if(!clone) {
      await dst.recalc();
    }

    return dst.save();
  }

  // сворачивает в строку вместе с характеристиками и излучает событие
  export(ref) {
    if(!ref) {
      return this.emit_async('export_err', new Error('Пустой объект. Вероятно, не выбрана строка заказа'));
    }
    this.emit_async('export_start', ref);
    return this.get(ref, 'promise')
      .then((doc) => doc.load_linked_refs())
      .then((doc) => {
        const res = doc.toJSON();
        for(const row of doc.production) {
          if(row.characteristic.calc_order == doc) {
            res.production[row.row - 1].characteristic = row.characteristic.toJSON();
          }
        }
        res.class_name = this.class_name;
        this.emit_async('export_ok', res);
        return res;
      })
      .catch((err) => this.emit_async('export_err', err));
  }

  // излучает событие - нужен для совместимости с dhtmlx
  import() {
    this.emit_async('import_start');
  }

}
$p.doc.create('calc_order', DocCalc_orderManager, false);
class DocCredit_card_order extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get payment_details(){return this._getter_ts('payment_details')}
set payment_details(v){this._setter_ts('payment_details',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocCredit_card_order = DocCredit_card_order;
$p.doc.create('credit_card_order');
class DocWork_centers_performance extends DocObj{
get start_date(){return this._getter('start_date')}
set start_date(v){this._setter('start_date',v)}
get expiration_date(){return this._getter('expiration_date')}
set expiration_date(v){this._setter('expiration_date',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get planning(){return this._getter_ts('planning')}
set planning(v){this._setter_ts('planning',v)}
}
$p.DocWork_centers_performance = DocWork_centers_performance;
class DocWork_centers_performancePlanningRow extends TabularSectionRow{
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get power(){return this._getter('power')}
set power(v){this._setter('power',v)}
}
$p.DocWork_centers_performancePlanningRow = DocWork_centers_performancePlanningRow;
$p.doc.create('work_centers_performance');
class DocDebit_bank_order extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get bank_account(){return this._getter('bank_account')}
set bank_account(v){this._setter('bank_account',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get payment_details(){return this._getter_ts('payment_details')}
set payment_details(v){this._setter_ts('payment_details',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocDebit_bank_order = DocDebit_bank_order;
$p.doc.create('debit_bank_order');
class DocCredit_bank_order extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get bank_account(){return this._getter('bank_account')}
set bank_account(v){this._setter('bank_account',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get payment_details(){return this._getter_ts('payment_details')}
set payment_details(v){this._setter_ts('payment_details',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocCredit_bank_order = DocCredit_bank_order;
$p.doc.create('credit_bank_order');
class DocDebit_cash_order extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get cashbox(){return this._getter('cashbox')}
set cashbox(v){this._setter('cashbox',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get payment_details(){return this._getter_ts('payment_details')}
set payment_details(v){this._setter_ts('payment_details',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocDebit_cash_order = DocDebit_cash_order;
$p.doc.create('debit_cash_order');
class DocCredit_cash_order extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get cashbox(){return this._getter('cashbox')}
set cashbox(v){this._setter('cashbox',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get payment_details(){return this._getter_ts('payment_details')}
set payment_details(v){this._setter_ts('payment_details',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocCredit_cash_order = DocCredit_cash_order;
$p.doc.create('credit_cash_order');
class DocSelling extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get warehouse(){return this._getter('warehouse')}
set warehouse(v){this._setter('warehouse',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get goods(){return this._getter_ts('goods')}
set goods(v){this._setter_ts('goods',v)}
get services(){return this._getter_ts('services')}
set services(v){this._setter_ts('services',v)}
get extra_fields(){return this._getter_ts('extra_fields')}
set extra_fields(v){this._setter_ts('extra_fields',v)}
}
$p.DocSelling = DocSelling;
class DocSellingGoodsRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get unit(){return this._getter('unit')}
set unit(v){this._setter('unit',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
}
$p.DocSellingGoodsRow = DocSellingGoodsRow;
class DocSellingServicesRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get content(){return this._getter('content')}
set content(v){this._setter('content',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
}
$p.DocSellingServicesRow = DocSellingServicesRow;
$p.doc.create('selling');
class DocNom_prices_setup extends DocObj{
get price_type(){return this._getter('price_type')}
set price_type(v){this._setter('price_type',v)}
get currency(){return this._getter('currency')}
set currency(v){this._setter('currency',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get goods(){return this._getter_ts('goods')}
set goods(v){this._setter_ts('goods',v)}
}
$p.DocNom_prices_setup = DocNom_prices_setup;
class DocNom_prices_setupGoodsRow extends TabularSectionRow{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get price_type(){return this._getter('price_type')}
set price_type(v){this._setter('price_type',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
}
$p.DocNom_prices_setupGoodsRow = DocNom_prices_setupGoodsRow;
$p.doc.create('nom_prices_setup');
class DocPlanning_event extends DocObj{
get phase(){return this._getter('phase')}
set phase(v){this._setter('phase',v)}
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get recipient(){return this._getter('recipient')}
set recipient(v){this._setter('recipient',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get project(){return this._getter('project')}
set project(v){this._setter('project',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get executors(){return this._getter_ts('executors')}
set executors(v){this._setter_ts('executors',v)}
get planning(){return this._getter_ts('planning')}
set planning(v){this._setter_ts('planning',v)}
}
$p.DocPlanning_event = DocPlanning_event;
class DocPlanning_eventExecutorsRow extends TabularSectionRow{
get executor(){return this._getter('executor')}
set executor(v){this._setter('executor',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
}
$p.DocPlanning_eventExecutorsRow = DocPlanning_eventExecutorsRow;
class DocPlanning_eventPlanningRow extends TabularSectionRow{
get obj(){return this._getter('obj')}
set obj(v){this._setter('obj',v)}
get specimen(){return this._getter('specimen')}
set specimen(v){this._setter('specimen',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get power(){return this._getter('power')}
set power(v){this._setter('power',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get begin_time(){return this._getter('begin_time')}
set begin_time(v){this._setter('begin_time',v)}
get end_time(){return this._getter('end_time')}
set end_time(v){this._setter('end_time',v)}
}
$p.DocPlanning_eventPlanningRow = DocPlanning_eventPlanningRow;
$p.doc.create('planning_event');
class DocPurchase_order extends DocObj{
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get warehouse(){return this._getter('warehouse')}
set warehouse(v){this._setter('warehouse',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get contract(){return this._getter('contract')}
set contract(v){this._setter('contract',v)}
get responsible(){return this._getter('responsible')}
set responsible(v){this._setter('responsible',v)}
get shipping_date(){return this._getter('shipping_date')}
set shipping_date(v){this._setter('shipping_date',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get settlements_course(){return this._getter('settlements_course')}
set settlements_course(v){this._setter('settlements_course',v)}
get settlements_multiplicity(){return this._getter('settlements_multiplicity')}
set settlements_multiplicity(v){this._setter('settlements_multiplicity',v)}
get bank_account(){return this._getter('bank_account')}
set bank_account(v){this._setter('bank_account',v)}
get vat_included(){return this._getter('vat_included')}
set vat_included(v){this._setter('vat_included',v)}
get doc_amount(){return this._getter('doc_amount')}
set doc_amount(v){this._setter('doc_amount',v)}
get vat_consider(){return this._getter('vat_consider')}
set vat_consider(v){this._setter('vat_consider',v)}
get obj_delivery_state(){return this._getter('obj_delivery_state')}
set obj_delivery_state(v){this._setter('obj_delivery_state',v)}
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get goods(){return this._getter_ts('goods')}
set goods(v){this._setter_ts('goods',v)}
}
$p.DocPurchase_order = DocPurchase_order;
class DocPurchase_orderGoodsRow extends TabularSectionRow{
get identifier(){return this._getter('identifier')}
set identifier(v){this._setter('identifier',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get unit(){return this._getter('unit')}
set unit(v){this._setter('unit',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get vat_rate(){return this._getter('vat_rate')}
set vat_rate(v){this._setter('vat_rate',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get params(){return this._getter('params')}
set params(v){this._setter('params',v)}
get calc_order(){return this._getter('calc_order')}
set calc_order(v){this._setter('calc_order',v)}
}
$p.DocPurchase_orderGoodsRow = DocPurchase_orderGoodsRow;
$p.doc.create('purchase_order');
class IregLog_view extends RegisterRow{
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get user(){return this._getter('user')}
set user(v){this._setter('user',v)}
}
$p.IregLog_view = IregLog_view;
$p.ireg.create('log_view');
class IregCurrency_courses extends RegisterRow{
get currency(){return this._getter('currency')}
set currency(v){this._setter('currency',v)}
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get course(){return this._getter('course')}
set course(v){this._setter('course',v)}
get multiplicity(){return this._getter('multiplicity')}
set multiplicity(v){this._setter('multiplicity',v)}
}
$p.IregCurrency_courses = IregCurrency_courses;
$p.ireg.create('currency_courses');
class IregMargin_coefficients extends RegisterRow{
get price_group(){return this._getter('price_group')}
set price_group(v){this._setter('price_group',v)}
get key(){return this._getter('key')}
set key(v){this._setter('key',v)}
get condition_formula(){return this._getter('condition_formula')}
set condition_formula(v){this._setter('condition_formula',v)}
get marginality(){return this._getter('marginality')}
set marginality(v){this._setter('marginality',v)}
get marginality_min(){return this._getter('marginality_min')}
set marginality_min(v){this._setter('marginality_min',v)}
get marginality_internal(){return this._getter('marginality_internal')}
set marginality_internal(v){this._setter('marginality_internal',v)}
get price_type_first_cost(){return this._getter('price_type_first_cost')}
set price_type_first_cost(v){this._setter('price_type_first_cost',v)}
get price_type_sale(){return this._getter('price_type_sale')}
set price_type_sale(v){this._setter('price_type_sale',v)}
get price_type_internal(){return this._getter('price_type_internal')}
set price_type_internal(v){this._setter('price_type_internal',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get sale_formula(){return this._getter('sale_formula')}
set sale_formula(v){this._setter('sale_formula',v)}
get internal_formula(){return this._getter('internal_formula')}
set internal_formula(v){this._setter('internal_formula',v)}
get external_formula(){return this._getter('external_formula')}
set external_formula(v){this._setter('external_formula',v)}
get extra_charge_external(){return this._getter('extra_charge_external')}
set extra_charge_external(v){this._setter('extra_charge_external',v)}
get discount_external(){return this._getter('discount_external')}
set discount_external(v){this._setter('discount_external',v)}
get discount(){return this._getter('discount')}
set discount(v){this._setter('discount',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
}
$p.IregMargin_coefficients = IregMargin_coefficients;
$p.ireg.create('margin_coefficients');
class DpBuilder_size extends DataProcessorObj{
get offset(){return this._getter('offset')}
set offset(v){this._setter('offset',v)}
get angle(){return this._getter('angle')}
set angle(v){this._setter('angle',v)}
get fix_angle(){return this._getter('fix_angle')}
set fix_angle(v){this._setter('fix_angle',v)}
get align(){return this._getter('align')}
set align(v){this._setter('align',v)}
get hide_c1(){return this._getter('hide_c1')}
set hide_c1(v){this._setter('hide_c1',v)}
get hide_c2(){return this._getter('hide_c2')}
set hide_c2(v){this._setter('hide_c2',v)}
get hide_line(){return this._getter('hide_line')}
set hide_line(v){this._setter('hide_line',v)}
get text(){return this._getter('text')}
set text(v){this._setter('text',v)}
get font_family(){return this._getter('font_family')}
set font_family(v){this._setter('font_family',v)}
get bold(){return this._getter('bold')}
set bold(v){this._setter('bold',v)}
get font_size(){return this._getter('font_size')}
set font_size(v){this._setter('font_size',v)}
}
$p.DpBuilder_size = DpBuilder_size;
$p.dp.create('builder_size');
class DpBuilder_coordinates extends DataProcessorObj{
get bind(){return this._getter('bind')}
set bind(v){this._setter('bind',v)}
get path(){return this._getter('path')}
set path(v){this._setter('path',v)}
get offset(){return this._getter('offset')}
set offset(v){this._setter('offset',v)}
get step(){return this._getter('step')}
set step(v){this._setter('step',v)}
get step_angle(){return this._getter('step_angle')}
set step_angle(v){this._setter('step_angle',v)}
get coordinates(){return this._getter_ts('coordinates')}
set coordinates(v){this._setter_ts('coordinates',v)}
}
$p.DpBuilder_coordinates = DpBuilder_coordinates;
class DpBuilder_coordinatesCoordinatesRow extends TabularSectionRow{
get x(){return this._getter('x')}
set x(v){this._setter('x',v)}
get y(){return this._getter('y')}
set y(v){this._setter('y',v)}
}
$p.DpBuilder_coordinatesCoordinatesRow = DpBuilder_coordinatesCoordinatesRow;
$p.dp.create('builder_coordinates');
class DpBuilder_pen extends DataProcessorObj{
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get bind_generatrix(){return this._getter('bind_generatrix')}
set bind_generatrix(v){this._setter('bind_generatrix',v)}
get bind_node(){return this._getter('bind_node')}
set bind_node(v){this._setter('bind_node',v)}
get bind_sys(){return this._getter('bind_sys')}
set bind_sys(v){this._setter('bind_sys',v)}
get grid(){return this._getter('grid')}
set grid(v){this._setter('grid',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
}
$p.DpBuilder_pen = DpBuilder_pen;
$p.dp.create('builder_pen');
class DpBuilder_price extends DataProcessorObj{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get goods(){return this._getter_ts('goods')}
set goods(v){this._setter_ts('goods',v)}
get rounding_quantity(){return this._getter_ts('rounding_quantity')}
set rounding_quantity(v){this._setter_ts('rounding_quantity',v)}
}
$p.DpBuilder_price = DpBuilder_price;
class DpBuilder_priceGoodsRow extends TabularSectionRow{
get price_type(){return this._getter('price_type')}
set price_type(v){this._setter('price_type',v)}
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get currency(){return this._getter('currency')}
set currency(v){this._setter('currency',v)}
}
$p.DpBuilder_priceGoodsRow = DpBuilder_priceGoodsRow;
class DpBuilder_priceRounding_quantityRow extends TabularSectionRow{
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get value(){return this._getter('value')}
set value(v){this._setter('value',v)}
}
$p.DpBuilder_priceRounding_quantityRow = DpBuilder_priceRounding_quantityRow;
$p.dp.create('builder_price');
class DpBuyers_order extends DataProcessorObj{
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get sys(){return this._getter('sys')}
set sys(v){this._setter('sys',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get height(){return this._getter('height')}
set height(v){this._setter('height',v)}
get depth(){return this._getter('depth')}
set depth(v){this._setter('depth',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get first_cost(){return this._getter('first_cost')}
set first_cost(v){this._setter('first_cost',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
get discount_percent_internal(){return this._getter('discount_percent_internal')}
set discount_percent_internal(v){this._setter('discount_percent_internal',v)}
get discount(){return this._getter('discount')}
set discount(v){this._setter('discount',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get shipping_date(){return this._getter('shipping_date')}
set shipping_date(v){this._setter('shipping_date',v)}
get client_number(){return this._getter('client_number')}
set client_number(v){this._setter('client_number',v)}
get inn(){return this._getter('inn')}
set inn(v){this._setter('inn',v)}
get shipping_address(){return this._getter('shipping_address')}
set shipping_address(v){this._setter('shipping_address',v)}
get phone(){return this._getter('phone')}
set phone(v){this._setter('phone',v)}
get price_internal(){return this._getter('price_internal')}
set price_internal(v){this._setter('price_internal',v)}
get amount_internal(){return this._getter('amount_internal')}
set amount_internal(v){this._setter('amount_internal',v)}
get base_block(){return this._getter('base_block')}
set base_block(v){this._setter('base_block',v)}
get weight(){return this._getter('weight')}
set weight(v){this._setter('weight',v)}
get furn(){return this._getter('furn')}
set furn(v){this._setter('furn',v)}
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get product_params(){return this._getter_ts('product_params')}
set product_params(v){this._setter_ts('product_params',v)}
get production(){return this._getter_ts('production')}
set production(v){this._setter_ts('production',v)}
get glass_specification(){return this._getter_ts('glass_specification')}
set glass_specification(v){this._setter_ts('glass_specification',v)}
get specification(){return this._getter_ts('specification')}
set specification(v){this._setter_ts('specification',v)}
get charges_discounts(){return this._getter_ts('charges_discounts')}
set charges_discounts(v){this._setter_ts('charges_discounts',v)}
get sys_furn(){return this._getter_ts('sys_furn')}
set sys_furn(v){this._setter_ts('sys_furn',v)}
get sys_profile(){return this._getter_ts('sys_profile')}
set sys_profile(v){this._setter_ts('sys_profile',v)}

  get clr_in() {
    return this.clr.clr_in;
  }
  set clr_in(v) {
    const {clr} = this;
    this.clr = $p.cat.clrs.composite_ref('clr_in', clr.clr_out.empty() ? clr : clr.clr_out, v);
  }

  get clr_out() {
    return this.clr.clr_out;
  }
  set clr_out(v) {
    const {clr} = this;
    this.clr = $p.cat.clrs.composite_ref('clr_out', clr.clr_in.empty() ? clr : clr.clr_in, v);
  }}
$p.DpBuyers_order = DpBuyers_order;
class DpBuyers_orderProductionRow extends TabularSectionRow{
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get height(){return this._getter('height')}
set height(v){this._setter('height',v)}
get depth(){return this._getter('depth')}
set depth(v){this._setter('depth',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get note(){return this._getter('note')}
set note(v){this._setter('note',v)}
get first_cost(){return this._getter('first_cost')}
set first_cost(v){this._setter('first_cost',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get ordn(){return this._getter('ordn')}
set ordn(v){this._setter('ordn',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
get use(){return this._getter('use')}
set use(v){this._setter('use',v)}
}
$p.DpBuyers_orderProductionRow = DpBuyers_orderProductionRow;
class DpBuyers_orderGlass_specificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get sorting(){return this._getter('sorting')}
set sorting(v){this._setter('sorting',v)}
get inset(){return this._getter('inset')}
set inset(v){this._setter('inset',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
}
$p.DpBuyers_orderGlass_specificationRow = DpBuyers_orderGlass_specificationRow;
class DpBuyers_orderSpecificationRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get dop(){return this._getter('dop')}
set dop(v){this._setter('dop',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get algorithm(){return this._getter('algorithm')}
set algorithm(v){this._setter('algorithm',v)}
get nom_characteristic(){return this._getter('nom_characteristic')}
set nom_characteristic(v){this._setter('nom_characteristic',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get handle_height_base(){return this._getter('handle_height_base')}
set handle_height_base(v){this._setter('handle_height_base',v)}
get handle_height_min(){return this._getter('handle_height_min')}
set handle_height_min(v){this._setter('handle_height_min',v)}
get handle_height_max(){return this._getter('handle_height_max')}
set handle_height_max(v){this._setter('handle_height_max',v)}
get contraction(){return this._getter('contraction')}
set contraction(v){this._setter('contraction',v)}
get contraction_option(){return this._getter('contraction_option')}
set contraction_option(v){this._setter('contraction_option',v)}
get coefficient(){return this._getter('coefficient')}
set coefficient(v){this._setter('coefficient',v)}
get flap_weight_min(){return this._getter('flap_weight_min')}
set flap_weight_min(v){this._setter('flap_weight_min',v)}
get flap_weight_max(){return this._getter('flap_weight_max')}
set flap_weight_max(v){this._setter('flap_weight_max',v)}
get side(){return this._getter('side')}
set side(v){this._setter('side',v)}
get cnn_side(){return this._getter('cnn_side')}
set cnn_side(v){this._setter('cnn_side',v)}
get offset_option(){return this._getter('offset_option')}
set offset_option(v){this._setter('offset_option',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get transfer_option(){return this._getter('transfer_option')}
set transfer_option(v){this._setter('transfer_option',v)}
get overmeasure(){return this._getter('overmeasure')}
set overmeasure(v){this._setter('overmeasure',v)}
get is_set_row(){return this._getter('is_set_row')}
set is_set_row(v){this._setter('is_set_row',v)}
get is_procedure_row(){return this._getter('is_procedure_row')}
set is_procedure_row(v){this._setter('is_procedure_row',v)}
get is_order_row(){return this._getter('is_order_row')}
set is_order_row(v){this._setter('is_order_row',v)}
get origin(){return this._getter('origin')}
set origin(v){this._setter('origin',v)}
get specify(){return this._getter('specify')}
set specify(v){this._setter('specify',v)}
}
$p.DpBuyers_orderSpecificationRow = DpBuyers_orderSpecificationRow;
class DpBuyers_orderCharges_discountsRow extends TabularSectionRow{
get nom_kind(){return this._getter('nom_kind')}
set nom_kind(v){this._setter('nom_kind',v)}
get discount_percent(){return this._getter('discount_percent')}
set discount_percent(v){this._setter('discount_percent',v)}
}
$p.DpBuyers_orderCharges_discountsRow = DpBuyers_orderCharges_discountsRow;
class DpBuyers_orderSys_furnRow extends TabularSectionRow{
get elm1(){return this._getter('elm1')}
set elm1(v){this._setter('elm1',v)}
get elm2(){return this._getter('elm2')}
set elm2(v){this._setter('elm2',v)}
}
$p.DpBuyers_orderSys_furnRow = DpBuyers_orderSys_furnRow;
class DpBuyers_orderSys_profileRow extends TabularSectionRow{
get sys(){return this._getter('sys')}
set sys(v){this._setter('sys',v)}
}
$p.DpBuyers_orderSys_profileRow = DpBuyers_orderSys_profileRow;
$p.dp.create('buyers_order');
class DpBuilder_text extends DataProcessorObj{
get text(){return this._getter('text')}
set text(v){this._setter('text',v)}
get font_family(){return this._getter('font_family')}
set font_family(v){this._setter('font_family',v)}
get bold(){return this._getter('bold')}
set bold(v){this._setter('bold',v)}
get font_size(){return this._getter('font_size')}
set font_size(v){this._setter('font_size',v)}
get angle(){return this._getter('angle')}
set angle(v){this._setter('angle',v)}
get align(){return this._getter('align')}
set align(v){this._setter('align',v)}
get clr(){return this._getter('clr')}
set clr(v){this._setter('clr',v)}
get x(){return this._getter('x')}
set x(v){this._setter('x',v)}
get y(){return this._getter('y')}
set y(v){this._setter('y',v)}
}
$p.DpBuilder_text = DpBuilder_text;
$p.dp.create('builder_text');
class DpBuilder_lay_impost extends DataProcessorObj{
get elm_type(){return this._getter('elm_type')}
set elm_type(v){this._setter('elm_type',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get region(){return this._getter('region')}
set region(v){this._setter('region',v)}
get split(){return this._getter('split')}
set split(v){this._setter('split',v)}
get elm_by_y(){return this._getter('elm_by_y')}
set elm_by_y(v){this._setter('elm_by_y',v)}
get step_by_y(){return this._getter('step_by_y')}
set step_by_y(v){this._setter('step_by_y',v)}
get align_by_y(){return this._getter('align_by_y')}
set align_by_y(v){this._setter('align_by_y',v)}
get inset_by_y(){return this._getter('inset_by_y')}
set inset_by_y(v){this._setter('inset_by_y',v)}
get elm_by_x(){return this._getter('elm_by_x')}
set elm_by_x(v){this._setter('elm_by_x',v)}
get step_by_x(){return this._getter('step_by_x')}
set step_by_x(v){this._setter('step_by_x',v)}
get align_by_x(){return this._getter('align_by_x')}
set align_by_x(v){this._setter('align_by_x',v)}
get inset_by_x(){return this._getter('inset_by_x')}
set inset_by_x(v){this._setter('inset_by_x',v)}
get w(){return this._getter('w')}
set w(v){this._setter('w',v)}
get h(){return this._getter('h')}
set h(v){this._setter('h',v)}
get sizes(){return this._getter_ts('sizes')}
set sizes(v){this._setter_ts('sizes',v)}
}
$p.DpBuilder_lay_impost = DpBuilder_lay_impost;
class DpBuilder_lay_impostSizesRow extends TabularSectionRow{
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get sz(){return this._getter('sz')}
set sz(v){this._setter('sz',v)}
get changed(){return this._getter('changed')}
set changed(v){this._setter('changed',v)}
}
$p.DpBuilder_lay_impostSizesRow = DpBuilder_lay_impostSizesRow;
$p.dp.create('builder_lay_impost');
class RepMaterials_demand extends DataProcessorObj{
get calc_order(){return this._getter('calc_order')}
set calc_order(v){this._setter('calc_order',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get scheme(){return this._getter('scheme')}
set scheme(v){this._setter('scheme',v)}
get production(){return this._getter_ts('production')}
set production(v){this._setter_ts('production',v)}
get specification(){return this._getter_ts('specification')}
set specification(v){this._setter_ts('specification',v)}
}
$p.RepMaterials_demand = RepMaterials_demand;
class RepMaterials_demandProductionRow extends TabularSectionRow{
get use(){return this._getter('use')}
set use(v){this._setter('use',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
}
$p.RepMaterials_demandProductionRow = RepMaterials_demandProductionRow;
class RepMaterials_demandSpecificationRow extends TabularSectionRow{
get calc_order(){return this._getter('calc_order')}
set calc_order(v){this._setter('calc_order',v)}
get product(){return this._getter('product')}
set product(v){this._setter('product',v)}
get cnstr(){return this._getter('cnstr')}
set cnstr(v){this._setter('cnstr',v)}
get elm(){return this._getter('elm')}
set elm(v){this._setter('elm',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get article(){return this._getter('article')}
set article(v){this._setter('article',v)}
get id(){return this._getter('id')}
set id(v){this._setter('id',v)}
get clr(){return $p.cat.clrs.getter(this._obj.clr)}
set clr(v){this._setter('clr',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get nom_kind(){return this._getter('nom_kind')}
set nom_kind(v){this._setter('nom_kind',v)}
get price_group(){return this._getter('price_group')}
set price_group(v){this._setter('price_group',v)}
get nom_group(){return this._getter('nom_group')}
set nom_group(v){this._setter('nom_group',v)}
get packing(){return this._getter('packing')}
set packing(v){this._setter('packing',v)}
get qty(){return this._getter('qty')}
set qty(v){this._setter('qty',v)}
get len(){return this._getter('len')}
set len(v){this._setter('len',v)}
get width(){return this._getter('width')}
set width(v){this._setter('width',v)}
get s(){return this._getter('s')}
set s(v){this._setter('s',v)}
get material(){return this._getter('material')}
set material(v){this._setter('material',v)}
get grouping(){return this._getter('grouping')}
set grouping(v){this._setter('grouping',v)}
get totqty(){return this._getter('totqty')}
set totqty(v){this._setter('totqty',v)}
get totqty1(){return this._getter('totqty1')}
set totqty1(v){this._setter('totqty1',v)}
get alp1(){return this._getter('alp1')}
set alp1(v){this._setter('alp1',v)}
get alp2(){return this._getter('alp2')}
set alp2(v){this._setter('alp2',v)}
get sz(){return this._getter('sz')}
set sz(v){this._setter('sz',v)}
get price(){return this._getter('price')}
set price(v){this._setter('price',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get amount_marged(){return this._getter('amount_marged')}
set amount_marged(v){this._setter('amount_marged',v)}
}
$p.RepMaterials_demandSpecificationRow = RepMaterials_demandSpecificationRow;
$p.rep.create('materials_demand');
class RepCash extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepCash = RepCash;
class RepCashDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get register(){return this._getter('register')}
set register(v){this._setter('register',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get bank_account_cashbox(){return this._getter('bank_account_cashbox')}
set bank_account_cashbox(v){this._setter('bank_account_cashbox',v)}
get initial_balance(){return this._getter('initial_balance')}
set initial_balance(v){this._setter('initial_balance',v)}
get debit(){return this._getter('debit')}
set debit(v){this._setter('debit',v)}
get credit(){return this._getter('credit')}
set credit(v){this._setter('credit',v)}
get final_balance(){return this._getter('final_balance')}
set final_balance(v){this._setter('final_balance',v)}
}
$p.RepCashDataRow = RepCashDataRow;
$p.rep.create('cash');
class RepGoods extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepGoods = RepGoods;
class RepGoodsDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get register(){return this._getter('register')}
set register(v){this._setter('register',v)}
get warehouse(){return this._getter('warehouse')}
set warehouse(v){this._setter('warehouse',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get initial_balance(){return this._getter('initial_balance')}
set initial_balance(v){this._setter('initial_balance',v)}
get debit(){return this._getter('debit')}
set debit(v){this._setter('debit',v)}
get credit(){return this._getter('credit')}
set credit(v){this._setter('credit',v)}
get final_balance(){return this._getter('final_balance')}
set final_balance(v){this._setter('final_balance',v)}
get amount_initial_balance(){return this._getter('amount_initial_balance')}
set amount_initial_balance(v){this._setter('amount_initial_balance',v)}
get amount_debit(){return this._getter('amount_debit')}
set amount_debit(v){this._setter('amount_debit',v)}
get amount_credit(){return this._getter('amount_credit')}
set amount_credit(v){this._setter('amount_credit',v)}
get amount_final_balance(){return this._getter('amount_final_balance')}
set amount_final_balance(v){this._setter('amount_final_balance',v)}
}
$p.RepGoodsDataRow = RepGoodsDataRow;
$p.rep.create('goods');
class RepInvoice_execution extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepInvoice_execution = RepInvoice_execution;
class RepInvoice_executionDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
get invoice(){return this._getter('invoice')}
set invoice(v){this._setter('invoice',v)}
get pay(){return this._getter('pay')}
set pay(v){this._setter('pay',v)}
get pay_total(){return this._getter('pay_total')}
set pay_total(v){this._setter('pay_total',v)}
get pay_percent(){return this._getter('pay_percent')}
set pay_percent(v){this._setter('pay_percent',v)}
get shipment(){return this._getter('shipment')}
set shipment(v){this._setter('shipment',v)}
get shipment_total(){return this._getter('shipment_total')}
set shipment_total(v){this._setter('shipment_total',v)}
get shipment_percent(){return this._getter('shipment_percent')}
set shipment_percent(v){this._setter('shipment_percent',v)}
}
$p.RepInvoice_executionDataRow = RepInvoice_executionDataRow;
$p.rep.create('invoice_execution');
class RepMutual_settlements extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepMutual_settlements = RepMutual_settlements;
class RepMutual_settlementsDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get register(){return this._getter('register')}
set register(v){this._setter('register',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get initial_balance(){return this._getter('initial_balance')}
set initial_balance(v){this._setter('initial_balance',v)}
get debit(){return this._getter('debit')}
set debit(v){this._setter('debit',v)}
get credit(){return this._getter('credit')}
set credit(v){this._setter('credit',v)}
get final_balance(){return this._getter('final_balance')}
set final_balance(v){this._setter('final_balance',v)}
}
$p.RepMutual_settlementsDataRow = RepMutual_settlementsDataRow;
$p.rep.create('mutual_settlements');
class RepSelling extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepSelling = RepSelling;
class RepSellingDataRow extends TabularSectionRow{
get period(){return this._getter('period')}
set period(v){this._setter('period',v)}
get register(){return this._getter('register')}
set register(v){this._setter('register',v)}
get organization(){return this._getter('organization')}
set organization(v){this._setter('organization',v)}
get department(){return this._getter('department')}
set department(v){this._setter('department',v)}
get partner(){return this._getter('partner')}
set partner(v){this._setter('partner',v)}
get trans(){return this._getter('trans')}
set trans(v){this._setter('trans',v)}
get nom(){return this._getter('nom')}
set nom(v){this._setter('nom',v)}
get characteristic(){return this._getter('characteristic')}
set characteristic(v){this._setter('characteristic',v)}
get quantity(){return this._getter('quantity')}
set quantity(v){this._setter('quantity',v)}
get amount(){return this._getter('amount')}
set amount(v){this._setter('amount',v)}
get vat_amount(){return this._getter('vat_amount')}
set vat_amount(v){this._setter('vat_amount',v)}
get discount(){return this._getter('discount')}
set discount(v){this._setter('discount',v)}
}
$p.RepSellingDataRow = RepSellingDataRow;
$p.rep.create('selling');
class RepFormulas_stat extends DataProcessorObj{
get data(){return this._getter_ts('data')}
set data(v){this._setter_ts('data',v)}
}
$p.RepFormulas_stat = RepFormulas_stat;
class RepFormulas_statDataRow extends TabularSectionRow{
get date(){return this._getter('date')}
set date(v){this._setter('date',v)}
get formula(){return this._getter('formula')}
set formula(v){this._setter('formula',v)}
get user(){return this._getter('user')}
set user(v){this._setter('user',v)}
get suffix(){return this._getter('suffix')}
set suffix(v){this._setter('suffix',v)}
get requests(){return this._getter('requests')}
set requests(v){this._setter('requests',v)}
get time(){return this._getter('time')}
set time(v){this._setter('time',v)}
}
$p.RepFormulas_statDataRow = RepFormulas_statDataRow;
$p.rep.create('formulas_stat');

/*
 * Подмешивается в конец init-файла
 *
 */

/**
 * Абстрактная строка табчасти параметров
 * @class
 */
class ParamsRow extends TabularSectionRow{
  get param(){
    return this._getter('param') || $p.cch.properties.get();
  }
  set param(v){this._setter('param',v)}
  get value(){
    const {param} = this;
    return (param && param.fetch_type && !param.empty()) ? param.fetch_type(this._obj.value) : this._getter('value');
  }
  set value(v){
    if(typeof v === 'string' && v.length === 72 && this.param.type?.types?.includes('cat.clrs')) {
      v = $p.cat.clrs.getter(v);
    }
    this._setter('value',v);
  }
}

/**
 * Строка табчасти параметров с уточнением до элемента
 * @class
 */
class ElmParamsRow extends ParamsRow{
  get elm(){return this._getter('elm')}
  set elm(v){this._setter('elm',v)}
}

/**
 * Строка табчасти параметров с признаком сокрытия
 * @class
 */
class HideParamsRow extends ParamsRow{
  get hide(){return this._getter('hide')}
  set hide(v){this._setter('hide',v)}
}

/**
 * Строка табчасти параметров с признаками сокрытия и принудительной установки
 * @class
 */
class HideForciblyParamsRow extends HideParamsRow{
  get forcibly(){return this._getter('forcibly')}
  set forcibly(v){this._setter('forcibly',v)}
}

/**
 * Строка табчасти отбора технологических справочников
 * @class
 */
class SelectionParamsRow extends ElmParamsRow{
  get area(){return this._getter('area')}
  set area(v){this._setter('area',v)}
  get comparison_type(){return this._getter('comparison_type')}
  set comparison_type(v){this._setter('comparison_type',v)}
  get txt_row(){return this._getter('txt_row')}
  set txt_row(v){this._setter('txt_row',v)}
  get origin(){return this._getter('origin')}
  set origin(v){this._setter('origin',v)}
}

/**
 * Строка табчасти допреквизитов
 * @class
 */
class Extra_fieldsRow extends TabularSectionRow{
  get property(){return this._getter('property')}
  set property(v){this._setter('property',v)}
  get value(){
    const {property: param} = this;
    return (param && param.fetch_type && !param.empty()) ? param.fetch_type(this._obj.value) : this._getter('value');
  }
  set value(v) {
    if(typeof v === 'string' && v.length === 72 && this.property?.type?.types?.includes('cat.clrs')) {
      v = $p.cat.clrs.getter(v);
    }
    this._setter('value', v);
  }
  get txt_row(){return this._getter('txt_row')}
  set txt_row(v){this._setter('txt_row',v)}
}

/**
 * Строка допреквизитов ключей параметров
 * @class
 */
class CatParameters_keysParamsRow extends Extra_fieldsRow{
  get area(){return this._getter('area')}
  set area(v){this._setter('area',v)}
  get origin(){return this._getter('origin')}
  set origin(v){this._setter('origin',v)}
  get comparison_type(){return this._getter('comparison_type')}
  set comparison_type(v){this._setter('comparison_type',v)}
}

/**
 * Строка табчасти назначения платежа
 * @class
 */
class Payment_detailsRow extends TabularSectionRow{
  get cash_flow_article(){return this._getter('cash_flow_article')}
  set cash_flow_article(v){this._setter('cash_flow_article',v)}
  get trans(){return this._getter('trans')}
  set trans(v){this._setter('trans',v)}
  get amount(){return this._getter('amount')}
  set amount(v){this._setter('amount',v)}
}

/**
 * Строка табчасти параметров формул
 * @class
 */
class CatFormulasParamsRow extends ParamsRow{}

class DpBuyers_orderProduct_paramsRow extends ElmParamsRow{
  get hide(){return this._getter('hide')}
  set hide(v){this._setter('hide',v)}
}

class CatProduction_paramsFurn_paramsRow extends HideForciblyParamsRow{}

class CatProduction_paramsProduct_paramsRow extends HideForciblyParamsRow{
  get elm(){return this._getter('elm')}
  set elm(v){this._setter('elm',v)}
}

class CatInsertsProduct_paramsRow extends HideForciblyParamsRow{
  get pos(){return this._getter('pos')}
  set pos(v){this._setter('pos',v)}
  get list(){return this._getter('list')}
  set list(v){this._setter('list',v)}
}

class CatCnnsSizesRow extends SelectionParamsRow{
  get key(){return this._getter('key')}
  set key(v){this._setter('key',v)}
}

class CatInsertsSelection_paramsRow extends SelectionParamsRow{}

class CatCnnsSelection_paramsRow extends SelectionParamsRow{}

class CatFurnsSelection_paramsRow extends SelectionParamsRow{
  get dop(){return this._getter('dop')}
  set dop(v){this._setter('dop',v)}
}

class CatCharacteristicsParamsRow extends HideParamsRow{
  get cnstr(){return this._getter('cnstr')}
  set cnstr(v){this._setter('cnstr',v)}
  get region(){return this._getter('region')}
  set region(v){this._setter('region',v)}
  get inset(){return this._getter('inset')}
  set inset(v){this._setter('inset',v)}
  get _list() {
    const {param, inset} = this;
    if(!param.empty() && !inset.empty()) {
      const def = inset.product_params.find({param});
      if(def && def.list) {
        let _list;
        try {_list = JSON.parse(def.list)}
        catch (e) {}
        return _list;
      }
    }
  }
}

class DocCredit_card_orderPayment_detailsRow extends Payment_detailsRow{}
class DocDebit_bank_orderPayment_detailsRow extends Payment_detailsRow{}
class DocCredit_bank_orderPayment_detailsRow extends Payment_detailsRow{}
class DocDebit_cash_orderPayment_detailsRow extends Payment_detailsRow{}
class DocCredit_cash_orderPayment_detailsRow extends Payment_detailsRow{}

class CatProjectsExtra_fieldsRow extends Extra_fieldsRow{}
class CatStoresExtra_fieldsRow extends Extra_fieldsRow{}
class CatCharacteristicsExtra_fieldsRow extends Extra_fieldsRow{}
class DocPurchaseExtra_fieldsRow extends Extra_fieldsRow{}
class DocCalc_orderExtra_fieldsRow extends Extra_fieldsRow{}
class DocCredit_card_orderExtra_fieldsRow extends Extra_fieldsRow{}
class DocDebit_bank_orderExtra_fieldsRow extends Extra_fieldsRow{}
class DocCredit_bank_orderExtra_fieldsRow extends Extra_fieldsRow{}
class DocDebit_cash_orderExtra_fieldsRow extends Extra_fieldsRow{}
class DocCredit_cash_orderExtra_fieldsRow extends Extra_fieldsRow{}
class DocSellingExtra_fieldsRow extends Extra_fieldsRow{}
class CatBranchesExtra_fieldsRow extends Extra_fieldsRow{}
class CatPartnersExtra_fieldsRow extends Extra_fieldsRow{}
class CatNomExtra_fieldsRow extends Extra_fieldsRow{}
class CatOrganizationsExtra_fieldsRow extends Extra_fieldsRow{}
class CatDivisionsExtra_fieldsRow extends Extra_fieldsRow{}
class CatUsersExtra_fieldsRow extends Extra_fieldsRow{}
class CatProduction_paramsExtra_fieldsRow extends Extra_fieldsRow{}

Object.assign($p, {
  CatFormulasParamsRow,
  CatCharacteristicsParamsRow,
  DpBuyers_orderProduct_paramsRow,
  CatProduction_paramsFurn_paramsRow,
  CatProduction_paramsProduct_paramsRow,
  CatInsertsProduct_paramsRow,
  CatCnnsSizesRow,
  CatInsertsSelection_paramsRow,
  CatCnnsSelection_paramsRow,
  CatFurnsSelection_paramsRow,
  DocCredit_card_orderPayment_detailsRow,
  DocDebit_bank_orderPayment_detailsRow,
  DocCredit_bank_orderPayment_detailsRow,
  DocDebit_cash_orderPayment_detailsRow,
  DocCredit_cash_orderPayment_detailsRow,
  CatProjectsExtra_fieldsRow,
  CatStoresExtra_fieldsRow,
  CatCharacteristicsExtra_fieldsRow,
  DocPurchaseExtra_fieldsRow,
  DocCalc_orderExtra_fieldsRow,
  DocCredit_card_orderExtra_fieldsRow,
  DocDebit_bank_orderExtra_fieldsRow,
  DocCredit_bank_orderExtra_fieldsRow,
  DocDebit_cash_orderExtra_fieldsRow,
  DocCredit_cash_orderExtra_fieldsRow,
  DocSellingExtra_fieldsRow,
  CatBranchesExtra_fieldsRow,
  CatPartnersExtra_fieldsRow,
  CatNomExtra_fieldsRow,
  CatOrganizationsExtra_fieldsRow,
  CatDivisionsExtra_fieldsRow,
  CatUsersExtra_fieldsRow,
  CatProduction_paramsExtra_fieldsRow,
  CatParameters_keysParamsRow,
});

})();
};