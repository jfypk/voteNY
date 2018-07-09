#! /usr/bin/python

import os
import pdfrw


INVOICE_TEMPLATE_PATH = 'template_final.pdf'
INVOICE_OUTPUT_PATH = 'completed.pdf'


ANNOT_KEY = '/Annots'
ANNOT_FIELD_KEY = '/T'
ANNOT_VAL_KEY = '/V'
ANNOT_RECT_KEY = '/Rect'
SUBTYPE_KEY = '/Subtype'
WIDGET_SUBTYPE_KEY = '/Widget'


def write_fillable_pdf(input_pdf_path, output_pdf_path, data_dict):
    template_pdf = pdfrw.PdfReader(input_pdf_path)
    annotations = template_pdf.pages[0][ANNOT_KEY]
    for annotation in annotations:
        if annotation[SUBTYPE_KEY] == WIDGET_SUBTYPE_KEY:
            if annotation[ANNOT_FIELD_KEY]:
                key = annotation[ANNOT_FIELD_KEY][1:-1]
                if key in data_dict.keys():
                    annotation.update(
                        pdfrw.PdfDict(V='{}'.format(data_dict[key]))
                    )
    pdfrw.PdfWriter().write(output_pdf_path, template_pdf)


data_dict = {
   'us_citizen_yes': 'X',
   'us_citizen_no': 'X',
   'older_than_18_yes': 'X',
   'older_than_18_no': 'X',
   'last_name': 'Park',
   'suffix': 'Jr',
   'first_name': 'Jeffrey',
   'middle_initial': 'Y',
   'birth_month': '09',
   'birth_day': '11',
   'birth_year': '1989',
   'male': 'X',
   'female': 'X',
   'tel_area_code': '646',
   'tel_first3': '732',
   'tel_last4': '5117',
   'email': 'jypark03@gmail.com',
   'resi_address': '847 Eastern Pkwy',
   'resi_apt#': '3',
   'resi_city': 'Brooklyn',
   'resi_zip': '11213',
   'resi_county': 'New York City',
   'mail_address': 'FAKE ADDRESS HERE',
   'mail_po': '3432232',
   'mail_zip': '11333-4232',
   'mail_city': 'Poughkeepsie',
   'voted_before_yes': 'X',
   'voted_before_no': 'X',
   'vh_year': '1994',
   'vh_name': 'Charles Macdougal',
   'vh_address': '232-23 Macdonald St Poughkeepsie NY 12313',
   'vh_county': 'Blacksonndnd',
   'id_dmv_check': 'X',
   'dmv': '123456789',
   'id_ssn_check': 'X',
   'ssn': '1234',
   'no_id_check': 'X',
   'democratic_check': 'X',
   'republican_check': 'X',
   'conservative_check': 'X',
   'green_party_check': 'X',
   'working_family_check': 'X',
   'independence_check': 'X',
   'women_equality_check': 'X',
   'reform_check': 'X',
   'other_party_check': 'X',
   'other_party': 'Rent is too damn high',
   'no_party_check': 'X',
   'absentee_check': 'X',
   'election_worker_check': 'X',
   'return_name': 'Jeffrey Park',
   'return_address_apt': '847 eastern pkwy #3',
   'return_city_state_zip': 'Brooklyn NY 11213',
   'send_county': 'New York City',
   'send_address': '32 Broadway',
   'send_address2': '7th floor',
   'send_city_state_zip': 'New York NY 10004',
   'o_last_name': 'Park',
   'o_first_name': 'Jeffrey',
   'o_suffix': 'Jr',
   'o_address': '847 Eastern Pkwy',
   'o_apt': '3',
   'o_zip': '11213',
   'o_city': 'Brooklyn',
   'o_birth_month': '09',
   'o_birth_day': '11',
   'o_birth_year': '1989',
   'o_male': 'X',
   'o_female': 'X',
   'o_eye_color': 'Black',
   'o_height_feet': '5',
   'o_height_inches': '08'
}

if __name__ == '__main__':
    write_fillable_pdf(INVOICE_TEMPLATE_PATH, INVOICE_OUTPUT_PATH, data_dict)