<script>
  import { screen } from "$lib/store/screen";
  import { slide } from "svelte/transition";
  import { vipProfiile } from "../vipstore";
  $: showCardView = {};

  const bronzeLevels = [1, 100, 200, 1000, 2000, 3000, 4000];
  const silverLevels = [
    5000, 7000, 9000, 11000, 13000, 15000, 17000, 21000, 25000, 29000, 33000,
    37000, 41000, 45000,
  ];
  const goldLevels = [
    49000, 59000, 69000, 79000, 89000, 99000, 109000, 119000, 129000, 153000,
    177000, 201000, 225000, 249000, 273000, 297000,
  ];
  const platinumLevels = [
    321000, 377000, 433000, 489000, 545000, 601000, 657000, 713000, 769000,
    897000, 1025000, 1153000, 1281000, 1409000, 1537000, 1665000, 1793000,
    2081000, 2369000, 2657000, 2945000, 3233000, 3521000, 3809000, 4097000,
    4737000, 5377000, 6017000, 6657000, 7297000, 7937000, 8577000,
  ];
  const diamondLevels = [
    9217000, 10625000, 12033000, 13441000, 14849000, 16257000, 17665000,
    19073000, 20481000, 23553000, 26625000, 29697000, 32769000, 35841000,
    38913000, 41985000, 45057000, 51713000, 58369000, 65025000, 71681000,
    78337000, 84993000, 91649000, 98305000, 112641000, 126977000, 141313000,
    155649000, 169985000, 184321000, 198657000, 212993000,
  ];
  const chestImage = "https://static.nanogames.io/assets/tr.c44e4679.png";
  const coinImage = "https://static.nanogames.io/assets/jb_r.b43f1e03.png";
  let levelSystem = [
    {
      name: "Bronze Card",
      banner:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAAQlBMVEUAAACRl6mSl6mSl6mSl6mUmaySm62iorqRlqiRlqmSl6iRl6iRl6mSmKmUl6qTl6uVnrCZmbOSlqiSlqiTmKqRlqgutlzcAAAAFXRSTlMA5vfupi0cBdHDvrOVg1FAHRTUcG8w9x3IAAAAbUlEQVQ4y73VNw4AMQhE0e913Bx9/6tuST+WoH+SZWCAkkKXaoESu1gPJNVOGYKKP0C1KzoO9wA+0fGOjueq43ih4wMdb+i4VR1PGXdsz/b/MGuV/5DYePovhq2kfxhYDAVVvwxGrx76jaFz8wPmT3yQuvIhVwAAAABJRU5ErkJggg==",
      levelBadge:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg==",
      star_0:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==",
      star_2: "https://static.nanogames.io/assets/b.d9e6b0ec.png",
      star_1: "https://static.nanogames.io/assets/bh.d27abdd5.png",
      items: bronzeLevels.map((xp, index) => ({
        level: `VIP ${String(index + 1).padStart(2, "0")}`,
        xp: xp,
        reward: index === 3,
        bonusImage: index === 3 ? chestImage : coinImage,
        starsMap: index <= 2 ? [1, 0, 0, 0, 0] : [2, 0, 0, 0, 0],
      })),
    },
    {
      name: "Silver Card",
      banner:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAARVBMVEUAAADp2v/p2//p2v/s3v/t2///6P/p2v/o2v/o2//p2v/p2//o2//p2//q2//p3P/r2//t3P/y5v/o2//o2//o2v/o2v/TCpFOAAAAFnRSTlMA5u6mLRwF0fn1w76zlYNRQB0U1HBvsjt2LAAAAG1JREFUOMu91TkOwDAIRNHveMu+x/c/akr6sQT9kywDA+QYmlQL5KGJ9UBU7ZggqPgDVLui43B34BMd7+h4LjoeLnR8oOMNHdei4ynhju3Z/h9mrfIfEhtP/8WwlfQPA4uhoOqXzujVQ7/SdW5+za2CgnTqU6wAAAAASUVORK5CYII=",
      levelBadge:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg==",
      star_0:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=",
      star_2: "https://static.nanogames.io/assets/s.7c2e9f37.png",
      star_1: "https://static.nanogames.io/assets/sh.ddd2bd05.png",
      items: silverLevels.map((xp, index) => ({
        level: `VIP ${String(index + 8).padStart(2, "0")}`,
        xp: xp,
        reward: [0, 6].includes(index),
        bonusImage: [0, 6].includes(index) ? chestImage : coinImage,
        starsMap: index <= 5 ? [2, 1, 0, 0, 0] : [2, 2, 0, 0, 0],
      })),
    },
    {
      name: "Gold Card",
      banner:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAAQlBMVEUAAAD2yCL8ySP3yCL2xyL3yCP/6Eb2yCL3yCL3yCP2xyL2yCL3yCP5ySP3xyT6zCT5xyX/zCb3yCP4yCL4yCL2xyLHt9P4AAAAFXRSTlMA5hz37qYF0cO+s5WDUUAxKRTUcG+mdP/DAAAAbElEQVQ4y73VNw4AMQhE0e+8Ofv+V92SfixB/yTLwACxhC7VDDF3sR4oqk0nBBV/gGoXdBzuAXyg4w0dT1XHOaLjHR2v6LhVHacLd2zP9v8wa5X/kNh4+i+GraR/GFgMBVW/DEavHvqNoXPzA8N3fIX8NYkoAAAAAElFTkSuQmCC",
      levelBadge:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg==",
      star_0:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==",
      star_2: "https://static.nanogames.io/assets/g.d9fc75c0.png",
      star_1: "https://static.nanogames.io/assets/gh.d5753240.png",
      items: goldLevels.map((xp, index) => ({
        level: `VIP ${String(index + 22)}`,
        xp: xp,
        reward: [0, 8].includes(index),
        bonusImage: [0, 8].includes(index) ? chestImage : coinImage,
        starsMap: index <= 7 ? [2, 2, 1, 0, 0] : [2, 2, 2, 0, 0],
      })),
    },
    {
      name: "Platinum Card",
      banner:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAARVBMVEUAAAB4PP53PP54Pf16Pf+AQP+MRv94Pf54PP54PP53PP53PP54Pf54Pv14PP14P/94QP97Pv+AQP93PP55Pf93Pv93PP2cgJ0HAAAAFnRSTlMA5u6mLRwF0fn1w76zlYNRQB0U1HBvsjt2LAAAAG1JREFUOMu91TkOwDAIRNHveMu+x/c/akr6sQT9kywDA+QYmlQL5KGJ9UBU7ZggqPgDVLui43B34BMd7+h4LjoeLnR8oOMNHdei4ynhju3Z/h9mrfIfEhtP/8WwlfQPA4uhoOqXzujVQ7/SdW5+za2CgnTqU6wAAAAASUVORK5CYII=",
      levelBadge:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg==",
      star_0:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==",
      star_2: "https://static.nanogames.io/assets/p.47604fa2.png",
      star_1: "https://static.nanogames.io/assets/ph.7f694585.png",
      items: platinumLevels.map((xp, index) => ({
        level: `VIP ${String(index + 38)}`,
        xp: xp,
        reward: [0, 8, 16, 24].includes(index),
        bonusImage: [0, 8, 16, 24, 31].includes(index) ? chestImage : coinImage,
        starsMap:
          index <= 7
            ? [2, 2, 2, 1, 0]
            : index < 16
              ? [2, 2, 2, 2, 0]
              : index < 24
                ? [2, 2, 2, 2, 1]
                : [2, 2, 2, 2, 2],
      })),
    },
    {
      name: "Diamond Card",
      banner:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAAP1BMVEUAAADlLXXgKHHgKHHgJ3HgJ3LgKHLgKnXgKHLgKHLgKHLgKHLgJ3PgKHLgKHLgKXHfKHTmM3PfQID/VarfJ3H7XQIuAAAAFHRSTlMAHPfm0sGmLe7t5bOVg29RQBQIAygTo0MAAABrSURBVDjLvdU3DgAxCETR73XaHH3/s25JP0jQP8kyMEBqeUhVIS1DrAJNtVOHrOITUO2GjtfHgW90fKDj+ul4Tuj4Qsc7Oi6vjqdOOLZnx3+YtSp8SGw8wxfDVjI+DCyGXAHoil5f6LvOzQ9Ptna/Nqi4JgAAAABJRU5ErkJggg==",
      levelBadge:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII=",
      star_0: "",
      star_2: "https://static.nanogames.io/assets/d.5dbf45cb.png",
      star_1: "",
      items: diamondLevels.map((xp, index) => ({
        level: `SVIP ${String(index + 1)}`,
        xp: xp,
        reward: [0, 8, 16, 24, 32].includes(index),
        bonusImage: [0, 8, 16, 24, 32].includes(index) ? chestImage : coinImage,
        starsMap: [2, 2, 2, 2, 2],
      })),
    },
  ];
</script>

<div class="vip-system">
  <div class="vip-system-title">VIP Level System</div>
  {#each levelSystem as level, index (level.name)}
    <div class="sc-iLOkMM bHtipE vip-system-list">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() =>
          (showCardView = {
            ...showCardView,
            [level.name]:
              showCardView[level.name] === undefined
                ? true
                : !showCardView[level.name],
          })}
        class="vip-system-bar {showCardView[level.name] ? 'expanded' : ''}"
      >
        <div class="bar-cont">
          <img class="level-icon" alt="level" src={level.banner} />
          <div class="bar-tit">{level.name}</div>
          {#if index === levelSystem.length - 1}
            <div class="bar-svip">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg=="
                alt=""
              />SVIP
            </div>
          {/if}
        </div>
        <button>

        </button>
      </div>
      {#if showCardView[level.name]}
        <div
          transition:slide={{ duration: 300 }}
          class="sc-hKwDye fclMSM v-toggle-view"
        >
          <div class="v-table-wrap">
            <div class="{level.name.split(' ')[0]}-list v-table">
              <div class="v-thead">
                <div class="v-tr">
                  {#if $screen > 612}
                    <div class="v-th width_1 align-left">Level</div>
                    <div class="v-th width_2 align-center">XP Amount</div>
                    <div class="v-th width_2 align-center">XP Progress Bar</div>
                    <div class="v-th width_1 m-align-center align-center">
                      Star
                    </div>
                    <div
                      class="v-th width_1 width_m_1 m-align-center align-right"
                    >
                      Bonus
                    </div>
                  {:else}
                    <div class="v-th width_1 align-left">Level</div>
                    <div class="v-th width_1 m-align-center align-center">
                      Star
                    </div>
                    <div
                      class="v-th width_1 width_m_1 m-align-center align-right"
                    >
                      Bonus
                    </div>
                    <div class="v-th width_1 align-right">Level Xp</div>
                  {/if}
                </div>
              </div>
              <div class="v-tbody">
                {#each level.items as item, lIndex (item.xp)}
                  <div class="{item.reward ? 'highLight' : ''} v-tr-wrap">
                    <div class="v-tr-item v-tr">
                      <div class="align-left tlevel v-td width_1 level-td">
                        <img src={level.levelBadge} alt="" />{item.level}
                      </div>
                      {#if $screen > 612}
                        <div class="next-active align-center v-td width_2">
                          {item.xp}
                        </div>
                        <div class="v-td width_2">
                          <div class="sc-gDGHff ezzUcl m-next-bar xp-pr-wrap">
                            {#if $vipProfiile.total_wagered < item.xp}
                              <div
                                class="xp-progress"
                                style="width: {12.67 +
                                  (lIndex +
                                    levelSystem
                                      .slice(0, index)
                                      .reduce(
                                        (a, b) => a + b.items.length,
                                        0
                                      )) *
                                    0.67}px;"
                              >
                                <div
                                  class="pr-completing"
                                  style="width: {(lIndex &&
                                    $vipProfiile.total_wagered >
                                      level.items[lIndex - 1].xp) ||
                                  (!lIndex && !index)
                                    ? Math.round(
                                        (Math.floor(
                                          Math.min(
                                            $vipProfiile.total_wagered,
                                            item.xp
                                          )
                                        ) /
                                          item.xp) *
                                          100
                                      )
                                    : 0}%;"
                                ></div>
                              </div>
                            {/if}
                            {#if $vipProfiile.total_wagered > item.xp}
                              <div class="xp-pr-complete">Completed</div>
                            {:else if $vipProfiile.total_wagered < item.xp && ((lIndex && $vipProfiile.total_wagered > level.items[lIndex - 1].xp) || (!lIndex && !index))}
                              <div class="xp-pr-nextlv">
                                <div class="xp-diff">
                                  {Math.floor($vipProfiile.total_wagered)} XP
                                </div>
                                <div class="xp-percent">
                                  {Math.round(
                                    (Math.floor($vipProfiile.total_wagered) /
                                      item.xp) *
                                      100
                                  )}%
                                </div>
                              </div>
                            {:else}
                              <div class="xp-pr-nocomplete">Not Started</div>
                            {/if}
                          </div>
                        </div>
                      {/if}
                      <div class="flex-center v-td width_1 levelStar-td">
                        <div class="sc-khQegj fPtvsS levelnums_1">
                          {#each item.starsMap as star, sIndex (`${star}_${sIndex}`)}
                            <img
                              class="img-star"
                              alt="level-star"
                              src={level[`star_${star}`]}
                            />
                          {/each}
                        </div>
                      </div>
                      <div
                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                      >
                        <img class="jb-img near" alt="" src={item.bonusImage} />
                      </div>
                      {#if $screen <= 612}
                        <div class="width_1 align-right m-last-item">
                          <div class="m-xpamount">{item.xp}</div>
                          <div class="m-status">
                            <div class="sc-gDGHff fdjLCb m-next-bar xp-pr-wrap">
                              {#if $vipProfiile.total_wagered < item.xp && ((lIndex && $vipProfiile.total_wagered > level.items[lIndex - 1].xp) || (!lIndex && !index))}
                                <div
                                  class="xp-progress"
                                  style="width: 12.6667px;"
                                >
                                  <div
                                    class="pr-completing"
                                    style="width: {Math.round(
                                      (Math.floor(
                                        Math.min(
                                          $vipProfiile.total_wagered,
                                          item.xp
                                        )
                                      ) /
                                        item.xp) *
                                        100
                                    )}%;"
                                  ></div>
                                </div>
                              {/if}
                              {#if $vipProfiile.total_wagered > item.xp}
                                <div class="xp-pr-complete">Completed</div>
                              {:else if $vipProfiile.total_wagered < item.xp && ((lIndex && $vipProfiile.total_wagered > level.items[lIndex - 1].xp) || (!lIndex && !index))}
                                <div class="xp-pr-nextlv">
                                  <div class="xp-percent">
                                    {Math.round(
                                      (Math.floor($vipProfiile.total_wagered) /
                                        item.xp) *
                                        100
                                    )}%
                                  </div>
                                </div>
                              {:else}
                                <div class="xp-pr-nocomplete">Not Started</div>
                              {/if}
                            </div>
                          </div>
                        </div>
                      {/if}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/each}

  <div class="vip-reward">
    <img
      class="img-vipillu"
      src="https://static.nanogames.io/assets/illustration.20a473b8.png"
      alt="vipillu.png"
    />
    <div class="vip-reward-list">
      <div class="vip-reward-title">About CUB Bonus</div>
      <div class="vip-reward-item">
        Every VIP level-up gets corresponding CUB Bonus.
      </div>
      <div class="vip-reward-item">
        CUB Bonus increases as the level increases.
      </div>
      <div class="vip-reward-item">
        With CUB you can play games, boost Rakeback, or deduct withdrawal fees.
      </div>
    </div>
  </div>

  <div class="more-bottom"></div>
</div>

<style>
  .vip-system .vip-system-title {
    padding-left: 1.625rem;
    color: var(--text-5);
    font-size: 1rem;
    line-height: 1.375rem;
    height: 3.875rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .vip-system .more-bottom {
    height: 2.5rem;
  }

  .vip-system-list {
    transition: all 200ms ease-out;
  }

  .vip-system-bar > button {
    cursor: pointer;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    transition: transform 200ms linear;
  }

  .vip-system-bar.expanded > button {
    transform: rotateZ(90deg);
  }

  .bHtipE .v-toggle-view {
    margin: 0px -0.75rem;
    padding: 0px 0.75rem;
  }

  .bHtipE {
    background-color: var(--card-bg-5);
    border-radius: 0.625rem;
    position: relative;
    margin: 0px 0.75rem 0.625rem;
  }

  .bHtipE .vip-system-bar {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 3rem;
    line-height: 3rem;
    cursor: pointer;
  }

  .bHtipE .bar-cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .bHtipE .bar-cont .level-icon {
    height: 0.875rem;
    width: auto;
  }

  .bHtipE .bar-cont .bar-tit {
    color: var(--text-5);
    padding-left: 0.625rem;
    white-space: nowrap;
  }

  .bHtipE .v-toggle-view {
    margin: 0px -0.75rem;
    padding: 0px 0.75rem;
  }

  .fclMSM {
    overflow: hidden;
  }

  .bHtipE .v-toggle-view .v-table-wrap {
    margin-bottom: 0.75rem;
  }

  .bHtipE .v-tbody,
  .bHtipE .v-thead {
    padding: 0px 0.625rem;
  }

  .bHtipE .v-tr {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.375rem;
    -webkit-box-align: center;
    align-items: center;
  }

  .bHtipE .align-left {
    text-align: left;
  }

  .bHtipE .align-left {
    text-align: left;
  }

  .bHtipE .align-center {
    text-align: center;
  }

  .bHtipE .width_2 {
    width: 30%;
  }

  .bHtipE .align-center {
    text-align: center;
  }

  @media screen and (max-width: 621px) {
    .bHtipE .m-last-item {
      padding: 0.3125rem 0.625rem 0.3125rem 0px !important;
      line-height: 0.875rem !important;
    }
    .bHtipE .m-align-center {
      text-align: center;
    }
    .bHtipE .width_1 {
      width: 25% !important;
      box-sizing: border-box !important;
    }
    .bHtipE .width_m_1 {
      width: 17% !important;
      box-sizing: border-box !important;
    }
  }
  .m-last-item .m-xpamount {
    font-size: 0.75rem;
    color: rgb(153, 164, 176);
    line-height: 0.875rem;
  }
  .m-last-item .m-status {
    line-height: 0.8125rem;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .m-last-item .m-status .m-next-bar {
    display: flex;
    flex-direction: row-reverse;
  }
  .m-last-item .m-status .m-next-bar .xp-progress {
    display: block;
    margin-left: 0.3125rem;
    margin-right: 0px;
  }
  .m-last-item .m-status .xp-pr-nocomplete,
  .m-last-item .m-status .xp-pr-completing,
  .m-last-item .m-status .xp-pr-complete {
    width: 100%;
    text-align: right;
  }
  .m-last-item .m-status .m-next-bar .xp-percent {
    height: 1.25rem;
    line-height: 1.25rem;
  }

  .bHtipE .width_1 {
    width: 15%;
  }

  .bHtipE .align-right {
    text-align: right;
  }

  .bHtipE .v-tr-wrap:nth-child(2n-1) {
    background-color: rgba(45, 48, 53, 0.7);
    border-radius: 0.3125rem;
  }

  .bHtipE .v-tr {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.375rem;
    -webkit-box-align: center;
    align-items: center;
  }

  .bHtipE .v-td.level-td {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 0px;
  }
  .bHtipE .highLight .tlevel {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .bHtipE .tlevel {
    height: 1.25rem;
    line-height: 1.5rem;
  }

  .bHtipE .align-left {
    text-align: left;
  }

  .bHtipE .width_1 {
    width: 15%;
  }

  .bHtipE .v-td {
    padding: 0px 0.625rem;
    font-size: 0.75rem;
  }

  .ezzUcl {
    display: flex;
  }

  .bHtipE .xp-pr-wrap .xp-progress {
    margin-right: 0.5rem;
  }
  .bHtipE .xp-progress .pr-completing {
    height: 1.25rem;
    box-sizing: border-box;
    animation-timeline: auto;
    animation-range-start: normal;
    animation-range-end: normal;
    border-radius: 0.25rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAAeBAMAAACidv3EAAAAG1BMVEX/2EDpwiv81DzsxS7uxzD50TnxyjL0zDX2zzdrXUeRAAABlUlEQVRIx53WUXKCMBAG4B2E6ivFUh/pcAHrCfAGcIN6A7mB3ryLk+zC/CRh9cVvkhgn+TPZEH+eZVnWHt/rGBknAYyJQ/8iK/nTMYoJfx7dvOsw4Q5jTOgYLX9XjcORpMVjavlh1B7HBdo0dJ4r43PCL+MiLXNk0uWhLRZ8TOvrPRpomZD7LgX8KoV+PX6I9sb4cpAxRkh+GD90PWSMGX6edkPYA6PGI2JCJGzo6gAXK2gedvUCRLtbdAGqOHQwudg0/nGOk5x8GWOHmyejdPx716U4GKDz5DSPXyCJysmHMXbcaC3+8wLuxDJkjBXn164QxO8Bd+JugcaKoaRktFe4Jd86K7wrVN7jqePluF/gsRG8PpL8AvE/w7Vx2IjabQZpScT4YwVQB6fhdoU0fg9NNFgbKxMatxkUTR1vSTwrafj1UTz1PFD3jNCFjph65PkEFTUF2Yx42FjuCjtkffHUsTbaIbsSSR0vx3efT7q+PJAolDtEvwWwPgA+n7R+mgDrMz+fCgNkM+D5JC2Bumc+K7or/9J91KcuwZ7DAAAAAElFTkSuQmCC)
      0% 0% / 150px 100% repeat-x;
    animation: 95s linear 0s infinite normal none running prbar;
  }

  @keyframes prbar {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 5000px 0px;
    }
  }

  .ezzUcl .xp-progress {
    height: 1.25rem;
    background: var(--affiliate-bg);
    border-radius: 0.25rem;
    margin-right: 0.3125rem;
    overflow: hidden;
  }

  .ezzUcl .xp-pr-nextlv {
    position: relative;
    color: var(--text-5);
    height: 1rem;
    line-height: 0.875rem;
    transform: scale(0.85);
    transform-origin: 0px 50%;
  }

  .bHtipE .jb-img.near {
    height: 1.75rem;
  }

  .bHtipE .jb-img {
    height: 1.5625rem;
    display: inline-block;
    vertical-align: top;
    transform: scale(1.2);
  }

  .bHtipE .v-td.level-td {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 0px;
  }

  .bHtipE .v-td.level-td img {
    width: 0.875rem;
    height: 1.125rem;
    margin-right: 0.375rem;
  }

  .vip-system .vip-reward {
    position: relative;
    background-color: var(--card-bg-5);
    border-radius: 1.25rem;
    height: 8.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 0.375rem;
    margin: 0px 0.75rem;
  }

  .vip-system .vip-reward .img-vipillu {
    height: 6.25rem;
    margin-top: 0.5rem;
  }

  .vip-system .vip-reward .vip-reward-list {
    margin-left: 4%;
  }

  .vip-system .vip-reward .vip-reward-list .vip-reward-title {
    color: var(--text-5);
    font-size: 1rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
    line-height: 1.25rem;
  }

  .vip-system .vip-reward .vip-reward-list > .vip-reward-item:last-child {
    margin-bottom: 0px;
  }

  .vip-system .vip-reward .vip-reward-list .vip-reward-item {
    position: relative;
    margin: 0px 0px 0.375rem;
    padding-left: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .vip-system .vip-reward .vip-reward-list .vip-reward-item::after {
    content: ".";
    position: absolute;
    font-size: 1.25rem;
    line-height: 1.25rem;
    height: 1.25rem;
    left: 0rem;
    top: -0.5rem;
    border-radius: 50%;
  }

  .bHtipE .bar-cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .bHtipE .bar-cont .bar-svip {
    margin-left: 8.75rem;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: var(--text-5);
  }

  .bHtipE .bar-cont .bar-svip img {
    width: 1rem;
    margin-right: 0.25rem;
  }
</style>
