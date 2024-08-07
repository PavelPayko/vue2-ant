<script lang="ts">
import Vue from 'vue';
import { Button, DatePicker, Table, Input } from 'ant-design-vue';
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(Input);

const data = [
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "4",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' suspended (module 'builtin:omfwd'), retry 0. There should be messages before this one giving the reason for suspension. [v8.1901.0 try https://www.rsyslog.com/e/2007 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "9fa61e95-72aa-4117-84bc-abbdc39f0aeb"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "286df572-9ff4-4fd9-87c0-ca3d5e07d983"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "4",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' suspended (module 'builtin:omfwd'), retry 0. There should be messages before this one giving the reason for suspension. [v8.1901.0 try https://www.rsyslog.com/e/2007 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "aa23427a-80f4-408a-93af-863003051fbf"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "7f909e26-0eec-4afb-9ba2-905a1f3f1f94"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' resumed (module 'builtin:omfwd') [v8.1901.0 try https://www.rsyslog.com/e/2359 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "9e72b70a-3c81-440f-9be5-ce93cdb9bda7"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' resumed (module 'builtin:omfwd') [v8.1901.0 try https://www.rsyslog.com/e/2359 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "24df4f3b-943d-46f2-ad59-97b21a180271"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "4",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' suspended (module 'builtin:omfwd'), retry 0. There should be messages before this one giving the reason for suspension. [v8.1901.0 try https://www.rsyslog.com/e/2007 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "7283fc61-fded-4aa0-b466-54bb2e5ad2da"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "d64a1fe2-a521-4b28-b61f-49a300671aff"
    },
    {
        "timestamp": "2024-08-07T10:32:07Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' resumed (module 'builtin:omfwd') [v8.1901.0 try https://www.rsyslog.com/e/2359 ]",
        "$timestamp": "2024-08-07T10:32:07Z",
        "$uuid": "2f3a9ef7-c31f-4cc3-bf77-d0fc3e04d6d8"
    },
    {
        "timestamp": "2024-08-07T10:32:14Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:32:14Z",
        "$uuid": "f31dcf60-b50d-4d79-8938-132b26793288"
    },
    {
        "timestamp": "2024-08-07T10:32:14Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:32:14Z",
        "$uuid": "1966147c-4d0d-4419-9300-d91355d24c06"
    },
    {
        "timestamp": "2024-08-07T10:32:14Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "art-timer.service: Succeeded.",
        "$timestamp": "2024-08-07T10:32:14Z",
        "$uuid": "11250ea3-248a-4627-9ca5-a844bc7efcb9"
    },
    {
        "timestamp": "2024-08-07T10:32:14Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' resumed (module 'builtin:omfwd') [v8.1901.0 try https://www.rsyslog.com/e/2359 ]",
        "$timestamp": "2024-08-07T10:32:14Z",
        "$uuid": "4c58aca6-c12b-4b9d-aa55-5560f9efce5a"
    },
    {
        "timestamp": "2024-08-07T10:32:14Z",
        "msgid": "4",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' suspended (module 'builtin:omfwd'), retry 0. There should be messages before this one giving the reason for suspension. [v8.1901.0 try https://www.rsyslog.com/e/2007 ]",
        "$timestamp": "2024-08-07T10:32:14Z",
        "$uuid": "655f8661-eaef-4d1d-b297-b81b64254da6"
    },
    {
        "timestamp": "2024-08-07T10:33:05Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:33:05Z",
        "$uuid": "b0bd2a94-6503-4c8c-866c-b30a211f8fd7"
    },
    {
        "timestamp": "2024-08-07T10:33:05Z",
        "msgid": "3",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "omfwd: TCPSendBuf error -2027, destruct TCP Connection to 10.31.211.75:5678 [v8.1901.0 try https://www.rsyslog.com/e/2027 ]",
        "$timestamp": "2024-08-07T10:33:05Z",
        "$uuid": "29dc48b3-226e-4239-8fb6-576e7f503e0b"
    },
    {
        "timestamp": "2024-08-07T10:33:05Z",
        "msgid": "4",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' suspended (module 'builtin:omfwd'), retry 0. There should be messages before this one giving the reason for suspension. [v8.1901.0 try https://www.rsyslog.com/e/2007 ]",
        "$timestamp": "2024-08-07T10:33:05Z",
        "$uuid": "6235639b-bb64-4de4-9ef2-e6fdfe15c07f"
    },
    {
        "timestamp": "2024-08-07T10:33:05Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "pam_unix(cron:session): session opened for user root by (uid=0)",
        "$timestamp": "2024-08-07T10:33:05Z",
        "$uuid": "56cd178a-95ce-48eb-a095-fa1c723eb515"
    },
    {
        "timestamp": "2024-08-07T10:33:05Z",
        "msgid": "6",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' resumed (module 'builtin:omfwd') [v8.1901.0 try https://www.rsyslog.com/e/2359 ]",
        "$timestamp": "2024-08-07T10:33:05Z",
        "$uuid": "471ae7b1-1ef7-41c8-ad30-02382b902b68"
    },
    {
        "timestamp": "2024-08-07T10:33:14Z",
        "msgid": "4",
        "action": null,
        "event_src_title": null,
        "event_src_vendor": null,
        "event_src_hostname": "10.31.211.46",
        "event_src_ip": null,
        "message": "action 'action-2-builtin:omfwd' suspended (module 'builtin:omfwd'), retry 0. There should be messages before this one giving the reason for suspension. [v8.1901.0 try https://www.rsyslog.com/e/2007 ]",
        "$timestamp": "2024-08-07T10:33:14Z",
        "$uuid": "6b6a173e-c38c-4de5-8aec-7b7d48c40b49"
    }
]

const columns = Object.keys(data[0]).map(key => ({
    dataIndex: key,
    key,
    title: key
  }))

  const sql = "SELECT `timestamp`, `msgid`, `action`, `event_src_title`, `event_src_vendor`, `event_src_hostname`, `event_src_ip`, `message` FROM `messages` WHERE `timestamp` BETWEEN toDateTime('2024-02-09 13:33:28') AND toDateTime('2024-08-07 13:33:28')"

export default {
  data() {
    return {
      data,
      columns,
      sql,
      count: data.length
    };
  },
};
</script>

<template>
  <div class="events">
    <h1>События {{ count }}</h1>

    <div class="events-header">
      <div class="events-header-block">
        <a-button icon="build">Конструктор SQL</a-button>
        <a-range-picker>
      <template slot="dateRender">
      </template>
    </a-range-picker>
      </div>
      <div class="events-header-block">
        <a-button type="default" icon="save" />
        <a-button type="primary" icon="reload" >
          Обновить
        </a-button>
      </div>
    </div>

    <div class="events-sql">
      <template>
        <a-input placeholder="Basic usage" :value="sql"/>
      </template>
    </div>

    <div class="events-table">
      <a-table :columns="columns" :data-source="data" rowKey="$uuid">
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
  </a-table>
    </div>
  </div>
</template>

<style>
.events {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h1 {
    width: 100%;
  }

  .events-header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .events-header-block {
      display: flex;
      gap: 8px;
    }
  }

  .events-sql {
width: 100%;
  }

  .events-table {

  }
}
</style>
