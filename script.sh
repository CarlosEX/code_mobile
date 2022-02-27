#!/usr/bin/env bash

_bateria=$(termux-battery-status | jq ".percentage")

_valor=92

if [ $_bateria -gt $_valor  ]; then
	echo "é maior"   
else
	echo "não é maior"
fi
