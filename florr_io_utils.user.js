// ==UserScript==
// @name         Florr.io utils
// @namespace    https://github.com/xyz128189/florr-io-utils
// @version      W1.2.1
// @description  Florr.io utils
// @author       xyz128189
// @match        https://florr.io/*
// @updateURL    https://github.com/xyz128189/florr-io-utils/raw/main/florr_io_utils.user.js
// @downloadURL  https://github.com/xyz128189/florr-io-utils/raw/main/florr_io_utils.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAYAAAB91L6VAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAK29JREFUeJzt3XuMXvV95/HjsQ22udmODZ4lMpdAcbObyOupgpNQ7HarxSyuZLatNGoT5HRjFwjbHe1mJadS48mliVNQ4sZqZYO0GbL8YTa9OF5VONDUQ0gUIxti2EAHqjV2yCZuuJSUBBxuv/3+5syYx89cnt9znnPO53fOeb+kj9SLPXMu39/vw3ie5zxJAqAUzrnllndb1ll+23KL5ZOWXZa9lgcs37Y8bHnU8n3LU5ZjlmctJy0vWF52U7088f87OfFnj0383e9PfK2HJ772AxPfa9fE975l4ljWTRzbcvV1AgAgmBXX5ZZft/y+5dOWr1r+3vKk5blpCjN2P7E84dJzuNvyKctHLL9muUx9vQEADWCFM89NX7DfsvzA8kb5/Sjnz/mE5UE3TUFb5qvvGwCgQqw4llnWWz5m+YuJgnlB0XAV97xLr52/hv5arrMsU99fAICYlcESy69abnbp70MPuvSfXVEsf439P2v7a+6v/TWWC9TzAAAoiG3y51n+g+Xzlocsp1QNhCn8vfD35HOW6y3nqecFAJCRbeIrLL9j+bJLXwX8pqxe0C1/r/w98/fO38MV6nkCAMzANulVli0ufUHQ/9V1Bwri76m/tx+1XKWeNwBoLNuE57r094d/YnnE8pauG1Ayf6/9Pf+s5YOWuep5BIBas432Istmy72WF3X7PyLjZ8HPhJ+Ni9RzCgCV5/gpF93jp2MAyMI2zDmW91u+5NJHKgK98DP0Rcta9WwDQJQcpYvi+edjf8EyoJ53AJCyjfBXLH9qeUa5K6ORKGMAzeIoXcSHMgZQT7axLbTc5NJnAwMx8zP6YctC9boBgMxsE1vt0ofxvyTdUoHu+Zn9c8tq9ToCgCC2YV3g0k+/eVS6fQL58bN8q+NDIwDEyKUfN+c/I/cV5U4JFMjPtp/xa9XrDQB88W60fFu7LwKl85/edIN6/QFoGJc+oer3LI9r90BA7jHL7zqeuAWgSLbJLHLp78KOSbc8ID5+TdxiWaBepwBqxDaVJZZhywvSLQ6I30nLNscLtgD0wjaRf+XSx0P+TLqlAdXj38b0ecenMwHohm0ay1xavLyiGeiNX0P+wyCWqdc1gIi5tHj9f7W/LN2ygPrxa+pzjiIG0MpRvEBZJot4sXrdAxDym4CjeAGFf7b8saOIgWZxafF+cmITAKAzWcTnqvcFAAWyRT7P8p8dbycCYuPX5G2Weep9AkDObGFvsPyDdo8B0IFfo+vU+wWAHNhiXmW5T7ypAOjOX1ouV+8fADKwxbvU8mXL69p9BEBGpyw7LOep9xMAARy/5wXqxj/e8j9Z+tT7C4AZOH7PC9TZUcfvh4G4uPRBGv9TvDkAKMdXHU/UAvRsIX7I8px4QwBQLr/mN6n3H6CRbPFdYvmGdg8AIPY3ln71fgQ0gi22PsuQ4yMCAaT8Rx9+1DJHvT8BtWUL7ErLYe1aBxCpb1muVO9TQK3Yoppv+SOXvi8QAGbyquUTlvnqfQuoPFtIv2x5VLumAVTMEcu71PsXUFkufTj7q+KFDKCa/MeM3qTex4BKcenHBe4XL14A9eBfKb1Eva8B0bOF8u8sPxQvWAD18gPLNer9DYiSS19o9UXLW9p1CqCm3rB8yvECLeBttiAud7zQCkA5eIEW4NlC2OzSF0sAQFn8nvMh9f4HSNjwL7R8RbsGATTcVywL1fshUBob+JWWx7XrDgDG+b1opXpfBApng3695QXxggOAVn5Pul69PwKFsOGea/ms41XOAOLk96bPWOaq90sgNzbQKyyj2rUFAEH8XrVUvW8CPbNBfp/lx+IFBQDdOGF5n3r/BDKzAf6Y5RfihQQAWfi961b1Pgp0xaW/790lXjwAkAe/l/F7YcTPBvUCywHxggGAPPk9bZF6fwVmZAN6seUJ8UIBgCL4R1herN5ngSlsMAccn2IEoN78Hjeg3m+B02wgr7P8XLwwAKAMfq+7Tr3vAr58b3Ppx3wBQFP4Pe829f6LhnK80hkA/B44R70fo0Fs4BY5XukMAN5fOV4hjTLYoJ1t+TvxwANATP7acrZ6f0aN2YCd4yhfAJjO/ZZz1fs0asgGa7Hlu+IBB4CYfcdRwsiTS8v3MfFgA0AV+BJeot63UQM2SBc6yhcAuvE9y0Xq/RsVZgO00vK0eJABoIrGHCWMLFxavifEAwwAVeZL+BL1fo4KsYG50lG+AJCH45ar1Ps6KsAGpd9yTDywAFAnfk/tV+/viJhLy/dJ8aACQB35vZUSxlQ2GEsd5QsARfJ77FL1fo+IuLR8j4gHEwCawO+1PKwD4+V7rqN8AaBMDzpKuNlsABZMDAIAoFx+712g7gEIuLR8/1Y8gADQZH4PpoSbxG74PEf5AkAM/F48T90LKInd7J3qiQMAnLZT3Qsogd3oIfWkAQCmGFL3AwpkN/hGy5vqKQMATOH35t9S9wQKYDd2reUV8YABAGbm9+j3qvsCObIberHlOfFgAQA6e9byTnVvIAd2I8+3PC4eKABAuMcs56v7Az2wGzjf8oB4kAAA3bvfMl/dI8jIbt6IeoIAAJntVvcIMrAbN6yeHABAz3h7UpXYDbvW8XYjAKiD1yzXqnsFAexGrbT8k3hgAAD58Xv6SnW/YBZ2gxZZHhEPCgAgf35v50VZsXK86AoA6owXZcXIbszN6skAABTuZnXfoIVLX3T1mnoqAACF83v9GnXvIBkv3wsdL7oCgCY5YblQ3T+N5tInXT0oHgQAQPn83s+LslTs4u9WTwAAQGanuocayS78bzgetgEATeY74Dp1HzWKXfAllh+LbzwAQO9HliXqXmoMu9h71XccABCNvepeagS70IPqOw0AiM6gup9qzS7wZZYX1XcZABAd3w3vUvdULdmF7bMcEt9gAEC8vmPpU/dV7dhF3aa+swCA6G1T91Wt2AW92vIL9V0FAETPd8V71b1VC3Yhz7EcE99QAEB1PGY5S91flWcXcaf6TgIAKmeHur8qzS7gassb6rsIAKgc3x0D6h6rJLtwcy3fE99AAEB1HbHMVfdZ5The9QwA6N2Qus8qxS7YFY5XPQMAevey5Sp1r1WGXayH1HcMAFAbB9W9Vgl2oTar7xQAoHY2q/stanaBLra8oL5LAIDaed7yDnXPRcsuzj71HQIA1BYfWzgduzCb1HcGAFB7m9R9FxW7IGdbnlDfFQBA7fmuOVvde9FwvOcXAFAePjHJswux3PIv6rsBAGiMn1qWq/tPzi7CbvWdAAA0zm51/0m59HN++bAFAEDZfPe8W92DMnbyh9R3AADQWN9Q96CEnfig+soDABpvUN2HpXLp245OqK86AKDxjrsmvS3JTnZYfcUBAJjQjLcl2YmutJxSX20AACb4tyVdou7HwjnedgQAiM9OdT8Wyk7wMsfbjgAA8XnFcoW6JwtjJzeivsIAAMxgRN2ThXD89AsAiNvrro4/BdtJ7VVfWQAAOhhR92Wu7ITeo76iAAAE8D8F/1t1b+bGTmaf+ooCABBon7o3c+H46RcAUC1vuTr8FGwncUB9JQEA6FK1fwq2E1ivvoIAAGTgfwper+7RzBw//QIAquuAukczsQO/yqX/BQEAQBX5DvtldZ92zfHMZwBA9e1W92lX7ICXuPS5mgAAVNnPLUvVvRrMDnab+ooBAJCTanxesB3oQssP1VcLAICcPGuZp+7Xjuwgb1ZfKQAAcrZZ3a+zsgOcYxlTXyUAAHL2pGWOumdnZAe3QX2FAAAoyAZ1z87IVezBG+vWERJ/tm51hRob058jqd4c3XGH/pxmytNP53uuLeJ8MIer4IM3/FETEnsGBopdB4cP68+RVG+OtmzRn9NMOXIk33NtEeeDOeygdhZ2ygVRDwkhIaGASYxz1NAC9naq+/YMdkDzLc8VesoFUA8JISGhgEmMc9TgAv6JZb66d0+zgxks9HQLoh4SQkJCAZMY56jBBextUvfuaXYwo4WfbgHUQ0JISChgEuMcNbyA43gxlh3IJa5iL76apB4SQkJCAZMY56jhBew77zJ1/9qpuuHCT7Ug6iEhJCQUMIlxjhpewN6wunz9i6+Ol3KqBVAPCSEhoYBJjHNEAbtjTvlkLPvmm0o5zS6sW7cuOElCiCpbXZEb59jYWPA6WLNGfS1ILHN0xx13BM9Nf3/Z5/p08LmWVMCe7slY9s33lXaagfxhERJ/Biz5bZztDtuPtfpzJFWboy32Y63+nGbKkeBzLbGA9yUK9o2XWV4r7TQDZbuxhJQdCpjEN0cUcNd8By5PymbfdFtpp9iFfG40IUWHAibxzREFnMlQUjb7pkdLPcVA+dxoQooOBUzimyMKOJNDSZnsG64q9fS6UMyNJyTvUMAkvjmigDPx7wm+MimLi/i9v+UMAiG9hgIm8c0RBZzZtqQs9s3GSj+9wA+CLGcQCOk1GTfOwA/vPbxmTQTnSGKZo/+W3OGOnNt5brb090dwTjMl6gI+mpTBvtHq0k/NC7zymsEgpNtkLODAp2Yclp8fiWmO7kzCnpqxRX4+syXqAvZWJUWzb7JDcmqBV14/JISEhAIm5c0RBVyK4aRI9g3mWP5RcmqBV14/JISEhAIm5c0RBVyKsaRI9g3WSk7LC7zy+iEhJCQUMClvjijg0qxOimJffKfstAKvvH5ICAkJBUzKmyMKuDQ7kiK49J+fT8pOK/DK64eEkJBQwKS8OaKAS/O0K+ITkuyLrpedkhd45fVDQkhIKGBS3hxRwKVam+TNqR++EXjl9UNCSEgoYFLeHFHApRpO8mZf9JD0lAKvvH5ICAkJBUzKmyMKuFT5PhvavuAFLn3epU7gldcPCSEhoYBJeXNEAZfKd+XiJC/2xQalp+MFXnn9kBASEgqYlDdHFHDpBpO82BcbUZ9N6JXXDwkhIaGASXlzRAGXbiTJg0vffvSs+mxCr7x+SAgJCQVMypsjCrh0J1web0dyqg9faBd45fVDQkhIKGBS3hxRwBK9PxXLvsg29VmMC7zy+iEhJCQUMClvjihgid4/I9i+yKj6LMYFXnn9kBASEgqYlDdHFLDEaNILl7796JT6LMYFXnn9kBASEgqYlDdHFLCE787sb0eyv7xJfQanBV55/ZAQEhIKmJQ3RxSwzKYkK6f89KN2gVdePySEhIQCJuXNEQUsszPJyv7yUfXRnxZ45fVDQkhIKGBS3hxRwDJHkyzsL77D8qb66E8LvPL6ISEkJBQwKW+OKGAZ36ELk27ZX9qgPvIzBF55/ZAQEhIKmJQ3RxSw1PqkW0798YPtAq+8fkgI6ZyBM1q1CxQwaUnwHG2hgIWGk265WN7/OynwyuuHhJDOoYBJqXNEASuNJt2wv9BneVV91GcIvPL6ISGkcyhgUuocUcBKr1j6klAuluc/twq88vohIaRzKGBS6hxRwGrhz4W2PzykPtopAq+8fkgI6RwKmJQ6RxSw2lASyv7wPvXRThF45fVDQkjnUMCk1DmigNX2JqHsD59UH+0UgVdePySEdA4FTEqdIwpY7XgSwv7gpeojnVbgldcPCSGdQwGTUueIAo7BpUknLqYPYGgVeOX1Q0JI51DApNQ5ooBjsCHpxP7QNvVRTiv0yhOiTNZiDRVYwKTiyXuOKOAYbAsp4L3qo5yWekEQEhIKmMQ4RxRwDDq/EMv+0Jj6KKelXhCEhIQCJjHOEQUcg7FO5bvIxfQJSK3UC4KQkFDAJMY5ooBj4Lt15idiuRifgDVJvSAICQkFTGKcIwo4FqtmK+BB9dHNSL0gCAkJBUxinCMKOBaDsxXwDvXRzUi9IAgJCQVMYpwjCjgWO2Yr4APqowMA5IwCjsWB2Qo4vkdQAgB6QwHH4vhM5btYfWQAgAJQwLHwr4Q+Z7oCXqs+MgBAASjgmKydroA3q48KAFAACjgmm6cr4GH1UQEACkABx2R4ugIeUR8VAKAAFHBMRqYr4FH1UQEACkABx2R0ugI+rj4qAEABKOCYHG8v37mWN9RHBQAoAAUck9ct81oL+FL1EQEACkIBx+bS1gJerz4ahT17nNu+Pb7448rTU085d/AgCQnqSz1byvy/G5pVwI8+msPAFGt9awFvVh+Nwpo1YTez7Iiew06SfK87enPPPc7ddVd+X089W8rcmTSngG+4wbnXX89vbgqyubWAh9VHo0ABk/YgDl/7mnN9ffn+a5B6tpRpSgHfeGMlytcbbi3gEfXRKFDApD3Q8+U7d256PyjgfNKEAvbl+0Z1Xko80lrAo+qjUaCASXug1Vq+PhRwPql7AVesfL3R1gIeUx+NAgVM2gOd9vL1oYDzSZ0LuILl6421FnAjPweYAibtgcZ05etDAeeTuhbw4GAly9c7OVm+Z1l+oT4aBQqYtAflm6l8fSjgfFLHAvbl+9Zb+c1HyU5NFvAK9ZGoUMCkPSjXbOXrQwHnk7oVcMXLd9Jiv+WsUh9FnvbYit2+fXtQ+vu3280sK3uCF0tIAT/11FPu4MGDQdm48aB93SYnfKNCeTqVbxJQwKFrwEc/h0Uk7L2xoQW8VV6ys+VRV6Py9Vb5LWet+ijytMZ+rNUPynQZCFoooQW8xX6s1Z9TVUIBx+Kee+5xd911V1D5JgEFrJ8tdcL2ler/BHyD5XV30021KV9vrd9yNqiPIk8UMJkaCjgGX7PW7evrc7feuieofBMKOCBNKOAbXQ3L19vgt5zN6qPIEwVMpoYCVvPlO9da19+Pvr7wX8dQwJ1S9wL25ftGHcvXG/Rbzjb1UeSJAiZTQwErtZZvGgo4v9S5gGtdvt6Q33J2qI8iTxQwmRoKWGVq+fpQwPmlrgWclq9/B0dNy9fb4bec3eqjyBMFTKaGAlaYvnx9KOD8UscCHnST5Vtzu/2Wc6/6KIIEfnjvmv7+CAYo+0L5peQpt/WXDnb8gM8tGzdGcE5VCQVctpnL16dzAa9PDo5n/389OOs60M+WOmH7yp5ka0UK2JfvW00oX+9ev+UcUB9FkMCnZqyRD1BvC6Va/6ValVDAhWv58N7Zy9encwGH3jD9bKlTp30lLd/bbtOOcon2+VEfVR9FEAo4ooVStVDAhWr58N7O5etDAeeXuuwrjStf7wAFzEJpQCjgwrQ8UeNrf/AHAeXrQwHnlzrsKze5BpavN+pH/ZD6KIJQwBEslKqGAi5ES/l+3TLXfgoOux8UcH6p+r7S2PL1DvlRP6o+iiAUMAWcORRw7trKd15X94MCzi9V3lfS8v34x9XDLHPUj/qY+iiCUMAUcOZQwLnqqXx9KOD8UtV9pfHl6435UT+uPoogFDAFnDkUcG56Ll8fCji/VHFf8c8waHz5escpYBZKA0IB5yKX8vWhgPNL1faVLePfivIdd9yP+kn1UQShgCngzKGAe5Zb+fpQwPmlSvtKWr7+mUkYd9KP+kvqowhCAVPAmUMB9yTX8vWhgPNLVfaV28a/xe23q4c5Ki/5UT+lPoogFDAFnDkUcGZf/3rO5etDAeeXKuwrlO8MTlVny6GAKeDMoYAz8eU7b17O5etDAeeX2PcVync21dlyKGAKOHMo4K61lO99SZ7l60MB55eY9xXKtxM/6vwTdOMXSt1DAXelrXzPyv1+UMD5JdZ95ePjX3LXLvUwR238n6B5EVajF0oTQgEHK7x8fSjg/BLjvkL5Bhp/ERZvQ2rsQmlKKOAgpZSvDwWcX2LbVyjfLoy/Dem4+iiCUMAUcOZQwB2VVr4+FHB+iWlfoXy7dJwCbuRCaVoo4FmVWr4+FHB+iWVf2Z5+nzvVw1wpx/2o82EMjVooTQwFPKPSy9eHAs4vMewrt6ffg/Lt1viHMfBxhI1ZKE0NBTyt++4TlK8PBZxf1PsK5duDoxRwYxZKk0MBT+HL96yzxk/6m0mZ5etDAecX3b5y9dW3uzlzKN8eHPKjfkh9FEEoYAo4cyjgM7SV74LS7wcFnF80+8rtt9/utm517u671cNcaaN+1EfVRxGEAqaAM8Z/+kpoak9evj4UcF7p7x8Imusja/LbV3ZNvMz5xAnJBNfJqB/1A+qjCEIBU8AZgwlRlK8PBZxXBgYGwu79lnz2lV28xyhPB/yo36s+iiAUMAWcMXARla8PBZxXyixgyjd39/pR360+iiAUMAWcMY0XVfn6UMB5pawCpnwLsduP+g71UQShgCngjGm06MrXhwLOK2UU8J28zLkoO/yoD6mPIggFTAFnTGN985sRlq8PBZxXii5gyrdQQ37UB9VHEYQCpoAzppF8+S5YEGH5+lDAeSX3Ar766tNfm/It3KAf9Q3qowhCAVPAGdM4LeX7UBJb+fpQwHkl1wLetcv+2BY3Z84cyrccG/yor1UfRRAKmALOmEZpK99FEVz/qaGA80puBTzxIqutW7e6u3m6RlnW+lFfpT6KIIEFPBDBopg++Rbwfsv2pmf79qA0Rkv5nkhiLV+fOzuOeMgacOr5KzL9/UGzvWfPnrDZmK2AW17hfIKna5RplR/1xeqjCMJPwKQ9eFtL+focls/7bMnvJ+DaJvQn21AzFTBvL1JanHj2P5xSH0lHFDBpD1Jt5etDAVc8ZRQwv+dVOpVMsv/lpPpoOqKASXswbfn6UMAVT9EFTPmqnWwt4DH10XREAZP2NN0M5etDAVc8RRYw5RuDsdYCHlUfTUcUMGlPkz300Izl60MBVzxFFDAf3huT0dYCHlEfTUcUMGlPU/nyXbRo1mtDAVc8eRcwH94bm5HWAh5WH01HfiADBrfqBfybyX63p397+AfYNjlN5N8m0qF8fapewMPJ9vEc2bhdP2eKhL69KBRvL4rNcGsBb1YfTUcN+Qk4KeA/flEjhw8HDVHVC3gyefcQEInNrQW8Xn00HVHAAAUM1MP61gK+VH00HVHAAAUM1MOlrQU8z/K6+ohmRQEDFDBQfW9Y5iat7P9wXH1Us6KAAQoYqL7jSTsX+3uBKWCAAgaqb3S6Ah5RH9WsKGCAAgaqb2S6Ah5WH9WsKGCAAgaqb3i6At6sPqpZUcAABQxU3+bpCvga9VHNigIGKGCg+q6ZroAXq49qVhQwQAED1bd4SgFPlHC8nwtMAWe2f7/+0bYkp8cCU8A98V9PfT9J8TlyxMXq7c8BnqaAD6iPbkYUcGbtn8VNqpUz5oEC7kngNkIqnoj/5eTAbAW8Q310M6KAM6OAqx0KOD8UcDMScQHvmK2AB9VHNyMKODMKuNqhgPNDATcjERfw4GwFvFp9dDOigDOjgKsdCjg/FHAzEnEBr56tgM+xvKk+wmlRwJlRwNUOBZwfCrgZibSAfbcumrGAJ0p4TH2U06KAM6OAqx0KOD8UcDMSaQGPzVq+EwW8V32U06KAM6OAqx0KOD8UcDMSaQHvDSngYfVRTosCzowCrnYo4PxQwM1IpAW8LaSA43wldODKGUjUm0s5Bbx//363ffv2oKxZs92+Lokr4SVEAc9uj/2h0LXQ36++7yR7juQ6NwIbQgr4UvVRToufgM+wxX6s1Z8TKX0eKOBptoY1EZwTqdrcCLwzCeFifCQlBXwGCrjqoYBDQgGTouamZMeTUPaH96mPdgoK+AwUcNVDAYeEAiZFzU3JOr8Aa5L94SH10U5BAZ+BAq56KOCQUMCkqLkp2VASysX4RCwK+AwUcNVDAYeEAiZFzU3JZn4CVjv7w32WV9RHfAYK+AwUcNVDAYeEAiZFzU2JXrX0Jd2wvzCqPuoz+F0o4MpXvYB/M9nv9vRv7/iBl1vYdCoeCrhTttqfO7Kx81pY098fwTmRWOYmia+AR5NuudgeyNGQn4DvTMKemrFFfj6kjHlIGlzAjyRVX/NEMTdJfAU8nHTL/tIG9VGfgQKmgGsVCrhTKGCSZW6S+Ap4fdIt+0vLXEyfjEQBU8C1CgXcKRQwyTI3SVwF7Dt0QZKF/cWj6qM/jQKmgGsVCrhTKGCSZW6SuAr4aJKV/eWd6qM/jQKmgGsVCrhTKGCSZW6SuAp4Z5KV/eVN6qM/jQKmgGsVCrhTKGCSZW6SuAp4U5KV/eXFllPqMxhHAVPAtQoF3CkUMMkyN0k8Bey784KkFy6W9wNTwBRwrUIBdwoFTLLMTRJPAY8mvbIvsk19FuMoYAq4VqGAO4UCJlnmJomngLclvXKxPBeaAqaAaxUKuFMoYJJlbpJ4Cjj8+c8zsS8yx3JCfSYUMAVcr1DAnUIBkyxzk8RRwM9a5iR5sC80oj4bCpgCrlco4E6hgEmWuUniKOCRJC/2xQbVZ0MBU8D1CgXcKRQwyTI3SRwFPJjkxaVvR3pLejoUMAVcq1DAnUIBkyxzk+gL2Hdlb28/amdf8JD0lChgCrhWoYA7hQImWeYm0RfwoSRvTv3xhBQwBVyrUMCdQgGTLHOT6At4OMmbfdFrpKdEAVPAtQoF3CkUMMkyN4m+gK9J8ubStyM9LTslCpgCrlUo4E6hgEmWuUm0BfyPLq+3H7WzL7xDdloUMAVcq1DAnUIBkyxzk2gLeEdSFKd8KhYFTAHXKhRwp1DAJMvcJNoC7v3pV7OxbzAmOS0KmAKuVSjgTqGASZa5SXQFPJYUzaleDU0BU8C1CgXcKRQwyTI3ia6Ah5Oi2TdZJTm1ihfwwBm76Cy2UMBNSPA8tKtBAe8J3R0rvuaJaG50ViVlcIp/hq74YqSASaZ5aEcBV2bNE9HcaBxNyuIU/wxd8cVIAZNM89COAq7MmieiudHo/bN/QznFP0NXfDFSwCTTPLSjgCuz5olobsrnn/18RVIm+4ZHSz3Fii9GCphkmod2FHBl1jwRzU358n/2cyf2TYdKPcWKL0YKmGSah3YUcGXWPBHNTfmGkrLZN11uea20U6z4YqSASaZ5aEcBV2bNE9HclMt34LJEwb7xvtJOs+KLkQImmeahHQVcmTVPRHNTrn2Jin3zTaWdZsUXIwVMMs1DOwq4MmueiOamXBsSFfvm8y3HSjnNwMVYerJupDMJLGASafKeh3aBBSxJ3htkrGuexD035Tnuivrkoy5KeLiUU411MVLApMh5aEcBk7qlugU8LC3fiQK+zKXvgypWrIuRAiZFzkM7CpjULdUsYN95l6j7d5wdyGjhpxvrYqSASZHz0I4CJnVLNQv4gLp3T7ODGSz8dGNdjBQwKXIe2lHApG6pZgFvUvfuaS59MdZPCj3dWBcjBUyKnId2FDCpW6pXwM9Z5qt79wx2QDsLPeVYFyMFTIqch3YUMKlbqlfAO9V9O4Ud1HvUVwUAgIK9R92307IDO6C+MgAAFCSeF1+1s4Nbr746AAAUZL26Z2dlB3hIfYUAAMhZ+R872C1XxluSAAAo16C6Xzuyg5xnGVNfKQAAcvKUZZ66X4PYgd6svloAAOTkZnWvBrODXWh5UX3FAADoke+yhepe7Yor61OSAAAozrC6T7tmB73E8or6ygEAkJHvsCXqPs3EDny3+uoBAJDRbnWPZmYHf4XldfUVBACgS29YLlf3aE/sBEbUVxEAgC6NqPuzZ46fggEA1VL9n34nOX4KBgBUx4i6N3Pj+CkYAFANr7q6/PQ7yfFTMAAgfjvVfZk7l/4UzPuCAQCx8j/9rlD3ZSHsxHaqry4AADOo30+/k+zk+h0/BQMA4lPfn34nOX4KBgDEp74//U6yk1xh+Rf1lQYAYMLLru4//U6yE92mvtoAAEzYpu7F0tjJnm05rr7iAIDGO2E5W92LpbITHlRfdQBA4w2q+1DCTvy76isPAGis+9U9KGMnv9alD70GAKBMvnvere5BKbsAu9V3AQDQOLvV/SdnF2G55afqOwEAaAz/Vtjl6v6LguNtSQCA8gypey8aLn1b0hPqOwIAqD3fNXPVvRcVuyAb1XcFAFB7G9V9FyW7MHvVdwYAUFt71T0XLbs477A8r75DAIDaecGyVN1zUbMLtFl9lwAAtbNZ3W+VYBfqoPpOAQBq4yF1r1WGXayrXPrxUAAA9MJ3yRXqXqsUu2BD6rsGAKg83vPbLbtocy1H1HcOAFBZ33O85zcbu3ADjg9rAAB0z3fHanWPVZpdwJ3quwgAqJwd6v6qPLuIiyyPqe8kAKAy/o9lgbq/asEu5HstvxDfUABA/HxX/Bt1b9WK4xOTAACdbVP3Ve3YRe2zfEd9ZwEA0Tpk6VP3VS3ZhX2X5WfiGwwAiM+LlsvUPVVrjmdFAwCmGlT3UyM4PrYQAPA2PmawLHaxl1h+pL7jAAC5H1uWqHupUeyCX6e+6wAAqTctv6Huo0ayC/8l9d0HAMh8Qd1DjWUXf77lQfUEAABK5/f++eoeajS7ARda/kk8CACA8pywXKjuHyTjJXyt5TXxQAAAiuf3+jXq3kELuyE3q6cCAFC4m9V9g2nYjRlRTwYAoDC71T2DGbj0owsfUU8IACB3fm/nRVcxsxu00vGiLACoE7+nr1T3CwK49EVZb4oHBgDQO/+iq2vVvYIu2A377+qpAQD07L+o+wQZ2I37H+rJAQBkNqLuEWTk0idl3a+eIABA1x5wvOiq2uwGnm95TDxIAIBwj1vOV/cHcmA38p2W58QDBQDo7IeWi9W9gRzZDX2/5RXxYAEAZub36Peo+wIFsBv7W463JwFAjPzefKO6J1Agu8FD6ikDAEwxpO4HlMBu9E71pAEATtup7gWUyG74/1ZPHADA/bW6D1Ayu+kLLH+rnjwAaDC/By9Q9wEEXFrCD4oHEACayO+9lG+T2QCcazkiHkQAaBJfvueq939EwAZhqaOEAaAMfq+lfPE2l5bwk+LBBIA683vsUvV+jwjZYPQ7ShgAiuD31n71Po+IubSEj4kHFQDqxO+plC86s0G5zPKMdl4BoBaesVym3tdRITYwl1iOS8cWAKrtactK9X6OCnJpCY9p5xcAKsmX74XqfRwVZgN0keV74kEGgCp5zFG+yIMN0hJHCQNAiO9aFqv3bdSIS0v4O+LBBoCY+fI9R71fo4Zc+tjK+8UDDgAx+jtH+aJINmBnO0oYAFrts5yt3p/REDZs/0s98QAQgb9U78doGBu6OZZd6skHACG/B85R78doKBu+2yxviBcBAJTJ73m3qfdfwJfwdZafixcEAJTB73XXqfdd4DQbyAHLD8ULAwCK5Pe4AfV+C0xhg3mx5QnxAgGAIhyxXKzeZ4EZ2YBeYDkgXigAkCe/py1S769ARzaocx2vkAZQD34vm6veV4Gu2ND+oXrlAEAP/lC9jwKZ2QC/z/Jj9SoCgC6csLxPvX8CPbNBXmEZFS8oAAjh96ql6n0TyI1Lfy/8Gctb2rUFANPye9NnHb/vRV3ZcF9veUG7zgDgDH5Pul69PwKFs0FfaXlcvOAAwHvYslK9LwKlsYFfaPmKdt0BaLivWM5S74eAhA3/Rywva9cggIbxe86H1fsfIGcL4V0ufcwbABTtUcvl6n0PiIYtiPmWTzk+2hBAMfze8mnLfPV+B0TJFsc1lh9o1ymAmvGfYvQB9f4GRM8WyhLL34gXLIB62G9ZrN7XgEqxRXOr5VXx4gVQTf6FVpvV+xhQWbaA/rXjBVoAusMLrYA8uPQFWp9w/DQMYHanLH/keKEVkC9bVFdavqVd3wAi5feGK9X7FFBbtsDmWD5qeUm71gFEwu8FWy1z1PsT0Ai22Pot39CuewBi/t0S/er9CGgkW3y/a3lOvAkAKNePLJvU+w/QeLYQl1m+Kt4QABTPf2bvHssF6n0HQAtblOstR7X7A4CC+LV9rXqfATADW6B9lttc+gHbAKrvpEtfeNmn3l8ABLDFutTyZ5bXpVsHgKz8e3q/YDlPvZ8AyMAW7yrLfdp9BECX/srxJCugHmwxb7D8g3hTATA7/3veder9AkDObGHPc/x+GIgRv+cFmsAW+WLLH1v+WbrlAPBr8JOOjwsEmsWlRfw5l35sGYDyULwATj/IgyIGiufX2OcdxQuglUuL+IuWV6RbFFA/k8W7TL3OAUTMpR/0QBEDvfNr6EuO4gXQDds0VkxsHj+TbmFA9fzUssOyQr2OAVSYS5+qNWx5XrqlAfHzbyf6hOV89boFUCO2qZxjGbI8K93igPgcs9xqOVu9TgHUmG0y8y0fsYxJtzxA73HL71nmqtclgAZx6Scv/UfLYekWCJTv25aN6jUIAL6Mf9XyVccrp1Fffrb9jF+jXm8AMIVtThe49Hdhj0q3SiA/fpY/ZrlAvb4AIIhtWKstf255Sbp9At3zM/sXltXqdQQAmdkmttDyYcuD0i0V6MzP6E2Whep1AwC5so3tCpc+d/oH0m0WeJufxc9YrlCvDwAohW14A5YvuPQ9lECZnrH8qeVX1OsAAKQcZYziPeMoXQCYmW2Qa136YRA8cQu98jPkn2f+fvVcA0Cl2Mb5ActnLY9It3FUiZ+VP7F8QD2/AFALtqFeZNlsudfyonKHR1T8LPiZ8LNxkXpOAaDWbKOda/mge/un47d0+z9K9qblYZd+QtfVjucwA4COS3869h8Q4R8VyAu56sffU39vP+T4cHsAiJdt0issv2P5sksfJfimrjvQJX+v/D3z987fQz7UHgCqyjbx8yzXu/QhIA9ZTsnqBe38hxwcdOnDMP695Tz1vAAACuTS3yHfbNll+XvLT1QN1CD+Gh906TX31/6D6jkAAETACmGZZZ1LP/3GP4zfPxv4eU1XVdoLLr12/hr6a7ne8btbAEC3XPo75V9z6Qu9PmW5e6JgTmj6LQr+GcrfcumLoz5t+X2X/scLv7MFAJTDSucyN7Wg/T9rP+Gq+U/bz1medOk5tBbsr1suV19vAACCWXEtt7zbpT8l/rblFssnXfr70L2WByzfdul7XP2rgL9vecqlb8Hxj1Q86dJ/2n15msJ8eeL/d3Lizx6b+Lvfn/haD0987Qcmvteuie99y8SxrJs4tuXq6wQ0xf8HsoZk+xP7OZgAAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==

let renderFunction;
let fpsLimitMs;
let now;
let then;
let elapsed;
let renderInterval;
let beforeRender;
let afterRender;
requestAnimationFrame = (cb) => renderFunction = cb;

function setFPSLimit(fpsLimit) {
    fpsLimitMs = 1000 / fpsLimit;
    then = Date.now();
}
function render() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsLimitMs) {
        then = now - (elapsed % fpsLimitMs);

        if (beforeRender) beforeRender();
        if (renderFunction) renderFunction();
        if (afterRender) afterRender();
    }
}

setInterval(render, 0);
