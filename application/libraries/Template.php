<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Template {

    var $CI;

    public function template() {
        $this->CI = & get_instance();
        $this->meta();
    }

    public function meta($meta = array(), $value='') {
        $this->CI->load->vars($meta);
        return $meta;
    }

    public function view($view, $data=array(), $content_template = 'general') {
        $data['content'] = $this->CI->load->view($view, $data, TRUE);
        $data['content_template'] = $content_template;
        return $this->CI->load->view('template', $data);
    }

}